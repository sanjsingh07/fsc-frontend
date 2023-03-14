import React, { useEffect } from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom' 


import {getProductDetailsById} from '../services/api';

function GetProductDetails() {

 








  const handleSubmit = () => {
    




  }

  const Product = () => {
    const {id} = useParams();

    useEffect(()=>{
      getProductDetailsById(`id`);






    })
  }
  
  return (
    <div className="sample">

      <form action="" onSubmit={handleSubmit}>
        <div className='div1'>
        <label className='label-balance'>id</label>
        <input type="text"></input>
        <button>submit</button>

        </div>
      </form>
    </div>
  );
}

export default GetProductDetails;