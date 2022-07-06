import axios from "axios";
import React, {useEffect} from "react";
import { Apitask } from "../services/api";
const Posts = () => {

    useEffect(() => {
        getposts();
    },[]);

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
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.titulo}
            <div></div>
            {item.descripcion}
            <div></div>
            {item.age}
          </li>
        ))}
      </ul>
    );
};

export default Posts;