import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../NotFound/NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img className={style.notFoundImg} src="https://safe.kg/404.png" alt="ert"></img>
      <div className={style.text}>
        <h3 style={{color:"black"}}>Извините!  Страница не найдена!</h3>
        <Button
          onClick={() => navigate("/")}
          variant="outlined"
          sx={{
              marginTop:4,
            color: "black",
            border: "2px solid black",
          }}
        >
          Вернутся на главную стрвницу
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
