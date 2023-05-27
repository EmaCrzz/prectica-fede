// const queMostrar = [
//   { prop: "name", element: "h2" },
//   { prop: "email", element: "p"},
//   { prop: "phone", element: "p"},
//   { prop: "website", element: "p"},
// ];

const renderDetail = (users) => {
  const liUsers = document.querySelectorAll("#li-user");
  liUsers.forEach((li) => {
    li.addEventListener("click", () => {
      const containerDetailRender = document.querySelector("#container-detail");
      if (containerDetailRender) {
        containerDetailRender.remove();
      }
      const id = li.dataset.id;
      const userClick = users.find((user) => user.id === Number(id));
      const containerDetail = template(
        userClick.name,
        userClick.email,
        userClick.phone,
        userClick.id
      );
      // li.insertAdjacentHTML("afterend", containerDetail);
      // const containerDetail = document.createElement("div");

      // containerDetail.id = "container-detail";

      // const closeBtn = document.createElement("button");
      // closeBtn.textContent = "X";
      // containerDetail.appendChild(closeBtn);

      // queMostrar.forEach(({ prop, element, styles }) => {
      //   const elementRender = document.createElement(element);
      //   elementRender.style = styles;
      //   if(prop === 'email') {
      //     elementRender.classList.add("email-user-details");
      //   }
      //   if(prop === 'name') {
      //     elementRender.textContent = userClick[prop];
      //     elementRender.classList.add("name-user-details");
      //   } else {
      //     elementRender.textContent = `${prop}: ${userClick[prop]}`;
      //   }
      //   containerDetail.appendChild(elementRender);
      // });
      li.insertAdjacentHTML("afterend", containerDetail);
      const closeBtn = document.querySelector("#close-btn");

      closeBtn.addEventListener("click", () => {
        const constainerDetail = document.querySelector("#container-detail");
        constainerDetail.remove();
      });

    });
  });
};

export default renderDetail;

const template = (name, email, phone, id) => {
  return `
  <div id="container-detail" data-id=${id}>
    <div class='row-flex-between-center'>
    <h2 class="name-user-details">${name}</h2>
    <button id='close-btn' class='hover'>X</button>
    </div>
    <p class="email-user-details">${email}</p>
    <p>phone: ${phone}</p>
  </div>
`;
};
