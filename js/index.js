import getUsers from "./get-users.js";
import renderUsers from "./render-user.js";
import renderLoader from "./render-loader.js";
import reloadUsers from "./reload-users.js";

const main = document.getElementById("main");
const buttonReload = document.createElement("button");
buttonReload.textContent = "Reload";

let users = [];
let loading = true;

renderLoader(loading, main);
users = await getUsers(users, loading);
loading = false;
renderLoader(loading, main);
main.appendChild(buttonReload);
renderUsers(users, main);

buttonReload.addEventListener("click", async () => {
  loading = true;
  renderLoader(loading, main);
  const newUsers = await reloadUsers();
  loading = false;
  renderLoader(loading, main);
  renderUsers(newUsers, main);
});
