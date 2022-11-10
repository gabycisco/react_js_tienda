import imagenes from '../assets/imagenes';


const CartWidget = () => {
    return (
        <img src={imagenes.ShoppingCart.img} className="cart_icon" alt={imagenes.ShoppingCart.alt} />
    )
  }
  
  export default CartWidget;