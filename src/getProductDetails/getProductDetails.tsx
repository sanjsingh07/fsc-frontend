import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {useParams} from 'react-router-dom' 
import data from '../common/data.json';
import { useNavigate } from 'react-router-dom';

import {getProductDetailsById} from '../services/api';

function GetProductDetails() {
  const navigate = useNavigate();
  // const [Success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  function handleClick(event:any) {

    navigate('/');
  }  

  useEffect(() => {

    setTimeout(() => {
      if(failed) setFailed(false);
    }, 2000)

  }, [failed])

  const handleSubmit = (event:any) => {
    event.preventDefault();

    let result = getProductDetailsById(event.target[0].value);

    result.then((value) => {
      console.log("result: ",value?.data.result)
      const product = value?.data.result;
      if(value?.status == 200){
        // setSuccess(true)
        navigate('/',{state:product});
      }else{
        setFailed(true)
      }
    })

    // console.log("result: ",result, " id: ",event.target[0].value)

  }

  // const Product = () => {
  //   const {id} = useParams();

  //   useEffect(()=>{
  //     getProductDetailsById(`id`);

  // },[]);
  // }
  
  return (
    <div className="sample">
      <button type="button" onClick={handleClick}>Add Product</button>
      {/* {
        data.map((record: any) =>{
          console.log('step1')
          return(
            record.barcode,
            record.batchQuantity
            
          )


        })
      } */}

      <form action="" onSubmit={handleSubmit}>
        <div className='div1'>
          <label className='label-balance'>id</label>
          <input type="text"></input>
          <button>submit</button>
          <div className='div1'>
          {failed ? <span className="alert">Product Doesn't Exist!</span> : ''}
          </div>
        </div>
      </form>
    </div>
  );
}

export default GetProductDetails;