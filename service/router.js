export const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const url = e.target.getAttribute("href");
        Router.go(url);
      });
    });
    window.addEventListener("popstate", (e) => {
      const route = e.state?.route || "/";
      Router.go(route, false);
    });
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Navigating to ${route}`);
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Home Page";
        break;
      case "/order":
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("h1");
          pageElement.textContent = `Details`;
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
        }
        break;
    }
    if (pageElement) {
      const main = document.querySelector("main");
      main.children[0]?.remove();
      main.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};
