const postsReducereDefualtValue = [];

const postsReducer = (state = postsReducereDefualtValue, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.post, ...state];
    case "EDIT_POST":
      return state.map((post) =>
        post._id !== action.id ? post : { ...post, ...action.update }
      );
    case "DELETE_POST":
      return state.filter((post) => post._id !== action.id);
    case "GETMY_POST":
      return action.posts;
    case "GET_POST":
      return { ...state, post: { ...action.post } };
    case "GETALL_POST":
      return action.posts;
    default:
      return state;
  }
};

export default postsReducer;
