
const Product = (props) => {
    const { id, productName, price, productImage } = props.data
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
        </div>
    )
}

export default Product