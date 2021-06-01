import Input from "./Input";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import Head from "./Head";

const Home = () => {
  const [searchInputUser, setSearchInputUser] = React.useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/ProfileResult/${searchInputUser}`);
  };

  return (
    <div className={"container"}>
      <Head title={"Início"} description={"Tela inícia para pesquisar um usuário"} />
      <form className={styles.formSearch} onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default Home;
