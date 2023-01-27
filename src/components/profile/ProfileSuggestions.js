import Card from "../Card";
import classes from "../suggestion.module.css";

const DUMMY_SUGGESTION = [
  {
    id: 1,
    name: "POCO",
    username: "@pocoglobal",
  },
  {
    id: 2,
    name: "SAMMY",
    username: "@samuelstern",
  },
  {
    id: 3,
    name: "BroSki",
    username: "@official001",
  },
];

const ProfileSuggestions = () => {
  return (
    <Card>
      <div>
        <div className={classes.heading}>You might like</div>
        {DUMMY_SUGGESTION.map((item) => {
          return (
            <div className={classes.divcontainer}>
              <div>
                <img src="" alt="" />
              </div>
              <div className={classes.suggestions}>
                <div className={classes.container}>
                  <div className={classes.name}>{item.name}</div>
                  <div className={classes.username}>{item.username}</div>
                </div>
                <div className={classes.bucontainer}>
                  <button className={classes.button}>Follow</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default ProfileSuggestions;
