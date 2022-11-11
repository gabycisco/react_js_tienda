const ItemDetail = ({ item }) => {
    /* props = {
        text: ""
    } */
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
                <button>-</button>
                <div className="cantidad">1</div>
                <button>+</button>
              </div>
              <button className="detailsItem-bt" onClick={item.buyItem}>Agregar al carrito</button>
            </div>
        </div>
          
    </div>
    )
  }
  
  export default ItemDetail;