import React from 'react';
import { useProducts } from "../../contexts/ProductContext";
import { useEffect } from "react";
import { Grid } from '@mui/material';
import MediaCard from './ProductCard';
import Sidebar from '../SideBar/Sidebar';

const ProductList = ({products}) => {
    const { getProducts } = useProducts();
    useEffect(() => {
        getProducts();
      }, []);
    return (
        <>
        <center><h2>Апартаменты</h2></center>
        <div><Sidebar/></div>

        
          <div style={{ display: "flex" }}>
            <div className="blog-left">
            <Grid container>
            {products ? (
              products.map((item) => (
                <Grid item>
                  <MediaCard item={item} key={item.id} />
                </Grid>
              ))
            ) : (
              <>
                <h2>..Loading</h2>
              </>
            )}
            </Grid>
           </div>
          </div>
            
        </>
    );
};

export default ProductList;