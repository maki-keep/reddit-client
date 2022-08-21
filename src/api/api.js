import DOMPurify from "dompurify";

const api = {
  popularEndpoint: "https://www.reddit.com/r/popular.json",
  searchEndpoint: "https://www.reddit.com/search.json?q=",
  loadPopular: async () => {
    try {
      const response = await fetch(api.popularEndpoint);
      const JSON_response = await response.json();
      // console.log(JSON_response);
      return JSON_response;
    } catch(err) {
      // console.log(e);
      throw new Error('Error', { cause: err });
    }
  },
  searchPosts: async (query) => {
    try {
      const queryURI = encodeURIComponent(DOMPurify.sanitize(query));
      const response = await fetch(api.searchEndpoint + queryURI);
      const JSON_response = await response.json();
      // console.log(JSON_response);
      return JSON_response;
    } catch(err) {
      // console.log(e);
      throw new Error('Error', { cause: err });
    }
  }
}

/* mock code */
/* import javascript_json_mock from "../mocks/data/javascript.json";
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
} */

export default api;
