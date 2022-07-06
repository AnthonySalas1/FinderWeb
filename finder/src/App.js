import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "./Landing/navbar";
import { Main } from "./Menu/main";

function App() {

       const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <>
      <Main />
    </>
  ) : (
      <Navbar />
  );

}
export default App;