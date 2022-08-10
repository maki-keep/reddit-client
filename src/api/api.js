import javascript_json_mock from "../mocks/data/javascript.json";
import search_json_mock from "../mocks/data/search.json";

const api = {
  loadPopular: async () => {
    return javascript_json_mock;
  },
  searchPosts: async (query) => {
    return search_json_mock;
  }
}

export default api;