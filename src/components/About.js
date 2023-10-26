import React from "react";
import Links from "./Links";
import user from "../data/user";



function About(props) {
  const{user,bio}=props
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.github} linkedin={user.linkedin} />
      {bio ? <p>Bio: {bio}</p> : null}
    </div>
  );
}

export default About;
