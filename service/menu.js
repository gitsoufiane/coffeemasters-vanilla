import { api } from "./api.js";

export async function loadData() {
  const menu = await api.fetchMenu();
  app.store.menu = menu;
}
