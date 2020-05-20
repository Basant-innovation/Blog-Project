import { createStore } from "redux";

const postsReducereDefualtValue = [
  {
    id: 1,
    img: "1.jpg",
    title: "Forest",
    breif: "Lorem ipsum",
    authorimg: "profile.jpg",
    author: "Ahmed",
    date: "date.now()",
  },
  {
    id: 2,
    img: "2.jpg",
    title: "Forest",
    breif: "Lorem ipsum",
    authorimg: "profile.jpg",
    author: "Ahmed",
    date: "date.now()",
  },
  {
    id: 3,
    img: "3.jpg",
    title: "Forest",
    breif: "Lorem ipsum",
    authorimg: "profile.jpg",
    author: "Ahmed",
    date: "date.now()",
  },
  {
    id: 4,
    img: "3.jpg",
    title: "Forest",
    breif: "Lorem ipsum",
    authorimg: "profile.jpg",
    author: "Ahmed",
    date: "date.now()",
  },
];

const postsReducer = (state = postsReducereDefualtValue, action) => {
  switch (action.type) {
    case "SET_POST":
      return action.posts;
    case "ADD_POST":
      return [...state, action.posts];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};
const store = createStore(postsReducer);
export default store;
