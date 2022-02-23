import { useState, useEffect } from "react"
const Product = (props) =>{
    const [product, setProduct] = useState({
        name:'',
        id:''
    })
    const [showBtn, setShowBtn] = useState(true)
    useEffect(() => {
        setProduct(props)
        }, [])

    const handleRemove = (id) => {
        const newDataList = Object.values(product).filter((item) => item.id !== id)
        setProduct(newDataList)
        setShowBtn(false)
        }
    return(
        
        <>
        <div className="m-40">{product.name} 
        {showBtn &&
            <button onClick={() => handleRemove(product.id)}>Delete</button>
        }
        </div>
        </>
    )
}

export default Product