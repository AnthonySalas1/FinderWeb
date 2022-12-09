import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import axios from "axios";
import React, { useEffect } from "react";
import { Apitask } from "../services/api";

export default function Jobs() {

    useEffect(() => {
      getposts();
    }, []);

    const [items, setItems] = React.useState([]);

    const getposts = () => {
      return axios
        .get(Apitask)
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((err) => console.error(err));
    };
  return (
    <ImageList
      sx={{
        margin: "2%",
        display: "in-line",
        liststyletype: "disc",
        padding: 0,
        background:'black'
      }}
    >
      <ImageListItem key="Subheader" cols={2}></ImageListItem>
      {items.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.imagen}?w=248&fit=crop&auto=format`}
            srcSet={`${item.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.titulo}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.titutlo}
            subtitle={item.descripcion}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
