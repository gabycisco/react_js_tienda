import ItemList from "../components/ItemList";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { firestoreFetch } from "../utils/firestoreFetch";


const ItemListContainer = () => {

  const [datos, setDatos] = useState([])
  const { categoryId } = useParams();
  
  useEffect(() => {

    firestoreFetch(categoryId)
      .then(result => setDatos(result))
      .catch(err => console.log(err));

  }, [categoryId]);

  return (
    <>
      <ItemList items={datos} />
    </>
  )
}

export default ItemListContainer;