const getUsers = async () => {
  // create delay 3s
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users
};

export default getUsers;
