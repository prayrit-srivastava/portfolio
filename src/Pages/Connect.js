import React from "react";
import ConnectBox from "../Component/ConnectBox";

const Connect = () => {
  const connectslinks = [
    { name: "Github", link: "https://github.com/prayrit-srivastava" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/prayrit-srivastava-b520111a3/",
    },
    { name: "Email", link: "mailto:sriprayrit@gmail.com" },
    { name: "Leetcode", link: "https://leetcode.com/sriprayrit/" },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/cs_1923_b_12",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/___itzzprayrit/?hl=en",
    },
    { name: "twitter", link: "https://twitter.com/prayrit7" },
  ];
  return (
    <div>
      Different Platform where you can find me.
      <div>
        {connectslinks.map((item, ind) => (
          <ConnectBox con={item} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Connect;
