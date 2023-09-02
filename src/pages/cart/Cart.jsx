import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem'


const Cart = () => {

    const { cartItems } = useContext(ShopContext)

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
        </div>
    )
}

export default Cart