import React, {useState} from "react";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";
import Timeline from "./Timeline";

// const Wrapper = styled("div")`
//   background: ${props => props.theme.background};
//   width: 100vw;
//   height: 100vh;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
//   h1 {
//     color: ${props => props.theme.body};
//   }
// `;
// let mode = "";
const App = () => {

  function toggle (e) {
    document.body.classList.toggle("dark-mode");
  }

  return (
    <React.Fragment>
      <div className="main">
      <div className="intro">
      <h1>Senthamizhko Arivannal</h1>
      <h2 className="frontend">Hi there! Welcome to my profile, I am a Front-end developer</h2>
      <h3>
        I am basically from India and currently working as a senior software engineer in Gracenote sports, a nielsen company in Utrecht Netherlands</h3>
      <p>
        I have overall 6 years of experience in development, maintenance and implementation of Backoffice and batch applications in Banking and Insurance domain. Sound knowledge in implementing Real time web applications using ReactJS, React Hooks, Redux, ES6, HTML, CSS, Webpack and developing Integration services and REST APIs using NodeJS, ExpressJS, Socket.IO, MongoDB.

Good working knowledge on Git, Jira, confluence, CI/CD.

Having knowledge on Javascript testing framework- Jest, Enzyme

Sound exposure and experience in working with agile methodologies such as Scrum, ScrumBan.

Having basic understanding of Docker, Kubernetes, AWS (IAM, S3, EC2, Lambda).

Sound knowledge in implementing Mainframe development using COBOL, DB2, JCL, VSAM.

I am an enthusiastic person who is always striving to learn new things and willing to take up challenges which helps me to grow professionally and to keep me updated in the IT industry.</p>
      <div>
        
        <button className="toggle" onClick={(e) => toggle(e)}>
        Toggle theme
     </button>
     {/* <img className="gif" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8ac70e18142643.562da3d5a8622.gif" ></img> */}

     </div>

      </div>
      <div>
     <img className="person-image" src="./Sentha.jpg" alt="sentha" ></img>

     </div>
     </div>

     <Timeline />
      </React.Fragment>
  );
};

export default App;
