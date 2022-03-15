import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useProducts } from '../../contexts/ProductContext';
import style from "../Favorites/Favorites.module.css"

const Favorites = () => {
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
        <div style={{ display: "flex",marginBottom:"60vh" }}>
         {cart.products.map((row) => (
          <div className={style.card_page} >
           <Card sx={{width:"25vw"}} key={row.item.name}>
            
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
            
            
                <Button size="small" onClick={() => deleteCartProducts(row.item.id)}>
                  Удалить
                </Button>
                <Button size="small" >Забронировать</Button>
                
                
             
            
  
            
          </CardActions>
         </Card>
         </div>
        ))}
        </div>
    );
};

export default Favorites;