
import { Link } from "react-router-dom";

const Item = (props) => {

    return (
      <div className="products-container">
        <div className="product-image">
          <img src={props.pictureUrl} alt="Product" />
        </div>
        <div className="product-info">
          <span className="product-title">{props.title}</span>
          <h5>${props.price}</h5>
          <p>Stock: {props.stock}</p> 
          
          
        </div>
        <div className="list-bts">
          <Link className="detailsItem-bt" to={`/item/${props.id}`}>Ver detalle</Link>
        </div>
    </div>
    )
  }
  
  export default Item;