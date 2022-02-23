const Form = (props) => {

    let options = null
    props.data.categories.map((category) => {
        if(category.name == props.selectedCategory){
            options = category.brands.map((brand) => <option key={brand.id}>{brand.name}</option>);
            
        }
    })
    if (props.brandDropdownOptions) {
        options = props.brandDropdownOptions.map((brand) => <option key={brand.id}>{brand.name}</option>);
      }
    return(
    <>
    { props.openForm.openFormGeneral &&
    <div className='form-wrapper'>
        <button className='close-btn' onClick={()=>{props.closeForm()}}>X</button>
        <div className='form'>
    
        { props.openForm.openFormCategory ?
        <div>
            <input type='text' value={props.name} onChange={props.handleChange}/>
            
            <button type='button' onClick ={props.addCategory}>Add category</button>
            {props.inputValidation &&
                <div><p>Cannot submit empty values</p></div>
            }
        </div>
        :
        props.openForm.openFormBrand ?
        <div>
            <select value={props.selectedCategory} onChange={props.handleChangeCategory} name='category' id='category'>
                <option>-</option>
                {
                    props.data.categories.map((category) => (
                        <option>{category.name}</option>
                    ))
                }
            </select>
            <input type='text' value={props.name} onChange={props.handleChange}/>
            
            <button type='button' onClick={props.addBrand}>Add Brand</button>
            {props.inputValidation &&
                <div><p>Cannot submit empty values</p></div>
            }
        </div>
        
        :
        <div>
        <select value={props.selectedCategory} onChange={props.handleChangeCategory} name='category' id='category'>
            <option>-</option>
            {
                props.data.categories.map((category) => (
                    <option>{category.name}</option>
                ))
            }
        </select>
        <select value={props.selectedBrand} onChange={props.handleChangeBrand} name='brand' id='brand'>
            <option>-</option>
            {
                options
            }
        </select>
        <input type='text' value={props.name} onChange={props.handleChange}/>
        
        <button type='button' onClick={props.addProduct}>Add Product</button>
        {props.inputValidation &&
                <div><p>Cannot submit empty values</p></div>
            }
        </div>
        }
        </div>
    </div>
    }
    </>
    )
}


export default Form 