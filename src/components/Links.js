
import React from "react";

function Links(props) {
  const { github, linkedin } = props;

  return (
    <div id="links">
      <h3>Links</h3>
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
}

export default Links;
