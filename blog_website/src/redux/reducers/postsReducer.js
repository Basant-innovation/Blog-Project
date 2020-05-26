const postsReducereDefualtValue = [];

const postsReducer = (state = postsReducereDefualtValue, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
    case "EDIT_POST":
      return state.map((post) =>
        post._id !== action.id ? post : { ...post, ...action.update }
      );
    case "DELETE_POST":
      return state.filter((post) => post._id !== action.id);
    case "GETMY_POST":
      return action.posts;
    case "GETALL_POST":
      return action.posts;
    default:
      return state;
  }
};

export default postsReducer;
