import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export const Login = () => {
  const { loginWithRedirect } = useAuth0(); 
  return (
  <Button
    onClick={() => loginWithRedirect()}
    sx={{ marginLeft: "5px" }}
    variant="contained"
  >
    Log In{" "}
  </Button>
  )
};
