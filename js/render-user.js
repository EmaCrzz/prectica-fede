import renderDetail from './render-detail.js'

const renderUsers = (users, aDonde) => {
  if (users.length === 0) return;

  const ulElement = document.createElement("ul");
  ulElement.id = "users";

  users.forEach((user) => {

    const liElement = document.createElement("li");
    liElement.innerHTML = `<span>${user.name}</span> <span style="color: blue;">(${user.email})</span>`;
    if (user.name.includes("C")) {
      liElement.style = "font-weight: bold; color: red;";
    }
    liElement.id = "li-user";
    liElement.dataset.id = user.id;
    liElement.classList.add("li-user");
    ulElement.appendChild(liElement);
  });

  aDonde.appendChild(ulElement);
  renderDetail(users);
  
};

export default renderUsers;

// crear template para renderizar el listado