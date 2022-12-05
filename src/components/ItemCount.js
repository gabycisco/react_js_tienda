import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 1, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[initial]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    if (stock > 0){
    return (
        <div className='item_count_children'>
            
            
            
            <div className="cantContainer">
                <button onClick={decrement}>-</button>
                {
                    count > 1 || count === 0
                    ?<div className="cantidad">{count}</div>
                    :<div className="cantidad">{count}</div>
                }
                <button onClick={increment}>+</button>
            </div>

            {
                stock && count
                ?<button className="detailsItem-bt" onClick={() => onAdd(count)}>Agregar al carrito</button>
                : <button className="detailsItem-bt" >Agregar al carrito</button>
            }
            
        </div>
    );
    }
}

export default ItemCount;