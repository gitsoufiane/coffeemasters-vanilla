// for the dom , it is better to wait until it is loaded to be sure all elements are accessible
import { Router } from "./service/router.js";
import { Store } from "./service/store.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
});
