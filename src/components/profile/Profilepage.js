import { Fragment } from "react";
import { useSelector } from "react-redux";
import MainProfile from "./MainProfile";
import ProfileTrend from "./ProfileTrend";

const ProfilePage = () => {
  const info = useSelector((state) => state.main.id);
  return (
    <Fragment>
      {info.map((item) => {
        return (
          <div>
            <MainProfile
              key={item.id}
              id={item.id}
              name={item.name}
              totalTweets={item.totalTweets}
              banner={item.profilebanner}
              pfp={item.profilepicture}
              username={item.username}
              bio={item.bio}
              info={item.otherInfo}
              follow={item.follow}
              tweet={item.tweet}
              details={info}
            />
            ;
            <ProfileTrend
              img1={item.imageDisplay.img1}
              img2={item.imageDisplay.img2}
              img3={item.imageDisplay.img3}
              img4={item.imageDisplay.img4}
              img5={item.imageDisplay.img5}
              img6={item.imageDisplay.img6}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProfilePage;
