// loading: Es la condicion para mostrar o no un loader
// aDondeMuestro: Es el elemento donde se va a mostrar el loader

const renderLoader = (loading, aDondeMuestro) => {
  if (loading) {
    // loader.style.display = "block";
    const loader = document.createElement("p");
    loader.textContent = "Loading...";
    aDondeMuestro.appendChild(loader);
  } else {
    // loader.style.display = "none";
    const loader = document.querySelector("p");
    loader.remove();
  }
};

export default renderLoader;