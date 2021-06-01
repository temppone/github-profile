import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = `Profiles | ${props.title}`;
  });
  return <></>;
};

export default Head;
