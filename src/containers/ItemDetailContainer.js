import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestoreFecthOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {

  const [dato, setDatos] = useState([])
  const{ idItem } = useParams();

  useEffect(() => {
     
    firestoreFecthOne(idItem)
      .then(result => setDatos(result))
      .catch(err => console.log(err));
  }, [idItem]);
    
    return (
      <>
      <ItemDetail item={dato}/>
      </>
    )
  }
  
  export default ItemDetailContainer;