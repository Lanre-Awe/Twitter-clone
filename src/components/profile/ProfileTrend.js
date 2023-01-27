import SearchBar from "../SearchBar";
import styles from "./profiletrend.module.css";
import Card from "../Card";
import TrendList from "../Trendlist";
import ProfileSuggestions from "./ProfileSuggestions";

const ProfileTrend = (props) => {
  return (
    <div className={styles.trending}>
      <SearchBar />
      <div className={styles.imgcontainer}>
        <div className={styles.imagecontainer}>
          <img className={styles.borderleft} src={props.img1} alt="" />
        </div>
        <div className={styles.imagecontainer}>
          <img src={props.img2} alt="" />
        </div>
        <div className={styles.imagecontainer}>
          <img className={styles.borderright} src={props.img3} alt="" />
        </div>
      </div>
      <div className={styles.imgcontainer2}>
        <div className={styles.imagecontainer}>
          <img className={styles.borderleftdown} src={props.img4} alt="" />
        </div>
        <div className={styles.imagecontainer}>
          <img src={props.img5} alt="" />
        </div>
        <div className={styles.imagecontainer}>
          <img className={styles.borderrightdown} src={props.img6} alt="" />
        </div>
      </div>

      <ProfileSuggestions />
      <Card>
        <div className={styles.heading}>Trend For You</div>
        <TrendList />
      </Card>
    </div>
  );
};

export default ProfileTrend;
