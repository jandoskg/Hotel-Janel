// import { FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useProducts } from '../../contexts/ProductContext';
import style from "../SideBar/Sidebar.module.css"

const Sidebar = () => {
    const { fetchByParams } = useProducts();
    return (
    
        <div className={style.container}>
            <div className={style.containerItem}>
            
                <button 
                 value="двухместный"
                 onClick={(e) => fetchByParams("type",e.target.value)}

                 className={style.containerItemBtn}>Двухместные номера</button>
                <button 
                value="трехместный"
                onClick={(e) => fetchByParams("type", e.target.value)}
                className={style.containerItemBtn}>Трехместные номера</button>
                <button
                value="четырехместный"
                onClick={(e) => fetchByParams("type", e.target.value)}
                 className={style.containerItemBtn}>Четырехместные номера</button>
                 <button
                value="all"
                onClick={(e) => fetchByParams("type", e.target.value)}
                 className={style.containerItemBtn}>Все Номера</button>
                 
            </div>

            
        </div>
    );
};

export default Sidebar;