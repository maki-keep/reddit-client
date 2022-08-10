import api from "./api.js";
import javascript_json_mock from "../mocks/data/javascript.json";
import search_json_mock from "../mocks/data/search.json";

describe('api', () => {
  describe('loadPopular', () => {
    test('it returns a promise that resolves in a JSON of popular Reddit posts', () => {
      const promise = new Promise((res, rej) => {
        res(javascript_json_mock);
      });
      expect(api.loadPopular()).toEqual(promise);
    });
  });
  describe('searchPosts', () => {
    test('it returns a promise that resolves in a JSON of posts searched given a query string (cake recipes)', () => {
      const query = "cake recipes";
      const promise = new Promise((res, rej) => {
        res(search_json_mock);
      });
      expect(api.searchPosts(query)).toEqual(promise);
    });
  });
});
