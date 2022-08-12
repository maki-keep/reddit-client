import api from "./api.js";
import javascript_json_mock from "../mocks/data/javascript.json";
import search_json_mock from "../mocks/data/search.json";

describe('api', () => {
  describe('loadPopular', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });
    test('returns a promise that resolves in a JSON of popular Reddit posts', () => {
      fetch.mockResponseOnce(JSON.stringify({
        data: {
          children: []
        }
      }));
      api.loadPopular().then(res => {
        expect(res.data).toEqual({
          children: []
        });
      });
      expect(fetch.mock.calls.length).toEqual(1);
    });
  });
  describe('searchPosts', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });
    test('returns a promise that resolves in a JSON of posts searched given a query string (cake recipes)', () => {
      const query = "cake recipes";
      fetch.mockResponseOnce(JSON.stringify({
        data: {
          children: []
        }
      }));
      api.searchPosts(query).then(res => {
        expect(res.data).toEqual({
          children: []
        });
      });
      expect(fetch.mock.calls.length).toEqual(1);
    });
    test('returns a promise that resolves in a JSON of posts searched given a query string (javascript)', () => {
      const query = "javascript";
      fetch.mockResponseOnce(JSON.stringify({
        data: {
          children: []
        }
      }));
      api.searchPosts(query).then(res => {
        expect(res.data).toEqual({
          children: []
        });
      });
      expect(fetch.mock.calls.length).toEqual(1);
    });
  });
});
