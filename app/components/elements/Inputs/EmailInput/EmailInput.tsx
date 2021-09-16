import {
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
} from "@material-ui/core";
import React from "react";

interface Props{
  setEmail: (string:string) => void;
  email: string;
  errorText:string
}
const EmailInput = ({
  setEmail,
  email,errorText
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
      {errorText}
    </Grid>
  );
};

export default EmailInput;
