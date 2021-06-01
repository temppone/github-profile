import React from "react";
import { useParams } from "react-router";
import Head from "./Head";
import Profile from "./Profile";
import Repositories from "./Repositories";

const ProfileResult = () => {
  const { user } = useParams();

  if (!user) {
    return null;
  }

  return (
    <div className="container">
      <Head
        title={"Resultado"}
        description={"Resultado da pesquisa com o perfil do usuário"}
      />

      <Profile searchInputUserProfile={user} />
      <Repositories searchInputUserRepo={user} />
    </div>
  );
};

export default ProfileResult;
