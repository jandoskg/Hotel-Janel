import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_COMMENTS } from "../helpers/const";

export const commentContext = createContext();

export const useComments = () => {
  return useContext(commentContext);
};

const INIT_STATE = {
  comments: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_COMMENTS:
      return { ...state, comments: action.payload };
  }
};
const CommentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getComments = async () => {
    let { data } = await axios(`${JSON_API_COMMENTS}${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_COMMENTS,
      payload: data,
    });
  };

  const addComment = async (newComment) => {
    await axios.post(JSON_API_COMMENTS, newComment);
    getComments();
  };

  const deleteComment = async (id) => {
    await axios.delete(`${JSON_API_COMMENTS}/${id}`);
    getComments();
  };

  const saveEditedComment = async (newComment) => {
    await axios.patch(`${JSON_API_COMMENTS}/${newComment.id}`, newComment);
    getComments();
  };

  const values = {
    getComments,
    addComment,
    deleteComment,
    saveEditedComment,
    comments: state.comments,
  };

  return (
    <commentContext.Provider value={values}>{children}</commentContext.Provider>
  );
};

export default CommentContextProvider;
