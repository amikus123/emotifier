import React from "react";
import { Link } from "@material-ui/core";
import { useRouter } from 'next/router'

import facebookLogo from "../../../../../public/facebookLogo.svg";
import gmailLogo from "../../../../../public/gmailLogo.svg";
import googleLogo from "../../../../../public/googleLogo.svg";
import ButtonWithEmoji from "../ButtonWithEmoji/ButtonWithEmoji";
import CustomDialog from "../../Dialog/CustomDialog";
import FormGenerator from "../../../modules/Forms/FormGenerator/FormGenerator";

import {
  registerWithEmail,
  loginWithEmail,
  addEmojiUsername,
  loginWithFacebook,
  loginWithGoogle,
} from "../../../../utils/forms/formHandlers";
import { validationTextCodes } from "../../../../constans/validationCodes";

const options = {
  google: {
    // functions that fires on form submit
    handleSubmit: loginWithGoogle,
    // function that fires on nutton click, allows for
    // insta login with externmal providers
    modal: addEmojiUsername,
    icon: googleLogo,
    dialogTitle: "First enter your emoji nick",
  },
  facebook: {
    handleSubmit: loginWithFacebook,
    modal: addEmojiUsername,
    icon: facebookLogo,
    dialogTitle: "First enter your emoji nick",
  },
  email: {
    handleSubmit: registerWithEmail,
    dialogTitle: "Register",
    modal: () => {
      throw new Error("shouldnt fire");
    },
    icon: gmailLogo,
  },
  login: {
    handleSubmit: loginWithEmail,
    modal: () => {
      throw new Error("shouldnt fire");
    },
    dialogTitle: "Login",
  },
};

interface Props {
  // presets 
  type: "google" | "facebook" | "email" | "login";
}
// This component is used in registration to display modal

export const ModalButton = ({ type}: Props) => {

  const router = useRouter()

  const [open, setOpen] = React.useState(false);
  // open modal window
  const handleClickOpen = async () => {
    // if login source is foreign, we allow to click-login
    // for registered users, otherwise modal is opened
    if (type === "facebook" || type === "google") {
      const res = await options[type].handleSubmit();
      // user is already registered, we move him to feed
      // if he dosent have an acount, me open a modal instead
      if (res.text === validationTextCodes.goFeed) {
        router.push("/feed")
      } else {
        setOpen(true);
      }

    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getComponent = () => {
    switch (type) {
      case "google":
        return (
          <FormGenerator
            type="usernameInput"
            handleSubmit={options[type].modal}
          />
        );
      case "facebook":
        return (
          <FormGenerator
            type="usernameInput"
            handleSubmit={options[type].modal}
          />
        );
      case "login":
        return (
          <FormGenerator
            type="emailLogin"
            handleSubmit={options[type].handleSubmit}
          />
        );
      default:
        return (
          <FormGenerator
            type="emailRegistration"
            handleSubmit={options[type].handleSubmit}
          />
        );
    }
  };

  return (
    <>
      {type !== "login" ? (
        <ButtonWithEmoji onClick={handleClickOpen} icon={options[type].icon}>
          Register with {type}
        </ButtonWithEmoji>
      ) : (
        <Link href="#" onClick={handleClickOpen}>Log in</Link>
      )}
      <CustomDialog
        open={open}
        dialogTitle={options[type].dialogTitle}
        handleClose={handleClose}
      >
        {getComponent()}
      </CustomDialog>
    </>
  );
};

export default ModalButton;
