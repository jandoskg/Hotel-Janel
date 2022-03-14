import React from 'react';
import style from "../Header/Header.module.css"
import HeaderImg from "../../../assetcs/Header/zyro-image.png"
import logo from "../../../assetcs/logo/JaneL.svg"

const Header = () => {
    return (
        <>
            <div className={style.Header}>
                <img className={style.HeaderImg} src={HeaderImg} alt="header image" />
                <div className={style.HeaderTitel}>
                    
                <h1>Гостевой <br/> Дом</h1>
                <button className={style.headerBtn}> Посмотреть Номера</button>
                </div>
            </div>
            
            
        </>
    );
};

export default Header;