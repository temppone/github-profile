import React from "react";
import styles from "./Repositories.module.css";

import colors from "./Colors";

const Repositories = ({ searchInputUser }) => {
  const [reposResponse, setReposResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  React.useEffect((searchInputUser) => {
    async function getProfileRepos(urlRepos) {
      const token = process.env.REACT_APP_HOST_API_KEY;

      const reposData = await fetch(urlRepos, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      reposData
        .json()
        .then((response) => {
          setLoading(true);
          setReposResponse(response);
        })
        .catch((error) => setErrorMessage(error))
        .finally((response) => setLoading(false));
    }
    searchInputUser = "temppone";
    getProfileRepos(`https://api.github.com/users/${searchInputUser}/repos`);
  }, []);

  if (loading) return <div className={styles.growUpBar}></div>;
  if (errorMessage)
    return <div className={styles.errorMessage}>`${errorMessage} :(`</div>;
  if (!reposResponse)
    return <div className={styles.errorMessage}>Não tem nada aqui uai</div>;

  return (
    <div className={styles.repositories}>
      <div className={styles.repoTitle}>
        <h1>Repositories</h1>
      </div>
      {reposResponse?.map((repo) => (
        <a
          key={repo.name}
          href={repo.html_url}
          alt={repo.description}
          target="_blank"
          rel="noreferrer"
        >
          <div key={repo.name} className={styles.repository}>
            <h2>{repo.name}</h2>
            {repo.description ? (
              <p>{repo.description}</p>
            ) : (
              <p>No description, read more here</p>
            )}
            <div className={styles.repoLang}>
              <div style={colors[repo.language]}></div>
              {repo.language}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Repositories;
