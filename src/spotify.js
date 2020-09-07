// end point : we need to send the user to do the login and other stuff

// step1 : click on login button on spotify
// step2 : redirect to spotify login page
// step3 : Redirect to homepage to localhost once logged in

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirecturi = "http://localhost:3000/";

const clientId = "d9802ea218024879957d14859447a44d";

// scope means we are giving the user the functionalities they can do in the application
// it also specifies the permission  to the users
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// we are accessing the token
export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirecturi}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
