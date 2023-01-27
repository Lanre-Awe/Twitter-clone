import classes from "./Search.module.css";

const SearchBar = () => {
  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search Twitter"
        className={classes.search}
      />
    </div>
  );
};

export default SearchBar;
