import React from 'react';
import {increment, updateDoc, collection, doc, serverTimestamp, setDoc} from 'firebase/firestore' 
import {CartContext, useCartContext}  from './CartContext';
import CartItem from './CartItem';
import { db } from '../utils/firebaseConfig';
import imagenes     from '../assets/imagenes';


const Cart = () => {
    const cartData = useCartContext(CartContext);
    const createOrder = () => {

        let order = {
            buyer: {
                name: ' Leo Messi',
                email: 'q@q.q',
                phone: '124151512'
            },
            date: serverTimestamp(),
            items: cartData.cartList.map(item =>({
                id:item.id,
                price: item.price,
                title: item.title,
                quantity: item.quantity,
            })),
            total: cartData.totalPrice()
        }

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, 'ordenes'));
            await setDoc(newOrderRef, order);
            return newOrderRef
        }

        createOrderInFirestore()
        .then(response => {
            alert('Order ID = ' + response.id)


            cartData.cartList.forEach(async(item) => {
                const itemRef = doc(db, "productos", item.id)
                await updateDoc(itemRef,{
                    stock: increment(-item.quantity)
                });
            })
            cartData.clear()
        })
            
        .catch(err => console.log(err))
    }

    if (cartData.cartList.length === 0) {
        return (
            <div className='no_items'>
                <img className="logo_EmptyCart" src={imagenes.EmptyCart.img} alt={imagenes.EmptyCart.alt} />
                <h5>No hay artículos en el carrito</h5>
            </div>
        );
    }else{
        return (
            <div className='cart_father'>
                <div className='principal_container'>
                    <div className='titles_cart'>
                        <span className='prod_title'>PRODUCTO</span>
                            <div className='rest_title'>
                                <span>CANTIDAD</span>
                                <span>PRECIO</span>
                                <span>SUBTOTAL</span>
                            </div>
                        </div>
                        {
                            cartData.cartList.map(product => <CartItem key={product.id} product={product} /> )
                        }
                </div>
                <div className='totals_container'>
                    <div className='del_disc_taxes'>

                        <div className='del_disc_titles'>
                            <span>Descuento:</span>
                            <span>Envío:</span>
                            <span>Total:</span>
                        </div>

                        <div className='del_disc_values'>
                            <span>$0</span>
                            <span>$0</span>
                            <span> ${cartData.totalPrice()}</span>
                        </div>

                    </div>
                    <button className="detailsItem-bt" onClick={createOrder}> Finalizar Compra</button>
                </div>
            </div>
                )
    }
}

export default Cart;