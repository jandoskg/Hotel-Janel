import React from 'react';
import style from "../Section2/Section2.module.css"
import img1 from "../../../assetcs/section2/img1.jpeg"
import img2 from "../../../assetcs/section2/img2.jpeg"
import img3 from "../../../assetcs/section2/cafe.jpeg"
import { useNavigate } from 'react-router-dom';

const Section2 = () => {
    const navigate=useNavigate()
    return (
        <>
        <div className={style.container}>
            <div className={style.containerItem}>
                <div className={style.containerDec}></div>
                
                <img className={style.containerItemImg} src={img1} alt="image of hotel" />
                <div className={style.containerItemContent}>
                    <h3>JaneL</h3>
                    <span >Гостевой дом  находится в 10 минутах от пляжа,в центре города Чолпон-Ата. Удобная развязка,крупные магазины и парки  в шаговой доступности! </span>
                    <button onClick={()=>navigate("/aboutus")} className={style.containerBtn}>Подробнее</button>
                </div>
            </div>
            
            
            
        </div>
        <div className={style.container}>
            <img className={style.containerImg} src={img3} alt="cafe" />
            <div className={style.containerItemText}>
                <h4>Кафе</h4>
                <span>Не желаете готовить во время отдыха? Кафе на территории гостевого дома ждет вас с 9:00 - 22:00.</span>
                <button className={style.containerBtn}>Заказать в номер</button>
            </div>

        </div>
        </>
    );
};

export default Section2;