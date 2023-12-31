import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"

const Product = (props) => {
    const { id, productName, price, productImage } = props.data
    const { addToCart, cartItems } = useContext(ShopContext)

    const productsInCart = cartItems[id]
    return (
        <div className='product' >
            <img src={productImage} alt='product-img' />
            <div>
                <p>
                    <strong>{productName}</strong>
                </p>
                <p>
                    ${price}*
                </p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)} >
                Add to cart {productsInCart > 0 && <> ({productsInCart}) </>}
            </button>
        </div>
    )
}

export default Product