import React from 'react';
import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import img from "../../assetcs/logo/JaneL.svg"
import style from "../Payment/Payment.module.css"

const Payment = () => {
    
    const navigate = useNavigate();
  const handleAlert = () => {
    alert("Вы успешно забронировали! Спасибо за сотдурничество");
    navigate("/");
  };
    return (
    <div className={style.containers}>
      <img className={style.logo} src={img} alt="" />
      <h2 className={style.h2Text}>Страница Бронирования</h2>
      <TextField
        sx={{ my: 3, mx: 5, width: "50vw" }}
        helperText=" Введите имя*"
        id="demo-helper-text-aligned"
        label="Имя"
      />
      <TextField
        sx={{ my: 3, mx: 5, width: "50vw" }}
        helperText=" Введите номер телефона*"
        id="demo-helper-text-aligned"
        label="Номер телефона"
      />
      
      <TextField
        sx={{ my: 3, mx: 5, width: "50vw" }}
        helperText="Оставтье коментарий*"
        id="demo-helper-text-aligned"
        label="Коментарий"
      />

      <Button
        onClick={handleAlert}
        className={style.btncard}
        variant="contained"
        color="success"
      >
        Забронировать
      </Button>
    </div>
    )
};

export default Payment;