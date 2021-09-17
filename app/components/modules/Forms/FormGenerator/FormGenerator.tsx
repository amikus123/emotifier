import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EmailInput from "../../../elements/Inputs/EmailInput/EmailInput";
import PasswordInput from "../../../elements/Inputs/PasswordInput/PasswordInput";
import EmojiInput from "../../../elements/Inputs/EmojiInput/EmojiInput";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import ProfilePicSelector from "../../../elements/Inputs/ProfilePicSelector/ProfilePicSelector";

import {
  addEmojiUsername,
  loginWithEmail,
  registerWithEmail,
  loginWithGoogle,
  loginWithFacebook,
} from "../../../../utils/forms/formHandlers";
import { validationTextCodes } from "../../../../constans/validationCodes";

const options = {
  emailLogin: {
    defaultValues: {
      email: "",
      password: "",
      profilePic: null,
      username: null,
    },
  },
  emailRegistration: {
    defaultValues: {
      username: "",
      email: "",
      password: "",
      profilePic: "",
    },
  },
  usernameInput: {
    defaultValues: {
      username: "",
      profilePic: "",
      password: null,
      email: null,
    },
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&  >div": {
        width: "100%",
        paddingBottom: "2rem",
        "& >div": {
          width: "100%",
        },
      },
    },
  })
);
type FormFunctions =
  | typeof loginWithEmail
  | typeof registerWithEmail
  | typeof loginWithGoogle
  | typeof loginWithFacebook
  | typeof addEmojiUsername;
interface Props {
  handleSubmit: FormFunctions;
  type: "emailLogin" | "emailRegistration" | "usernameInput";
}

const FormGenerator = ({ handleSubmit, type }: Props) => {
  const [formValues, setFormValues] = useState(options[type].defaultValues);
  const [formValuesErrors, setFormValuesErrors] = useState(
    options[type].defaultValues
  );

  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    console.log(formValuesErrors);
  }, [formValuesErrors]);

  const handleGenerator = (valueName: string) => {
    const res = (newValue: string) => {
      setFormValues({ ...formValues, [valueName]: newValue });
    };
    return res;
  };

  const resetErrorTextGenerator = (valueName: string) => {
    const res = () => {
      console.log("should reset ", valueName);
      setFormValuesErrors({ ...formValuesErrors, [valueName]: "" });
    };
    return res;
  };

  const handleFormSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    // initial check
    const res = await handleSubmit(formValues);
    if (res.error) {
      setFormValuesErrors(res.errorValues);
    } else {
      if (type === "usernameInput") {
        const res = await handleSubmit(formValues);
        if (res.error) {
          setFormValuesErrors(res.errorValues);
        }
          else if (
            res.text === validationTextCodes.goFeed ||
            res.text === validationTextCodes.loggedIn
          ) {
            router.push("/feed");
          } else {
            console.error("!!!!");
          }
      } else {
        if (
          res.text === validationTextCodes.goFeed ||
          res.text === validationTextCodes.loggedIn
        ) {
          console.log("got it");
          router.push("/feed");
        } else {
          console.error(res, "!!!!");
        }
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        className={classes.root}
      >
        {formValues.username !== null ? (
          <EmojiInput
            setText={handleGenerator("username")}
            text={formValues.username}
            label="nick"
            errorText={formValuesErrors.username}
            resetErrorText={resetErrorTextGenerator("username")}
          />
        ) : null}

        {formValues.email !== null ? (
          <EmailInput
            setEmail={handleGenerator("email")}
            email={formValues.email}
            errorText={formValuesErrors.email}
            resetErrorText={resetErrorTextGenerator("email")}
          />
        ) : null}

        {formValues.password !== null ? (
          <PasswordInput
            setPassword={handleGenerator("password")}
            password={formValues.password}
            errorText={formValuesErrors.password}
            resetErrorText={resetErrorTextGenerator("password")}
          />
        ) : null}
        {formValues.profilePic !== null ? (
          <ProfilePicSelector
            setText={handleGenerator("profilePic")}
            text={formValues.profilePic}
          />
        ) : null}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => {
            console.log("kilklo");
          }}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default FormGenerator;
