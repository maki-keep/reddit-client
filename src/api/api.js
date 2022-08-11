import javascript_json_mock from "../mocks/data/javascript.json";
import search_json_mock from "../mocks/data/search.json";

const api = {
  loadPopular: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(javascript_json_mock);
      }, 2000);
    });
  },
  searchPosts: (query) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(search_json_mock);
      }, 3000);
    });
  }
}

export default api;