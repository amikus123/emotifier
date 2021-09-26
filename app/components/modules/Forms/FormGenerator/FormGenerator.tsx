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
  createPost,
} from "../../../../utils/forms/formHandlers";
import { validationTextCodes } from "../../../../constans/validationCodes";
import ImageInput from "../../../elements/Inputs/ImageInput/ImageInput";

const options = {
  emailLogin: {
    defaultValues: {
      email: "",
      password: "",
      profilePic: null,
      username: null,
      text: null,
      images: null,
    },
  },
  emailRegistration: {
    defaultValues: {
      username: "",
      email: "",
      password: "",
      profilePic: "",
      text: null,
      images: null,
    },
  },
  usernameInput: {
    defaultValues: {
      username: "",
      profilePic: "",
      password: null,
      email: null,
      text: null,
      images: null,
    },
  },
  postCreation: {
    defaultValues: {
      username: null,
      profilePic: null,
      password: null,
      email: null,
      text: "",
      images: [],
    },
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display:"flex",
      justifyContent:'center',
      "& >*": {
        paddingBottom: "2rem",
      },
    },
  })
);
type FormFunctions =
  | typeof loginWithEmail
  | typeof registerWithEmail
  | typeof loginWithGoogle
  | typeof loginWithFacebook
  | typeof addEmojiUsername
  | typeof createPost;
interface Props {
  handleSubmit: FormFunctions;
  type: "emailLogin" | "emailRegistration" | "usernameInput" | "postCreation";
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
    if (valueName !== "images") {
      const res = (newValue: string) => {
        setFormValues({ ...formValues, [valueName]: newValue });
      };
      return res;
    } else {
      const res = (newValue: string) => {
        setFormValues({ ...formValues, [valueName]: newValue });
      };
      return res;
    }
  };

  const resetErrorTextGenerator = (valueName: string) => {
    // restes the chosen
    const res = () => {
      setFormValuesErrors({
        ...formValuesErrors,
        [valueName]: options[type][valueName],
      });
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
        } else if (
          res.text === validationTextCodes.goFeed ||
          res.text === validationTextCodes.loggedIn
        ) {
          router.push("/feed");
        } else {
          console.error("!!!!");
        }
      } else if (type === "postCreation") {
        // to do
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
        {formValues.text !== null ? (
         <EmojiInput
         setText={handleGenerator("text")}
         text={formValues.text}
         label="nick"
         errorText={formValuesErrors.text}
         resetErrorText={resetErrorTextGenerator("text")}
       />
        ) : null}
        {formValues.images !==null?(
          <ImageInput/>
        ):null}
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
