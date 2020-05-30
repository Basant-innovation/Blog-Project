import axios from "axios";

export const addPost = (post) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:5000/posts/add", post, {
      headers: { "content-type": "multipart/form-data" },
    });

    dispatch({ type: "ADD_POST", post: res.data });
    return res.data;
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    const res = await axios.delete(`http://localhost:5000/posts/${id}`);

    dispatch({ type: "DELETE_POST", id });
    return res.data;
  };
};

export const editPost = (id, post) => {
  return async (dispatch) => {
    const res = await axios.post(
      `http://localhost:5000/posts/edit/${id}`,
      post
    );

    dispatch({ type: "EDIT_POST", id: id, update: res.data });
    return res.data;
  };
};

export const getMyPost = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:5000/posts/myposts/${id}`);

    dispatch({ type: "GETMY_POST", posts: res.data });
    return res.data;
  };
};

export const getAllPosts = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:5000/posts?page=${page}`);

    dispatch({ type: "GETALL_POST", posts: res.data.posts });
    return res.data.totalPosts;
  };
};

export const getPostById = (id) => {
  return async (dispatch) => {
    console.log(id);
    try {
      const res = await axios.get(`http://localhost:5000/posts/${id}`);
      dispatch({ type: "GET_POST", post: res.data });
      console.log(res);
      return res.data;
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        alert(err.response.data);
      }
    }
  };
};
