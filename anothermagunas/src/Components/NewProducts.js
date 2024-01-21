import React,{useState} from 'react'
import { useParams } from 'react-router-dom';

function NewProducts() {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        title:'',
        image:'',
        category:''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            fetch( `https://localhost:3000/categories/${id}/products`, {
                method: 'POST',
                body: JSON.stringify({
                    tile: '',
                    image: '',
                    category: '',
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((res) => res.json())
            .then((json) =>{
                console.log(json)
            })
        } catch (error) {
            console.log('Error creating product:', error)
        }
    }















  return (
    <div>
        <div>
            <div className='formationcontainer'>
                <p>Add Product</p>
                <form className='formation'>
                    <label>Title</label>
                    <input
                        type='text'
                        className='inputit'
                        placeholder='Enter product title'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                    />        
                       <label>Image</label>
                       <input
                            type='text'
                            className='inputit'
                            placeholder='Enter product image URL'
                            name='image'
                            value={formData.image}
                            onChange={handleChange}
                        />    
                        <label>Catgeory</label>
                        <input
                            type='text'
                            className='inputit'
                            placeholder='Enter product image URL'
                            name='category'
                            value={formData.category}
                            onChange={handleChange}
                        />                    
                    <button>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default NewProducts
