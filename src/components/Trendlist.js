import classes from "./Trendlist.module.css";

const DUMMY_LIST = [
  {
    id: 1,
    trend: "Trending in Lagos",
    topic: "Ibadan",
    interactions: "11.2k tweets",
  },
  {
    id: 2,
    trend: "Trending in Lagos",
    topic: "Davido",
    interactions: "13.2k tweets",
  },
  {
    id: 3,
    trend: "Trending in Lagos",
    topic: "Wizkid",
    interactions: "10.2k tweets",
  },
  {
    id: 4,
    trend: "Trending in Nigeria",
    topic: "Burna Boy",
    interactions: "15.2k tweets",
  },
];

const TrendList = () => {
  return (
    <div>
      {DUMMY_LIST.map((item) => {
        return (
          <div key={item.id}>
            <div className={classes.container}>
              <div className={classes.topic}>{item.trend}</div>
              <div className={classes.topic}>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
              </div>
            </div>
            <div className={classes.mainTopic}>{item.topic}</div>
            <div className={classes.topic}>{item.interactions}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TrendList;
