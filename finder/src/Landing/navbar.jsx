import React, {useState} from "react";
import {AppBar, useMediaQuery, useTheme, Toolbar, Tabs, Tab} from '@mui/material';
import WorkIcon from "@mui/icons-material/Work";
import Drawers from "./drawer";
import { Login } from "./Auth/login";
import { Logout } from "./Auth/logout";
import Banner from "./banner";
//import { Profile } from "./Auth/profile";
import { useAuth0 } from "@auth0/auth0-react";
const PAGES =["NEWS","JOBS","ABOUT US","SUPPORT"];
export const Navbar = () => {
     const { isAuthenticated } = useAuth0();
     const [value, setValue] = useState();
     const theme = useTheme();
     const isMatch = useMediaQuery(theme.breakpoints.down('md'));

     return (
       <>
         <React.Fragment>
           <AppBar sx={{ background: "rgba(0,0,0,.5)" }}>
             <Toolbar>
               {isMatch ? (
                 <>
                   <WorkIcon
                     sx={{
                       width: "80px",
                       height: "120px",
                       marginRight: "20px",
                     }}
                   />
                   <Drawers />
                 </>
               ) : (
                 <>
                   <Tabs
                     sx={{ marginLeft: "auto" }}
                     textColor="inherit"
                     value={value}
                     onChange={(e, value) => setValue(value)}
                     indicatorColor="secondary"
                   >
                     {PAGES.map((page, index) => (
                       <Tab key={index} label={page} />
                     ))}
                   </Tabs>
                   {isAuthenticated ? (
                     <>
                       <Logout/>
                     </>
                   ) : (
                     <Login />
                   )}
                 </>
               )}
             </Toolbar>
           </AppBar>
         </React.Fragment>
         {isAuthenticated || (
         <Banner/>
         )}
       </>
     );
}
