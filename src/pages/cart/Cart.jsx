import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem'
import './cart.css'


const Cart = () => {

    const { cartItems, getTotalAmount } = useContext(ShopContext)
    const totalAmount = getTotalAmount()

    const navigate = useNavigate()

    return (
        <div className='cart' >
            <div>
                <h1>Products in cart</h1>
            </div>
            <div className='cartItems' >
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className='checkout' >
                    <p> Total: ${totalAmount}* </p>
                    <button onClick={() => navigate('/')} > Continue Shopping </button>
                    <button> Checkout </button>
                </div>
            ) : (<h1>Your cart is empty</h1>)}
        </div>
    )
}

export default Cart