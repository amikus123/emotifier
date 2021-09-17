import React from "react";
import { Link } from "@material-ui/core";

import facebookLogo from "../../../../../public/facebookLogo.svg";
import gmailLogo from "../../../../../public/gmailLogo.svg";
import googleLogo from "../../../../../public/googleLogo.svg";
import ButtonWithEmoji from "../ButtonWithEmoji/ButtonWithEmoji";
import CustomDialog from "../../Dialog/CustomDialog";
import FormGenerator from "../../../modules/Forms/FormGenerator/FormGenerator";

import { registerWithEmail, loginWithEmail,addEmojiUsername, loginWithFacebook, loginWithGoogle } from "../../../../utils/forms/formHandlers";

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
  name: "google" | "facebook" | "email" | "login";
  children?: any;
}
// This component is used in registration to display modal

export const ModalButton = ({ name, children }: Props) => {
  const [open, setOpen] = React.useState(false);
  // open modal window
  const handleClickOpen = async () => {
    if (name === "facebook" || name === "google") {
      const res = await options[name].handleSubmit();
      console.log(res, "rex");
      if (res.text === "logged") {
        // user is already logged
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
    switch (name) {
      case "google":
        return (
          <FormGenerator
            type="usernameInput"
            handleSubmit={options[name].modal}
          />
        );
      case "facebook":
        return (
          <FormGenerator
            type="usernameInput"
            handleSubmit={options[name].modal}
          />
        );
      case "login":
        return (
          <FormGenerator
            type="emailLogin"
            handleSubmit={options[name].handleSubmit}
          />
        );
      default:
        return (
          <FormGenerator
            type="emailRegistration"
            handleSubmit={options[name].handleSubmit}
          />
        );
    }
  };
  return (
    <>
      {name !== "login" ? (
        <ButtonWithEmoji onClick={handleClickOpen} icon={options[name].icon}>
          Register with {name}
        </ButtonWithEmoji>
      ) : (
        <Link href="" onClick={handleClickOpen}>
          {children}
        </Link>
      )}
      <CustomDialog
        open={open}
        dialogTitle={options[name].dialogTitle}
        handleClose={handleClose}
      >
        {getComponent()}
      </CustomDialog>
    </>
  );
};

export default ModalButton;
