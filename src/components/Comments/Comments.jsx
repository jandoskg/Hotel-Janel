
import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useComments } from '../../contexts/CommentContext';
import style from "../Comments/Comments.module.css"
import AddComments from './AddComments';
import CommentCard from './CommentCard';

const Comments = () => {
    const {comments,getComments}=useComments();

    useEffect(() => {
        getComments();
      }, []);
    return (
        <div className={style.container}>
            <div className={style.containerItem}>
                <Grid container>
                    {comments ? (comments.map((item)=>(
                        <Grid item>
                            <CommentCard item={item}
                            key={item.id}/>
                        </Grid>
                    ))):(<>
                        <h2>..Loading</h2>
                      </>)}
                </Grid>
            </div>

            <div className={style.AddComments}>
             <AddComments/>
            </div>
            
        </div>
    );
};

export default Comments;