const usersReducereDefualtValue = {
  currentUser: {},
  user: {},
};

const usersReducer = (state = usersReducereDefualtValue, action) => {
  switch (action.type) {
    case "SIGNUP_USER":
      return { ...state };
    case "SIGNIN_USER":
      return { ...state, currentUser: { ...action.user } };
    case "LOGOUT_USER":
      return { ...state, currentUser: {} };
    case "GETCURRENT_USER":
      return { ...state, currentUser: { ...action.user } };
    case "GET_USER":
      return { ...state, user: { ...action.user } };
    case "GETALL_USER":
      return;
    case "TOGGLE_FOLLOW":
      console.log("toggle follow" + state.currentUser);
      const isFollowing = state.currentUser.following.includes(action.id);
      const newFollowing = isFollowing
        ? state.currentUser.following.filter((id) => id !== action.id)
        : [...state.currentUser.following, action.id];
      return {
        ...state,
        currentUser: { ...state.currentUser, following: newFollowing },
      };
    default:
      return state;
  }
};

export default usersReducer;
