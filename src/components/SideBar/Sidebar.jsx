// import { FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useProducts } from '../../contexts/ProductContext';
import style from "../SideBar/Sidebar.module.css"

const Sidebar = () => {
    const { fetchByParams } = useProducts();
    return (
    //     <Grid>
    //   <Paper>
    //     <FormControl>
    //       <RadioGroup
    //         row
            
    //         onChange={(e) => fetchByParams("type", e.target.value)}
    //       >
    //         <FormControlLabel
    //           className={style.inpBar}
    //           value="room"
    //           control={<Radio  />}
    //           label="Двухместные номера"
    //         />
    //         <FormControlLabel
    //           className={style.inpBar}
    //           value="трехместный"
    //           control={<Radio />}
    //           label="Трехместные номера"
    //         />
    //         <FormControlLabel
    //           className={style.inpBar}
    //           value="четырехместный"
    //           control={<Radio  />}
    //           label="Четырехместные номера"
    //         />
            

    //         <FormControlLabel
    //           className={style.inpBar}
    //           value="all"
    //           control={<Radio className={style.radioInp} />}
    //           label="Все товары"
    //         />
    //       </RadioGroup>
    //     </FormControl>
    //   </Paper>
    // </Grid>
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