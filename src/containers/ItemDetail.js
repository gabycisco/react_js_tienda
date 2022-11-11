
import { useEffect, useState } from "react";

const ItemDetail = ({ item }) => {

    const [addIdem, setAddItem] = useState(1); // HOOK!!!

    const addItem = () => {
      /* rate++; */

        setAddItem(addIdem + 1);
      
    }

    const removeItem = () => {
      /* rate++; */
      if (addIdem >1) {
        setAddItem(addIdem - 1);
      }
    }


    useEffect(() => {
      

    }, [addIdem])

    return (
      <div className="detail-product">
          
          <div className="principal-container">
            <div className="detail-product-image">
              <img src={item.pictureUrl} alt="Product" />
            </div>
            <div className="product-details">
            <span className="product-detail-title">{item.title}</span>
              <p>{item.description}</p>
              <p>Stock: {item.stock}</p> 
              <h5>${item.price}</h5>

              <div className="cantContainer">
                <button onClick={removeItem}>-</button>
                <div className="cantidad">{addIdem}</div>
                <button onClick={addItem}>+</button>
              </div>
              <button className="detailsItem-bt">Agregar al carrito</button>
            </div>
        </div>
          
    </div>
    )
  }
  
  export default ItemDetail;