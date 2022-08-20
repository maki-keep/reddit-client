import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchForm from "./components/searchForm/SearchForm.js";
import Posts from "./components/posts/Posts.js";
import {
  loadPopular,
  searchPosts
} from "./components/posts/reducer.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import reddit_logo_icon from "./reddit-logo-icon.svg";
import reddit_logo_text from "./reddit-logo-text.svg";

function App() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleLoadPopular = () => {
    dispatch(loadPopular());
  };
  const handleSearchPosts = (e) => {
    e.preventDefault();
    if (query === "") {
      // skip search
      return;
    }
    dispatch(searchPosts(query));
    // setQuery("");
  };
  const maxLengthCheck = (e) => {
    const maxLength = 50;
    let { value } = e.target;
    if (value.length > maxLength) {
      return value.slice(0, maxLength);
    }
    return value;
  };
  useEffect(() => {
    // click on the popular button once App has loaded
    document.getElementById("popular").click();
  }, []);
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
              handleSearchPosts={handleSearchPosts}
              maxLengthCheck={maxLengthCheck}
            />
          </div>
          <div className="buttons">
            <a
              id="popular"
              tabIndex="0"
              onClick={handleLoadPopular}
            >
              <FontAwesomeIcon icon={faArrowTrendUp} className="icon icon-popular" />
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div>
          <div>
            <Posts />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
