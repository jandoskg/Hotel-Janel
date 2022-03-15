import React from 'react';
import style from "../Contact/Contact.module.css"

const Contact = () => {
    return (
        <>
            <center><h3> Наши Контакты</h3></center>
        <div className={style.container}>
              
            <div className={style.content}>
                <h4>Администрация: 996703556969</h4>
                <h4>Инстаграм: @issykkul_janel</h4>

            </div>
            
            
             <iframe 
               className={style.map}
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735.7664114078857!2d77.07872460947323!3d42.64059267051795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3884f1ab820ed3df%3A0x6ce698b85fb1b7de!2z0JPQvtGB0YLQtdCy0L7QuSDQlNC-0LwgItCW0LDQvdGN0LvRjCIu!5e0!3m2!1sru!2skg!4v1647346998800!5m2!1sru!2skg"  
            
               height="450" 
               style={{ 
                border: "0;", 
                width: "50vw", 
                marginTop: "50px", 
                marginBottom: "50px", 
                borderRadius: "5px", 
               }} 
                allowfullscreen="" 
                loading="lazy" 
             ></iframe>
           
            
        </div>
        </>
    );
};

export default Contact;