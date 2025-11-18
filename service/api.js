export const api = {
  url: "/data/menu.json",
  fetchMenu: async () => {
    const response = await fetch(api.url);
    const data = await response.json();
    return data;
  },
};
