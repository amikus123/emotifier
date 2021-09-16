import {
  InputAdornment,
  IconButton,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import { capitalize } from "../../../../utils/general/stringManipulation";

interface Props {
  password: string;
  setPassword: (string: string) => void;
  errorText: string;
  resetErrorText?:()=>void;
}
const PasswordInput = ({ password, setPassword, errorText ,resetErrorText}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      error={!!errorText}
      id="filled-adornment-password"
      type={showPassword ? "text" : "password"}
      value={password}
      label="Password"
      onChange={(e) => {
        setPassword(e.target.value);
        if(errorText && resetErrorText){
          resetErrorText()
        }
      }}
      helperText={capitalize(errorText)}

      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={togglePassword}
              onMouseDown={togglePassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="filled"
    />
  );
};

export default PasswordInput;
