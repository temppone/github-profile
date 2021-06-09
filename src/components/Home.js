import Input from "./Input";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import Head from "./Head";
import introImage from "./img/introImage.svg";

const Home = () => {
  const [searchInputUser, setSearchInputUser] = React.useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/ProfileResult/${searchInputUser}`);
  };

  return (
    <div className={`${styles.homeContainer} showUp`}>
      <Head
        title={"Início"}
        description={"Tela inícia para pesquisar um usuário"}
      />
      <div className={styles.formSearch}>
        <form onSubmit={handleSubmit}>
          
          <div className={styles.boxSearchWithButton}>
            <Input
              className={styles.inputSearch}
              label={
                <h1 className={styles.homeTitle}>
                  <GitHubIcon style={{ fontSize: 70 }} /> GitHub Profiles
                </h1>
              }
              id="searchinput"
              value={searchInputUser}
              setValue={setSearchInputUser}
              placeholder="Digite um user"
            />
            <button className={styles.buttonSearch} type="submit">
              Pesquisar
            </button>
          </div>

        </form>
      </div>
      <div className={styles.introImage}>
        <img src={introImage} alt="Imagem  um perfil pessoal" />
      </div>
    </div>
  );
};

export default Home;
