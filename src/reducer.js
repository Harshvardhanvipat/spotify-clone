export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE AFTER FINISH DEVELOPING
  // token:
  //   "BQDnQyXvk7Ombu4IVVFaeR9YVRS1ZeM0uLoZxoGglsoCKuYADKuh-MLtnkzj_vebrU7feGZXp8ggBAzwv58H1mtIJlvRciTMx9iYEd2y063Azh7qmzD68lG_9hNQqe0dcI4wDyylkpSttP3WC92Q0T0SUlrLqb8ls75Dpzo",
};

const reducer = (state, action) => {
  // console.log(action);

  //action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
