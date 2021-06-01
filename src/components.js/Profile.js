import React from "react";
import styles from "./Profile.module.css";
import {
  Email,
  Home,
  HomeWork,
  Link,
  SupervisorAccount,
  Twitter,
} from "@material-ui/icons";

const Profile = ({ searchInputUserProfile }) => {
  const [profile, setProfile] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const token = process.env.REACT_APP_HOST_API_KEY;
    async function getProfileRepos(urlProfile) {
      try {
        setLoading(true);
        const userData = await fetch(urlProfile, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        userData.json().then((response) => setProfile(response));
      } catch (erro) {
        setError(erro);
      } finally {
        setLoading(false);
      }
    }
    getProfileRepos(`https://api.github.com/users/${searchInputUserProfile}`);
  }, []);

  if (loading) return <div className="container growUpBar"></div>;
  if (error) return <div>{error}</div>;
  if (!profile) return null;

  return (
    <div className={`container ${styles.profile}`}>
      <div className={styles.avatarAndInfos}>
        <div className={styles.avatarAndInfosImage}>
          <img src={profile.avatar_url} alt="" />
        </div>

        <h1 className={styles.userName}>{profile.name}</h1>

        <div className={styles.login}>@{profile.login}</div>

        <div>{profile.bio}</div>

        <div className={styles.socialNumbers}>
          <SupervisorAccount />
          <div>
            <div>{profile.followers}</div> followers
          </div>
          <div>
            <div>{profile.following}</div> following
          </div>
        </div>

        <div className={styles.moreInfos}>
          {profile.organization ? (
            <div>
              <HomeWork />
              {profile.organization}
            </div>
          ) : null}

          {profile.location ? (
            <div>
              <Home />
              {profile.location}
            </div>
          ) : null}

          {profile.email ? (
            <div>
              <Email />
              <a href={profile.email}>{profile.email}</a>
            </div>
          ) : null}
          {profile.twitter ? (
            <div>
              <Twitter />
              <a href={profile.twitter}>{profile.twitter}</a>
            </div>
          ) : null}
          {profile.blog ? (
            <div>
              <Link />
              <a href={profile.blog}>{profile.blog}</a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;
