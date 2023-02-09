import React from 'react';
import {useState} from 'react'
import './createProduct.css'
// import { map } from 'rxjs/operators'


function CreateProduct() {
  const [formVal, setFormVal]= useState({
    
    barcode: '', 
    batchQuantity: ''
  
  
  });
  const [records, setRecords] = useState([])
  

  const handleInput = (e: { target: { name: any; value:any }; }) => {
    const name = e.target.name;
    const value = e.target.value;
   

    setFormVal({...formVal, [name]: value})
    console.log(name, value)

  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newRecord = {...formVal, id :  new Date().getTime().toString()} 

     console.log(records);

    setRecords([...records]);
   

  }



  return (
    <div className="sample">
      <form action='' onSubmit={handleSubmit} >
      
        <div className='div1'>
        <label className=' label-balance' htmlFor='barcode'>barcode</label>
        <input  type= "text"
         autoComplete='off' 
         value={formVal.barcode} onChange={handleInput} 
         name="barcode" 
         id = "barcode"  />
        

        <label className=' label-balance'>batchQuantity</label>
        <input type= "text" autoComplete='off'  value={formVal.batchQuantity} onChange={handleInput} name="batchQuantity" id = "batchQuantity" />

        <br/>
        
        <label className=' label-balance'>category</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <label className=' label-balance'>componentProductIds</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <br/>

        <label className=' label-balance'>expirationDate</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <label className=' label-balance'>id</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <br/>

        <label className=' label-balance'>locationData</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <label className=' label-balance'>misc</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <br/>

        <label className=' label-balance'>name</label>
        <input type= "text" name="name" value={""}  onChange={handleInput} />

        <label className=' label-balance'>placeOfOrigin</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <br/>

        <label className=' label-balance'>productionDate</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <label className=' label-balance'>unitPrice</label>
        <input type= "text" name="name" value={""}  onChange={handleInput} />

        <br/>

        <label className=' label-balance'>unitQuantity</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <label className=' label-balance'>unitQuantityType</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <br/>

        <label  className=' label-balance'>variety</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <label className=' label-balance'>componentProducts</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />


        <br/>

        <label className=' label-balance'>Name</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />

        <label className=' label-balance'>Email</label>
        <input type= "text" name="name" value={""} onChange={handleInput} />
        <br/>

        <button className='button-style' type='submit'>Submit</button>


        </div>

    

</form>
   
    </div>
  );
}

export default CreateProduct;