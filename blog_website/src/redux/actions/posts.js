import axios from "axios";

export const addPost = (post) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:5000/posts/add", post);
    console.log(res.headers);
    dispatch({ type: "ADD_POST", post });
    return res.data;
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`http://localhost:5000/posts/${id}`);
    console.log(res.headers);
    dispatch({ type: "DELETE_POST", id });
    return res.data;
  };
};

export const editPost = (id) => ({});

export const getMyPost = () => {
  return async (dispatch) => {
    // axios.defaults.headers.common['auth-token'] = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/posts/myposts");
    console.log(res.data);
    dispatch({ type: "GETMY_POST", posts: res.data });
    return res.data;
  };
};

export const getAllPosts = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:5000/posts?page=${page}`);
    console.log(res.data);
    dispatch({ type: "GETALL_POST", posts: res.data.posts });
    return res.data.totalPosts;
  };
};
