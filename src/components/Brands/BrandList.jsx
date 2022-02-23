import Brand from './Brand'
const BrandList = (props) =>{        
    return(
        <>
        {props.brands.map((brand)=>(
            <Brand
            key = {brand.id}
            id = {brand.id}
            name={brand.name}
            products = {brand.products}
            />

            
        ))}
        </>
    )
}

export default BrandList