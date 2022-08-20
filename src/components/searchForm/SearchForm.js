import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchForm({
  query,
  setQuery,
  handleSearchPosts,
  maxLengthCheck
}) {
  return (
    <form
      autoComplete="off"
      role="search"
      onSubmit={handleSearchPosts}
    >
      <label htmlFor="header-search-bar">
        <div aria-hidden="true">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon icon-search" />
        </div>
      </label>
      <input
        type="search"
        id="header-search-bar"
        name="q"
        placeholder="Search Reddit"
        autoFocus
        value={query}
        onChange={(e) => setQuery(maxLengthCheck(e))}
      />
    </form>
  );
}

export default SearchForm;
