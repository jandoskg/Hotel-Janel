import React from 'react';
import style from "../AboutUs/AboutUs.module.css"
import img2 from "../../assetcs/section2/img2.jpeg"

const AboutUs = () => {
    return (
        <>
            <center><h3>О Нас</h3></center>
            <div className={style.container}>
                <div className={style.containerItemContent}>
                    <h3>JaneL</h3>
                    <span >Гостевой дом  находится в 10 минутах от пляжа,в центре города Чолпон-Ата. Удобная развязка,крупные магазины и парки  в шаговой доступности! На территории есть кафе,где можете заказывать еду не выходя с территории гостевого дома! Есть детская площядка для наших маленьких гостей. Сделано все для вашего комфортного отдыха! </span>
                    
                </div>
                <div className={style.containerDec}></div>
                <img className={style.containerItemImg} src={img2} alt="photo about us" />
            </div>
        
          

          
        </>
    );
};

export default AboutUs;