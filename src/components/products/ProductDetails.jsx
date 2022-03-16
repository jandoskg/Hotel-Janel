
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import style from "../products/style/ProductDetails.module.css"


const ProductDetails = () => {
  

  
    const navigate=useNavigate()
    const { id } = useParams();
  const { getProductDetails, productDetails} = useProducts();

 

  useEffect(() => {
    getProductDetails(id);
  }, []);

  

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  

  
  

  return (
    <div className={style.detailsWrap}>
      <div>
        <img className={style.detailImg} src={productDetails.picture} alt="" />
      </div>

      <div className={style.detailsList}>
        <h2 className="title">
          <span className={style.detailSpan}>Наименование - </span>
          {productDetails.name}
        </h2>
        <h3 className="price">
          <span className={style.detailSpan}>Цена - </span>
          {productDetails.price} сом
        </h3>
        <h3 className="descr">
          <span className={style.detailSpan}>Описание - </span>
          {productDetails.description}
        </h3>
        
         
        <button onClick={()=>navigate("/payment")} className={style.containerBtn}>Забронировать</button>
        

      </div>
      
      

      
    </div>
  );
};

export default ProductDetails;