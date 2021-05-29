import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  const [profile, setProfile] = React.useState("");
  const [repos, setRepos] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [bio, setBio] = React.useState(null);

  // React.useEffect(() => {
  //   async function getUser(temppone) {
  //     const userData = await fetch(`https://api.github.com/users/temppone`);
  //     userData.json().then((response) => {
  //       setProfile(response);
  //     });
  //     const reposData = await fetch(
  //       `https://api.github.com/users/temppone/repos`
  //     );
  //     reposData.json().then((response) => {
  //       try {
  //         setLoading(true);
  //       } catch (erro) {
  //         setError(erro);
  //       } finally {
  //         setLoading(false);
  //       }
  //     });
  //   }
  //   getUser();
  // }, []);

  React.useEffect((searchInputUser) => {
    const token = process.env.REACT_APP_HOST_API_KEY;

    async function getProfileRepos(urlProfile, urlRepos) {
      try {
        setLoading(true);
        const userData = await fetch(urlProfile, {
          headers: {
            authorization: `token ${token}`,
          },
        });
        userData.json().then((response) => setProfile(response));

        const reposData = await fetch(urlRepos, {
          headers: {
            authorization: `token ${token}`,
          },
        });
        reposData.json().then((response) => {
          try {
            setLoading(true);
            setRepos(response);
          } catch (erro) {
            setError(erro);
          } finally {
            setLoading(false);
          }
        });
      } catch (erro) {
        setError(erro);
      } finally {
        setLoading(false);
      }
    }

    getProfileRepos(
      `https://api.github.com/users/temppone`,
      `https://api.github.com/users/temppone/repos`
    );
  }, []);

  React.useEffect(() => {
    console.log(profile);
  }, [profile]);

  return (
    <div className={`container ${styles.profile}`}>
      <div className={styles.avatarAndInfos}>
        <p></p>
        <div className={styles.avatarAndInfosImage}>
          <img src={profile.avatar_url} alt="" />
        </div>
        <h1 className={styles.userName}>{profile["name"]}</h1>
        <div className={styles.login}>{profile.login}</div>
        <div>{profile.bio}</div>
        <div className={styles.socialNumbers}>
          <div>{profile.followers}</div>
          <div>{profile.following}</div>
        </div>
        <div> {profile.organization}</div>
      </div>
      <div className={styles.repositories}>
        <div className={styles.repository}>
          <h2>react-json</h2>
          <p>Lorem ipsum dolor amet dedo dada papapap</p>
        </div>
        <div className={styles.repository}>
          <h2>react-json</h2>
          <p>Lorem ipsum dolor amet dedo dada papapap</p>
        </div>
        <div className={styles.repository}>
          <h2>react-json</h2>
          <p>Lorem ipsum dolor amet dedo dada papapap</p>
        </div>
        <div className={styles.repository}>
          <h2>react-json</h2>
          <p>Lorem ipsum dolor amet dedo dada papapap</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
