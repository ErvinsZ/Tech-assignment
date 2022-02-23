import BrandList from "../Brands/BrandList"
import {useState, useEffect} from 'react'
const Category = (props) =>{
    
    const [category, setData] = useState(props)
    const [showBtn, setShowBtn] = useState(true)

    // useEffect(() => {
    //     setData(props)
    //   }, [])
    const handleRemove = (id) => {
        const newDataList = Object.values(category).filter((item) => item.id !== id)
        setData(newDataList)
        setShowBtn(false)
        
     }

    return(
        <>
        <div className="category">
            {category.name}
            { showBtn &&
            <button onClick={() => handleRemove(category.id)}> Delete</button>
            }
        </div>
        <BrandList brands={props.brands}/>
        </>
    )
}

export default Category