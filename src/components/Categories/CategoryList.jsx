import Category from "./Category"
import {useState} from 'react'
import Form from '../Form'
import initialData from '../../../src/data/responseData.json'
const CategoryList = () =>{
    const [data, setData] = useState(initialData)
    const [name, setUserInput ] = useState('');
    const [inputValidation, setInputValidation] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState()
    const [brandDropdownOptions,setBrandDropdownOptions] = useState([])
    

    const [selectedBrand, setSelectedBrand] = useState(brandDropdownOptions)

    console.log(data)
    const form_visibility = {
        openFormGeneral:false,
        openFormCategory:false,
        openFormBrand:false,
        openFormProduct:false
    }
    const [openForm, setOpenForm] = useState(form_visibility)

    const addCategoryForm = () => {
        setOpenForm({
            openFormGeneral:true,
            openFormCategory:true,
        })
    }

    const addBrandForm = () => {
        setOpenForm({
            openFormGeneral:true,
            openFormBrand:true,
        })
    }
    const addProductForm = () => {
        setOpenForm({
            openFormGeneral:true,
            openFormProduct:true,
        })
    }

    const closeForm = () => {
        setOpenForm({
            openFormGeneral:false
    })
    }

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleChangeCategory = (e) => {
        let brandDropdown = []
        setSelectedCategory(e.target.value)
        data.categories.map((category) =>{
            if (category.name === selectedCategory){
                brandDropdown.push(category.brands)
               
            }
            setBrandDropdownOptions(brandDropdown[0])
        })
        
    }
    const handleChangeBrand = (e) => {
        setSelectedBrand(e.target.value)
    }
    function uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
      

    const addCategory = () => {
        
        if(name == ''){
            setInputValidation(true)
        }else{
        const newList = data.categories.concat({name, id: uuidv4(), brands:[]})
        setData({
            categories:newList
        })
        setInputValidation(false)
        }
        setUserInput('')
        
      }

    
    const addBrand = () => {
        if(name == ''|| selectedCategory == ''){
            setInputValidation(true)
        }else{
        let output = { name, id: uuidv4(), products: []};
        const newObj = data.categories.map((item) => {
         if (item.name === selectedCategory) {
            return { ...item, brands: [...item.brands, output] };
        }
        return {
            ...item
        };
        
        });
        
        setData({
            categories:newObj
        })
        setUserInput('')
        setSelectedCategory('')
        setInputValidation(false)
        }
    }

    const addProduct = () => {
        if(name == '' || selectedCategory == '' || selectedBrand == ''){
            setInputValidation(true)
        }else{
        let output = { name, id: uuidv4()};

        const newObj2 = data.categories.map((item) => {
        
         if (item.name === selectedCategory) {
                 item.brands.map((brand) => {
                     if( brand.name == selectedBrand){
                        brand.products.push(output)
                     }   
                 })
                }
                 return {...item}
                 
                })
        
         setData({
            categories:newObj2
        })
        setUserInput('')
        setSelectedCategory('')
        setSelectedBrand('')
        setInputValidation(false)
        }
}

        return(
        <>
        <Form
            handleChange={handleChange}
            inputValidation={inputValidation}
            handleChangeCategory={handleChangeCategory}
            handleChangeBrand={handleChangeBrand}
            addCategory={addCategory}
            addBrand={addBrand}
            addProduct={addProduct}
            name={name}
            addCategoryForm={addCategoryForm}
            addProductForm={addProductForm}
            setOpenForm = {setOpenForm}
            closeForm={closeForm}
            openForm = {openForm}
            data={data}
            selectedCategory ={selectedCategory}
            selectedBrand = {selectedBrand}
            brandDropdownOptions={brandDropdownOptions}
        />
        <button onClick={() => {addCategoryForm()}}>Add Category</button>
        <button onClick={() => {addBrandForm()}}>Add Brand</button>
        <button onClick={() => {addProductForm()}}>Add Product</button>
        
        <div className='bold'>Categories:</div>
        <div className='m-40'>
        {
            data.categories.map((category) =>(
                <Category 
                    name ={category.name}
                    key = {category.id}
                    id = {category.id}
                    brands = {category.brands}
                />
                
            ))
        }
        </div>
        
        </>
    )
}

export default CategoryList