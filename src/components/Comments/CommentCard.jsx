import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useComments } from '../../contexts/CommentContext';
import { useAuth } from "../../contexts/AuthContext";

import style from "../Comments/Comments.module.css"


const CommentCard = ({item}) => {
    const {deleteComment}=useComments()
    const navigate=useNavigate();
    const {
        user: { email },
      } = useAuth();
    
    return (
        
        
        <div className={style.containerComment}>
        <div className={style.ContentComment} >
            
            <h3>Имя: {item.userName}</h3>
            <p> {item.body}</p>
            <button onClick={() => deleteComment(item.id)}>удалить</button>


            
        </div>
        </div>
    );
};

export default CommentCard;