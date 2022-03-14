import React from "react";
import style from "../Footer/Footer.module.css"
import logo from "../../assetcs/logo/JaneL.svg"
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
  <div className={style.footerContainer}>
    <div className={style.contentItem}>
      <img className={style.contentItemImg} src={logo} alt="logo" />
    </div>
    <div className={style.footerContentItem}>
      <ul>
        <li onClick={()=>navigate("/")}>Главная</li>
        <li onClick={()=>navigate("/aboutus")}>О нас</li>
        <li onClick={()=>navigate("/products")}>Апартаменты</li>
        

        
        
      </ul>
      <ul>
        <li>Контакты</li>
        <li >0501090349</li>
        <li><a target="_blank" href="">Instagram</a></li>
        <li><a target="_blank" href="https://wa.me/996551090349">WhatsApp</a></li>


      </ul>
      <ul>
        <li><a target="_blank" href="https://2gis.kg/bishkek/firm/70000001044597573?m=77.078937%2C42.640508%2F16.73">Адрес</a></li>
        <li>г.Чолпон-Ата</li>
        <li>ул.Акматбай-Ата 1/2</li>
        


      </ul>
      
        
      
    </div>

  
  </div>
  )
};

export default Footer;