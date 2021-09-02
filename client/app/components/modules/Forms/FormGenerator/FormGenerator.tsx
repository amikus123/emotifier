import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EmailInput from "../../../elements/Inputs/EmailInput/EmailInput";
import PasswordInput from "../../../elements/Inputs/PasswordInput/PasswordInput";
import EmojiInput from "../../../elements/Inputs/EmojiInput/EmojiInput";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { useRouter } from 'next/router'

const options = {
  emailLogin: {
    defaultValues: {
      email: "",
      password: "",
      username: null,
    },
  },
  emailRegistration: {
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  },
  usernameInput: {
    defaultValues: {
      username: "",
      password: null,
      email: null,
    },
  },
};
interface Props {
  handleSubmit: (values: any) => Promise<any>;
  type: "emailLogin" | "emailRegistration" | "usernameInput";
}
const FormGenerator = ({ handleSubmit, type }: Props) => {
  const [formValues, setFormValues] = useState(options[type].defaultValues);
  const router = useRouter()

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "&  >div": {
          width: "400px",
          paddingBottom: "2rem",
          "& >div": {
            width: "100%",
          },
        },
      },
    })
  );
  const classes = useStyles();

  const handleGenerator = (valueName: string) => {
    const res = (newValue: string) => {
      setFormValues({ ...formValues, [valueName]: newValue });
    };
    return res;
  };

  return (
    <form
      onSubmit={async (e) => {
        console.log("submited");
        e.preventDefault();
        if(type === "usernameInput"){
         const res =  await handleSubmit(formValues.username);
         if (res==="registered"){
router.push("/feed")
         }
        }else{
          await handleSubmit(formValues);

        }
      }}
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className={classes.root}
      >
        {formValues.username !== null ? (
          <EmojiInput
            setText={handleGenerator("username")}
            text={formValues.username}
            label="nick"
          />
        ) : null}

        {formValues.email !== null ? (
          <EmailInput
            setEmail={handleGenerator("email")}
            email={formValues.email}
          />
        ) : null}

        {formValues.password !== null ? (
          <PasswordInput
            setPassword={handleGenerator("password")}
            password={formValues.password}
          />
        ) : null}

        <Button variant="contained" color="primary" type="submit" onClick={()=>{console.log("kilklo")}} > 
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default FormGenerator;
