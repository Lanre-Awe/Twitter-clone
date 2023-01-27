import classes from "./Trending.module.css";
import SearchBar from "./SearchBar";
import Card from "./Card";
import TrendList from "./Trendlist";
import Suggestion from "./Suggestions";

const Trending = () => {
  return (
    <div className={classes.trending}>
      <div className={classes.hide}>
        <SearchBar />
        <Card>
          <div className={classes.heading}>Trend For You</div>
          <TrendList />
        </Card>
        <Suggestion />
      </div>
    </div>
  );
};

export default Trending;
