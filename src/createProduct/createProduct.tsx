import React, {useState, useEffect} from 'react'
import './createProduct.css'
import Axios from 'axios';
import {addProduct} from '../services/api';
import { validateHeaderName } from 'http';
import { useNavigate } from 'react-router-dom';


function CreateProduct() {
  const navigate = useNavigate();

  const [formVal, setFormVal]= useState({
    
    barcode: "",
    batchQuantity:"",
    category:"",
    componentProductIds:"",
    expirationDate:"",
    id: 0,
    locationData:"",
    misc:"",
    name:"",
    placeOfOrigin:"",
    productionDate:"",
    unitPrice:"",
    unitQuantity:0,
    unitQuantityType:"",
    variety:"",
    componentProducts:"",

  
  
  });
  // const [records, setRecords] = useState({})

  const [Success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if(Success) setSuccess(false);
    }, 2500)

    setTimeout(() => {
      if(failed) setFailed(false);
    }, 2000)

  }, [Success,failed])

  function handleClick(event:any) {
    console.log("its triggering")
    navigate('/GetProductDetails');
  }
  

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
     

    //  setFormVal(newRecord);

    //  Axios.post(url, {

    //  })

    // JSON constant data....

    let previousData;

    let json =  {
      barcode: formVal.barcode,
      batchQuantity: formVal.batchQuantity,
      category: formVal.category,
      componentProductIds: [] || formVal.componentProductIds,
      expirationDate: "2022-06-24T18:25:43.511Z" || formVal.expirationDate.toString(),
      id: formVal.id,
      locationData: {
          current: {
              arrivalDate: new Date().getTime().toString(),
              location: formVal.locationData
          },
          previous: [
              {
                  arrivalDate: "2021-06-30T18:00:58.511Z",
                  location: "Markham Farm, Marham, ON, Canada"
              }
          ]
      },
      misc: "{}" || formVal.misc,
      name: formVal.name,
      placeOfOrigin: formVal.placeOfOrigin,
      productionDate: "2021-06-24T18:25:43.511Z" || formVal.productionDate,
      unitPrice: "$5.00" || formVal.unitPrice,
      unitQuantity:  formVal.unitQuantity,
      unitQuantityType: formVal.unitQuantityType,
      variety: null || formVal.variety,
      componentProducts: [] || formVal.componentProducts
  }

  // let jsonn = JSON.stringify(json);
  // let jsonValue = JSON.parse(jsonn);

  // console.log('step-1')
  // console.log("Json data:  ", jsonn);
  // const result = addProduct(json);
  // console.log("result: ",result);


  addProduct(json).then((value) => {
    console.log("result: ",value);
    if(value?.status == 200){
      setSuccess(true)
    }else{
      setFailed(true)
    }
  });

  


  }

  return (
    <div className="sample">
      <button type="button" onClick={handleClick}>Ship Product</button>
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

        {Success ? <span className="alert">Transction Executed Successfully!</span> : ''}
        {failed ? <span className="alert">Transction Failed!</span> : ''}

      

        </div>

    

</form>



   
    </div>
  );
}

export default CreateProduct;