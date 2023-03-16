import React, {useState, useEffect} from 'react'
import './createProduct.css'
import Axios from 'axios';
import {addProduct, shipProduct} from '../services/api';
import { validateHeaderName } from 'http';
import { useNavigate,useLocation } from 'react-router-dom';


function CreateProduct() {
  const navigate = useNavigate();
  const location = useLocation();

  // console.log("location data: ",location.state)

  // if(location.state.id){
  //   Object.entries(location.state).map(([key, value]) => {
  //     console.log("key: ",key, "value: ",value)
  //     // Pretty straightforward - use key for the key and value for the value.
  //     // Just to clarify: unlike object destructuring, the parameter names don't matter here.
  // })
  // }

  const [formVal, setFormVal]= useState({
    
    barcode: location.state != null ?  location.state.barcode : "",
    batchQuantity: location.state != null ? location.state.batchQuantity : "",
    category: location.state != null ? location.state.category : "",
    componentProductIds: location.state != null ? location.state.componentProductIds : "",
    expirationDate: location.state != null ? location.state.expirationDate : "",
    id: location.state != null ? location.state.id : 0,
    locationData: location.state != null ? location.state.locationData.current.location : "",
    misc: location.state != null ? location.state.misc : "",
    name: location.state != null ? location.state.name : "",
    placeOfOrigin: location.state != null ? location.state.placeOfOrigin : "",
    productionDate: location.state != null ? location.state.productionDate : "",
    unitPrice: location.state != null ? location.state.unitPrice : "",
    unitQuantity:location.state != null ?  location.state.unitQuantity : 0,
    unitQuantityType:location.state != null ? location.state.unitQuantityType : "",
    variety: location.state != null ? location.state.variety : null,
    componentProducts:location.state != null ? location.state.componentProducts : [],
  
  });

  const [Success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if(Success) setSuccess(false);
    }, 2500)

    setTimeout(() => {
      if(failed) setFailed(false);
    }, 2500)

  }, [Success,failed])

  function handleClick(event:any) {
    navigate('/GetProductDetails');
  }  

  function shipProductFn(event:any) {

    let json =  {
      barcode: formVal.barcode,
      batchQuantity: formVal.batchQuantity,
      category: formVal.category,
      componentProductIds: [] || formVal.componentProductIds,
      expirationDate: formVal.expirationDate ? formVal.expirationDate.toString() : "2022-06-24T18:25:43.511Z",
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
      productionDate: formVal.productionDate ? formVal.productionDate : "2021-06-24T18:25:43.511Z",
      unitPrice: "$" + formVal.unitPrice,
      unitQuantity:  formVal.unitQuantity,
      unitQuantityType: formVal.unitQuantityType,
      variety: null || formVal.variety,
      componentProducts: [] || formVal.componentProducts
  }
    console.log("printing just b4: ship ", json)
    shipProduct(json).then((value) => {
      console.log("result: ",value);
      if(value?.status == 200){
        setSuccess(true)
      }else{
        setFailed(true)
      }
    });
    // navigate('/GetProductDetails');
  }
  

  const handleInput = (e: { target: { name: any; value:any }; }) => {
    const name = e.target.name;
    const value = e.target.value;
   

    setFormVal({...formVal, [name]: value});

  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();     

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
      unitPrice: "$" + formVal.unitPrice,
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
      <button type="button" onClick={handleClick}>Get Product</button>
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

        

        { location.state ? <button type="button" className='button-style' onClick={shipProductFn}>Ship Product</button> : <button className='button-style' type='submit'>Submit</button>}

        
        {Success ? <span className="alert">Transction Executed Successfully!</span> : ''}
        {failed ? <span className="alert">Transction Failed!</span> : ''}

      

        </div>

    

</form>



   
    </div>
  );
}

export default CreateProduct;