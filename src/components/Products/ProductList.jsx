import Product from './Product'
const ProductList = (props) =>{
    return(
        <>
        <div className='m-40'>
        {
        props.products.map((product)=>(
            <Product
                key={product.id}
                name={product.name}
                id = {product.id}
            />
        ))
        }
        </div>
        </>
    )
}

export default ProductList