import React from 'react';
import {useState} from 'react'
import './createProduct.css'
import Axios from 'axios';
import {addProduct} from '../services/api';


function CreateProduct() {
  const [formVal, setFormVal]= useState({
    
    barcode: "",
    batchQuantity:"",
    category:"",
    componentProductIds:"",
    expirationDate:"",
    id:"",
    locationData:"",
    misc:"",
    name:"",
    placeOfOrigin:"",
    productionDate:"",
    unitPrice:"",
    unitQuantity:"",
    unitQuantityType:"",
    variety:"",
    componentProducts:"",

  
  
  });
  // const [records, setRecords] = useState({})


  

  const handleInput = (e: { target: { name: any; value:any }; }) => {
    const name = e.target.name;
    const value = e.target.value;
   

    setFormVal({...formVal, [name]: value});
    // console.log(name, value)

  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newRecord = {...formVal, id :  new Date().getTime().toString()} 

    //  console.log(newRecord);

     const jsonObject = JSON.stringify(newRecord);
     const jsonVal = JSON.parse(jsonObject)
     

     setFormVal(newRecord);

    //  Axios.post(url, {

    //  })

    // JSON constant data....

    let json =  {
      barcode: "1234567890",
      batchQuantity: 1000,
      category: "Fruits",
      componentProductIds: [],
      expirationDate: "2022-06-24T18:25:43.511Z",
      id: "1002",
      locationData: {
          current: {
              arrivalDate: "2021-07-07T01:11:18.409Z",
              location: "san fransisco, CA"
          },
          previous: [
              {
                  arrivalDate: "2021-06-30T18:00:58.511Z",
                  location: "Markham Farm, Marham, ON, Canada"
              }
          ]
      },
      misc: "{}",
      name: "Apples",
      placeOfOrigin: "Markham, ON, Canada",
      productionDate: "2021-06-24T18:25:43.511Z",
      unitPrice: "$5.00",
      unitQuantity: 300,
      unitQuantityType: "mg",
      variety: null,
      componentProducts: []
  }

  // let jsonn = JSON.stringify(json);
  // let jsonValue = JSON.parse(jsonn);

  console.log('step-1')

    addProduct(json);

    console.log("json of string: ", jsonObject)
    console.log("json value: ", jsonVal)

     



  }

  return (
    <div className="sample">
      <form action='' onSubmit={handleSubmit} >
      
        <div className='div1'>

        <label className=' label-balance' htmlFor='barcode'>barcode</label>
        <input  type= "text"
         value={formVal.barcode} onChange={handleInput} 
         name="barcode" 
          />
        
        <label className=' label-balance'>batchQuantity</label>
        <input 
          type= "text" 
          value={formVal.batchQuantity} onChange={handleInput} 
          name="batchQuantity" 
          />

        <br/>
        
        <label className=' label-balance'>category</label>
        <input type= "text" name="category" value={formVal.category} onChange={handleInput} />

        <label className=' label-balance'>componentProductIds</label>
        <input type= "text" name="componentProductIds" value={formVal.componentProductIds} onChange={handleInput} />

        <br/>

        <label className=' label-balance'>expirationDate</label>
        <input type= "text" name="expirationDate" value={formVal.expirationDate} onChange={handleInput} />

        <label className=' label-balance'>id</label>
        <input type= "text" name="id" value={formVal.id} onChange={handleInput} />

        <br/>

        <label className=' label-balance'>locationData</label>
        <input type= "text" name="locationData" value={formVal.locationData} onChange={handleInput} />

        <label className=' label-balance'>misc</label>
        <input type= "text" name="misc" value={formVal.misc} onChange={handleInput} />

        <br/>

        <label className=' label-balance'>name</label>
        <input type= "text" name="name" value={formVal.name}  onChange={handleInput} />

        <label className=' label-balance'>placeOfOrigin</label>
        <input type= "text" name="placeOfOrigin" value={formVal.placeOfOrigin} onChange={handleInput} />

        <br/>

        <label className=' label-balance'>productionDate</label>
        <input type= "text" name="productionDate" value={formVal.productionDate} onChange={handleInput} />

        <label className=' label-balance'>unitPrice</label>
        <input type= "text" name="unitPrice" value={formVal.unitPrice}  onChange={handleInput} />

        <br/>

        <label className=' label-balance'>unitQuantity</label>
        <input type= "text" name="unitQuantity" value={formVal.unitQuantity} onChange={handleInput} />

        <label className=' label-balance'>unitQuantityType</label>
        <input type= "text" name="unitQuantityType" value={formVal.unitQuantityType} onChange={handleInput} />

        <br/>

        <label  className=' label-balance'>variety</label>
        <input type= "text" name="variety" value={formVal.variety} onChange={handleInput} />

        <label className=' label-balance'>componentProducts</label>
        <input type= "text" name="componentProducts" value={formVal.componentProducts} onChange={handleInput} />


        <br/>

        <button className='button-style' type='submit'>Submit</button>

      

        </div>

    

</form>



   
    </div>
  );
}

export default CreateProduct;