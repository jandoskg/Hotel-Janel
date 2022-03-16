import { Button, Grid, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useComments } from '../../contexts/CommentContext';

const AddComments = () => {
    const {addComment}=useComments();

    const [comment,setComment]=useState({
        userName:"",
        body:"",

    })

    const handleInp=(e)=>{
        let obj = {
            ...comment,
            [e.target.name]: e.target.value,
        };
        setComment(obj);

    }
    return (
        <Box
      sx={{
        bgcolor: "white",
        height: "60vh",
        padding: "0vh auto",
      }}
    >
      <center variant="h6" gutterBottom>
        <h2 sx={{ fontFamily: "Monospace" }}>Оставьте Отзыв</h2>
      </center>

      <Grid
        item
        xs={12}
        md={9}
        sx={{
          margin: "5vh 0",
          boxShadow: 3,
          borderRadius: 3,
          bgcolor: "#fafafa",
        }}
      >
        <form>
          <TextField
            my="10px"
            fullWidth
            id="outlined-basic"
            label="Ваше Имя"
            variant="outlined"
            name="userName"
            onChange={handleInp}
          />{" "}
          <TextField
            fullWidth
            id="outlined-basic"
            label="ОПИСАНИЕ"
            variant="outlined"
            name="body"
            onChange={handleInp}
          />{" "}
          
          <Stack direction="row" spacing={2} sx={{ bgcolor: "#0288d1" }}>
            <Button
              id="button"
              sx={{
                bgcolor: "#263238",
                borderColor: "error.main",
                fontFamily: "Monospace",
              }}
              color="error"
              variant="outlined"
              size="large"
              fullWidth
              onClick={() => {
                addComment(comment);

                
              }}
            >
              Добавить 
            </Button>
          </Stack>
        </form>
      </Grid>
    </Box>
        
    );
};

export default AddComments;