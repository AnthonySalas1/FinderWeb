import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export const Logout = () =>{
    const { logout } = useAuth0();

    return( <Button
    onClick={() => logout()}
    sx={{ marginLeft: "5px" }}
    variant="contained"
  >
    Log Out{" "}
  </Button>
    )
} 