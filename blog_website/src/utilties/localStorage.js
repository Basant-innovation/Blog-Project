export const GetLocalStorage = () => {
  localStorage.getItem("token");
};

export const SetLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

export const GetLocalStorageUser = () => {
  JSON.parse(localStorage.getItem("user"));
};

export const SetLocalStorageUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const RemoveLocalStorage = () => {
  localStorage.removeItem("token");
};
