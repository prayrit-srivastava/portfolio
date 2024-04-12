import React from "react";

const ConnectBox = ({ con }) => {
  return (
    <div>
      {con.name}
      <a href={con.link} target="_blank">
        Link
      </a>
    </div>
  );
};

export default ConnectBox;
