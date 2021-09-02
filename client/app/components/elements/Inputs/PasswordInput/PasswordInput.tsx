import {
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React,{useState} from "react";

interface Props{
  password: string;
  setPassword:(string:string)=>void
}
const PasswordInput = ({
  password,
  setPassword,
}: Props) => {

  const [showPassword,setShowPassword] = useState(false)
  const togglePassword = () =>{
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="filled">
      <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
      <FilledInput
        id="filled-adornment-password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        endAdornment={
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
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
