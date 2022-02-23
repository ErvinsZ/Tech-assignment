import { useState } from "react"
import ProductList from "../Products/ProductList"
const Brand = (props) =>{
    const [brand, setBrand] = useState(props)
    const [showBtn, setShowBtn] = useState(true)

    const handleRemove = (id) => {
        const newDataList = Object.values(brand).filter((item) => item.id === id)
        setBrand({
            products:newDataList
        })
        setShowBtn(false)
        }
        
    return(
        <>
        
        <div className="m-40">{brand.name}
        {showBtn &&
            <button onClick={() => handleRemove(brand.id)}>Delete</button>
        }
        
        </div>
        <ProductList products = {brand.products}/>
        </>
    )
}

export default Brand