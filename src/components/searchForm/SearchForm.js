function SearchForm({
  query,
  setQuery,
  searchPosts
}) {
  return (
    <form
      autoComplete="off"
      role="search"
      onSubmit={searchPosts}
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
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
