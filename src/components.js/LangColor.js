import React from "react";

const LangColor = ({ colorLangRepo }) => {
  const [color, setColor] = React.useState(null);

  async function getColors(url) {
    const colorData = await fetch(url);
    colorData
      .json()
      .then((response) => {
        console.log(response);
      })
      .catch((response) => console.log("Deu ruim", response))
      .finally("acabou");
  }

  getColors("https://api.jsonbin.io/b/60b3911f44f488301b814033");

  return <div></div>;
};

export default LangColor;
