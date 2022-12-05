import imagenes from '../assets/imagenes';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {

    const cantItemsContext = useContext(CartContext);

    if (cantItemsContext.totalProducts() === 0) {
        return (
            <Link className="cart_icon" to='/cart'>
                <img src={imagenes.ShoppingCart.img} className="cart_icon" alt={imagenes.ShoppingCart.alt} />
            </Link>
            
        )
    } else{
        return (
          <div className="cart_icon">
              <Link className="cart_icon" to='/cart'>
                <img src={imagenes.ShoppingCart.img} className="cart_icon" alt={imagenes.ShoppingCart.alt} />
                </Link>
              <span className='notifCartItems'>{cantItemsContext.totalProducts() || ""}</span>
          </div>
        )
    }
  }
  
  export default CartWidget;