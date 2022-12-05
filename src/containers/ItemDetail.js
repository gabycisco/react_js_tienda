import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../components/CartContext";
import ItemCount from "../components/ItemCount";

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const {addItem} = useCartContext();


  const onAdd = (cant) => {
      alert("Vas a sumar " + cant + " items al carrito.");
      setItemCount(cant);
      addItem(item,cant);
  }

    return (
      <div className="detail-product">
          <div className="principal-container">
            <div className="detail-product-image">
              <span className="img-brand-name">{item.brand}</span>
              <img src={item.pictureUrl} alt="Product" />
            </div>
            <div className="product-details">
              <span className="product-detail-title">{item.title}</span>
              <p>{item.description}</p>
              <h5>${item.price}</h5>
              {
                item.stock === 0
                ? <h5>Sin Stock</h5>
                : <p>Stock: {item.stock}</p>
              }
              
             
             
              <div className="buy-price-container">
                <div className='item_count_father'>
                  {
                    itemCount === 0
                  ? <ItemCount stock={item.stock} onAdd={onAdd} />
                  : <Link to='/cart' style={{ textDecoration: "none" }}><button className="detailsItem-bt" variant="contained" color="secondary">Ir al carrito</button></Link>
                  }
                </div>
              </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default ItemDetail;