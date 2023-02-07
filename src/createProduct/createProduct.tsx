import React from 'react';
import {useState} from 'react'
import './createProduct.css'
// import { map } from 'rxjs/operators'


function CreateProduct() {
  const [formVal, setFormVal]= useState({name: '', email: ''})
  const onSubmit = () => {}



  return (
    <div className="sample">
      <form onSubmit={onSubmit}>
      
        <div className='div1'>
        <label className=' label-balance' >barcode</label>
        <input  type= "text" name="name" value={""}/>
        

        <label className=' label-balance'>batchQuantity</label>
        <input type= "text" name="name" value={""}/>

        <br/>
        
        <label className=' label-balance'>category</label>
        <input type= "text" name="name" value={""}/>

        <label className=' label-balance'>componentProductIds</label>
        <input type= "text" name="name" value={""}/>

        <br/>

        <label className=' label-balance'>expirationDate</label>
        <input type= "text" name="name" value={""}/>

        <label className=' label-balance'>id</label>
        <input type= "text" name="name" value={""}/>

        <br/>

        <label className=' label-balance'>locationData</label>
        <input type= "text" name="name" value={""}/>

        <label className=' label-balance'>misc</label>
        <input type= "text" name="name" value={""}/>

        <br/>

        <label className=' label-balance'>name</label>
        <input type= "text" name="name" value={""}/>

        <label className=' label-balance'>placeOfOrigin</label>
        <input type= "text" name="name" value={""}/>

        <br/>

        <label className=' label-balance'>productionDate</label>
        <input type= "text" name="name" value={""}/>

        <label className=' label-balance'>unitPrice</label>
        <input type= "text" name="name" value={""}/>

        <br/>

        <label className=' label-balance'>unitQuantity</label>
        <input type= "text" name="name" value={""}/>

        <label className=' label-balance'>unitQuantityType</label>
        <input type= "text" name="name" value={""}/>

        <br/>

        <label  className=' label-balance'>variety</label>
        <input type= "text" name="name" value={""}/>

        <label className=' label-balance'>componentProducts</label>
        <input type= "text" name="name" value={""}/>


        <br/>

        <label className=' label-balance'>Name</label>
        <input type= "text" name="name" value={""}/>

        <label className=' label-balance'>Email</label>
        <input type= "text" name="name" value={""}/>
        <br/>

        <button className='button-style'>Submit</button>


        </div>

    

</form>
   
    </div>
  );
}

export default CreateProduct;