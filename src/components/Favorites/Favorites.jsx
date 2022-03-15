import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import style from "../Favorites/Favorites.module.css"

const Favorites = () => {
  const navigate = useNavigate()
    const [count, setCount] = React.useState([]);

  const { cart, getCart, deleteCartProducts } =
    useProducts();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };


    return (
        <div style={{ display: "flex", flexWrap:"wrap", marginBottom:"60vh" }}>
         {cart.products.map((row) => (
          <div className={style.card_page} >
           <Card sx={{minWidth:"25vw",minHeight:"30vh"}} key={row.item.name}>
            
            <CardMedia component="img" width="220" height="245" image={row.item.picture} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {row.item.name}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {row.item.price} сом в день
              </Typography>
            </CardContent>
          
          <CardActions>
            
            
                <Button sx={{color:"#d50000"}} size="small" onClick={() => deleteCartProducts(row.item.id)}>
                  Удалить
                </Button>
                <Button sx={{color:"#d50000"}} size="small" onClick={()=>navigate("/payment")} >Забронировать</Button>
                
                
             
            
  
            
          </CardActions>
         </Card>
         </div>
        ))}
        </div>
    );
};

export default Favorites;