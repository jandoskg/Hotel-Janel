import React from 'react';
import style from "../Section1/Section1.module.css"
import img1 from "../../../assetcs/rooms/2mest.jpeg"
import img2 from "../../../assetcs/rooms/3mest.jpeg"
import img3 from "../../../assetcs/rooms/4mest.jpeg"
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Section1 = () => {
  const navigate=useNavigate()
    return (
        
            <div className={style.container}>
                <div className={style.containerItem}>
                <Card sx={{ maxWidth: 345 }}>
                 <CardActionArea>
                  <CardMedia
                   component="img"
                   height="220"
                   image={img1}
                   alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Двухместный номер
                </Typography>
                
                </CardContent>
                </CardActionArea>
                <CardActions sx={{justifyContent:"center"}}>
                <Button onClick={()=>navigate("/payment")} sx={{color:"#212121"}} size="small" color="primary">
                Забронировать
                </Button>
                </CardActions>
                </Card>
                </div>
                <div className={style.containerItem}>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                 component="img"
                 height="250"
                 image={img2}
                 alt="green iguana"
                />
                <CardContent sx={{justifyContent:"center"}}>
                <Typography  gutterBottom variant="h5" component="div">
                 Трехместный номер
                </Typography>
                
                </CardContent>
                </CardActionArea>
                <CardActions sx={{justifyContent:"center"}}>
                <Button onClick={()=>navigate("/payment")} size="small" sx={{color:"#d50000"}}>
                Забронировать
                </Button>
                </CardActions>
                </Card>
                </div>
                <div className={style.containerItem}>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                 component="img"
                  height="220"
                  image={img3}
                  alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Четырехместный номер
                </Typography>
                
                </CardContent>
                </CardActionArea>
                <CardActions sx={{justifyContent:"center"}}>
                <Button onClick={()=>navigate("/payment")} sx={{color:"#212121"}} size="small" color="primary">
                 Забронировать
                </Button>
                </CardActions>
                </Card>
                </div>

            </div>
            
        
    );
};

export default Section1;