import React,{useState} from 'react';
import {Drawer, IconButton, List, ListItemButton, ListItemIcon} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
const PAGES = ["Log In","Log Out","NEWS", "JOBS", "ABOUT US", "SUPPORT"];
const Drawers = () => {
    const [openDrawer, setopenDrawer] = useState(false)
    return (
      <React.Fragment>
        <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
          <List>
            {PAGES.map((page, index) => (
              <ListItemButton onClick={() => setopenDrawer(false)} key={index}>
                <ListItemIcon sx={{fontSize:'30px'}}>{page}</ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
        <IconButton
          sx={{ color: "white", marginLeft: "auto" }}
          onClick={() => setopenDrawer(!openDrawer)}
        >
          <MenuIcon />
        </IconButton>
      </React.Fragment>
    );
}

export default Drawers;
