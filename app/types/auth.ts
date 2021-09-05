export interface EmailRegisterFormValues {
  username: string;
  email: string;
  password: string;
}

export interface EmailLoginFormValues {
  email: string;
  password: string;

}


export interface ForeigAuthResult{
  error:boolean;
  email:string;
  
}
