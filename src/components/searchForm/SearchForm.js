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
          <i className="icon icon-search"></i>
        </div>
      </label>
      <input
        type="search"
        id="header-search-bar"
        name="q"
        placeholder="Search Reddit"
        value={query}
        onChange={(e) => setQuery(maxLengthCheck(e))}
      />
    </form>
  );
}

export default SearchForm;
