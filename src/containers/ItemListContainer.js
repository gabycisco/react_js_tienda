import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import productsArray from "../utils/productsArray";
import ProductsPromise from "../utils/ProductsPromise";
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  const [datos, setDatos] = useState([])
  const { categoryId } = useParams();

  useEffect(() => {

    if (categoryId === undefined) {

      ProductsPromise(2000, productsArray)
        .then(
          response => setDatos(response)
        )
        .catch(err => console.log(err))
        /* console.log(productsArray) */
    } else {
      console.log(categoryId)
      ProductsPromise(2000, productsArray.filter(item => item.idCategory === categoryId))
        .then(response => setDatos(response))
        .catch(err => console.log(err))

    }

  }, [categoryId])

  return (
    <>
      <ItemList items={datos} />
    </>
  )
}

export default ItemListContainer;