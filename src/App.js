import { useState } from "react";
import api from "./api/api.js";
import SearchForm from "./components/searchForm/SearchForm.js";
import Posts from "./components/posts/Posts.js";
import reddit_logo_icon from "./reddit-logo-icon.svg";
import reddit_logo_text from "./reddit-logo-text.svg";

function App() {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const loadPopular = () => {
    api.loadPopular().then((JSON) => {
      const { children } = JSON.data;
      setPosts(children);
    });
  };
  const searchPosts = (e) => {
    e.preventDefault();
    // setQuery("");
    api.searchPosts(query).then((JSON) => {
      const { children } = JSON.data;
      setPosts(children);
    });
  };
  return (
    <div>
      <header className="App-header">
        <nav>
          <a href="https://www.reddit.com/">
            <img src={reddit_logo_icon} alt="redit logo icon" className="reddit-logo-icon" />
            <img src={reddit_logo_text} alt="reddit logo text" className="reddit-logo-text" />
          </a>
          <div id="search">
            <SearchForm
              query={query}
              setQuery={setQuery}
              searchPosts={searchPosts}
            />
          </div>
          <div className="buttons">
            <a
              onClick={loadPopular}
            >
              <i className="icon icon-popular"></i>
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div>
          <div>
            <Posts
              posts={posts}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
