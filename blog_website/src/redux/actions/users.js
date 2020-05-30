import axios from "axios";

const url = "https://bloture-nodejs.herokuapp.com";

export const signUpUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: "SIGNUP_USER" });
    try {
      const res = await axios.post(`${url}/users/signup`, user);
      return res.user;
    } catch (err) {
      if (err.response) {
        return err.response.data;
      }
    }
  };
};

export const signInUser = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${url}/users/signin`, user);
      axios.defaults.headers.common["auth-token"] = res.data.token;
      dispatch({ type: "SIGNIN_USER", user: res.data.user });
      return res.data;
    } catch (err) {
      if (err.response) {
        return err.response.data;
      }
    }
  };
};

export const logOutUser = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["authorization"];
    dispatch({ type: "LOGOUT_USER" });
  };
};

export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}/users/${id}`);
      dispatch({ type: "GET_USER", user: res.data });
      return res.data;
    } catch (err) {
      if (err.response) {
        alert(err.response.data);
      }
    }
  };
};

export const getAllUser = () => {
  return async (dispatch) => {
    dispatch({ type: "GETALL_USER" });
    try {
      const res = await axios.get(`${url}/users`);
      return res.response.header;
    } catch (err) {
      if (err.response) {
        alert(err.response.data);
      }
    }
  };
};

export const toggleFollowUser = (id, follow) => {
  return async (dispatch) => {
    try {
      const res = follow
        ? await axios.post(`${url}/users/follow/${id}`)
        : await axios.post(`${url}/users/unfollow/${id}`);
      dispatch({ type: "TOGGLE_FOLLOW", id });
      return res.data;
    } catch (err) {
      if (err.response) {
        alert(err.response.data);
      }
    }
  };
};

export const getCurrentUser = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}/users/getCurrentUser`);
      dispatch({ type: "GETCURRENT_USER", user: res.data.user });
      return res.data;
    } catch (err) {
      if (err.response) {
        alert(err.response.data);
      }
    }
  };
};
