import React from 'react'

const CartItem = (props) => {

    const { id, productName, price, productImage } = props.data

    return (
        <div className='cartItem' >
            <img src={productImage} alt='product-img' />
            <div className='description' >
                <p>
                    <strong> {productName} </strong>
                </p>
                <p>
                    ${price}*
                </p>
            </div>
        </div>
    )
}

export default CartItem