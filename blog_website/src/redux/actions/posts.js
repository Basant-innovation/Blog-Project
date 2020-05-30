import axios from "axios";

const url = "https://bloture-nodejs.herokuapp.com";

export const addPost = (post) => {
  return async (dispatch) => {
    const res = await axios.post(`${url}/posts/add`, post, {
      headers: { "content-type": "multipart/form-data" },
    });

    dispatch({ type: "ADD_POST", post: res.data });
    return res.data;
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`${url}/posts/${id}`);

    dispatch({ type: "DELETE_POST", id });
    return res.data;
  };
};

export const editPost = (id, post) => {
  return async (dispatch) => {
    const res = await axios.post(`${url}/posts/edit/${id}`, post);

    dispatch({ type: "EDIT_POST", id: id, update: res.data });
    return res.data;
  };
};

export const getMyPost = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`${url}/posts/myposts/${id}`);

    dispatch({ type: "GETMY_POST", posts: res.data });
    return res.data;
  };
};

export const getAllPosts = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`${url}/posts?page=${page}`);

    dispatch({ type: "GETALL_POST", posts: res.data.posts });
    return res.data.totalPosts;
  };
};

export const getPostById = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}/posts/${id}`);
      return res.data;
    } catch (err) {
      if (err.response) {
        alert(err.response.data);
      }
    }
  };
};
