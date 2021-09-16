import { FormControl, Grid, TextField } from "@material-ui/core";
import React from "react";
import { capitalize } from "../../../../utils/general/stringManipulation";

interface Props {
  setEmail: (string: string) => void;
  email: string;
  errorText: string;
  resetErrorText?:() => void;

}
const EmailInput = ({ setEmail, email, errorText,resetErrorText }: Props) => {
  return (

        <TextField
         error={!!errorText}
          fullWidth={true}
          inputProps={{ autoComplete: "off" }}
          type="email"
          value={email}
          name="name"
          label="Email"
          onChange={(e) => {
            if(errorText && resetErrorText){
              resetErrorText()
            }
            setEmail(e.target.value);
          }}
          helperText={capitalize(errorText)}
          variant="filled"
        />
  );
};

export default EmailInput;
