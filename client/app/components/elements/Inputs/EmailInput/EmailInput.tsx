import {
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import { EmailRegisterFormValues } from "../../../../types/auth";

interface Props{
  setEmail: (string:string) => void;
  email: string;
}
const EmailInput = ({
  setEmail,
  email,
}: Props) => {
  return (
    <Grid item>
      <FormControl variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Email</InputLabel>
        <FilledInput
          id="name-input"
          name="name"
          type="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
      </FormControl>
    </Grid>
  );
};

export default EmailInput;
