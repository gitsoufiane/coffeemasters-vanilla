export const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const url = e.target.getAttribute("href");
        Router.go(url);
      });
    });
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Navigating to ${route}`);
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
  },
};
