import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  const [profile, setProfile] = React.useState("");
  const [repos, setRepos] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [bio, setBio] = React.useState(null);

  React.useEffect((searchInputUser) => {
    const token = process.env.REACT_APP_HOST_API_KEY;

    async function getProfileRepos(urlProfile, urlRepos) {
      try {
        setLoading(true);
        const userData = await fetch(urlProfile, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        userData.json().then((response) => setProfile(response));

        const reposData = await fetch(urlRepos, {
          headers: {
            Authorization: `token ${token}`,
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

  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!profile) return null;
  if (!repos) return null;

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
        {repos.map((repo) => (
          <div key={repos.name} className={styles.repository}>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
