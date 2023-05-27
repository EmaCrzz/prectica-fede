const reloadUsers = async () => {
  const usersList = document.getElementById("users");
  usersList.remove();
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  
  return users;
};

export default reloadUsers;
