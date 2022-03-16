import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useComments } from '../../contexts/CommentContext';
import { useAuth } from "../../contexts/AuthContext";

const CommentCard = ({item}) => {
    const {deleteComment}=useComments()
    const navigate=useNavigate();
    const {
        user: { email },
      } = useAuth();
    
    return (
        <div >
            <center><h3>Отзывы</h3></center>
            <h3>Имя: {item.userName}</h3>
            <h5>{item.body}</h5>
            <button onClick={() => deleteComment(item.id)}>удалить</button>


            
        </div>
    );
};

export default CommentCard;