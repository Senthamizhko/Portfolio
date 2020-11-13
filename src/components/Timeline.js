import React from "react";
import "./TimelineStyle.css";

const timelineData = [
  {
      title: "Senior software engineer",
      title1: "Gracenote Sports | Netherlands",
    text:
      "Widgets and web development using HTML, CSS, React, nodeJS. Provides fully hosted multisports application including live scoring, schedules, standings, results and also developed Tokyo olympics widgets like medal tables, athlete profile, brackets etc.",
    date: "March 2019 - Present",
    icon: "./images/gracenote.png",
    category: {
      tag: "Current Job",
      color: "#666",
    },
    link: {
      url: "https://www.gracenote.com/sports/2020-summer-games/",
      text: "See profile",
    },
  },
  {

    title: "Software engineer",
    title1: "KBC bank | Belgium",
    text: "Responsible for development, maintenance and implementation of Backoffice and batch applications in Banking and Insurance domain.",
    date: "May 2017 - February 2019",
    icon: "./images/kbc.png",
    category: {
      tag: "Client",
      color: "#666",
    },
    link: {
      url: "https://www.kbc.com/en/working-at-kbc.html",
      text: "See profile",
    },
  },
  {
    title: "Associate",
    title1: "Cognizant | India",
    text:
      "Responsible for development of real time web applications using HTML, CSS, Javascript and also worked on backend services using Mainframe",
    date: "July 2014 - February 2019",
    icon: "./images/cognizant.png",
    category: {
      tag: "First job",
      color: "#666",
    },
    link: {
      url: "https://careers.cognizant.com/nl/en",
      text: "Check it out here",
    },
  },
  {
    title: "Bachelor of engineering",
    title1: "Chennai, India",
    text:
      "Studied Electronics and communication engineering from Sree sastha institute of engineering and technology",
    date: "August 2010 - April 2014",
    category: {
      tag: "College",
      color: "#666",
    },
    // link: {
    //   url: "https://twitter.com/senthamizhko",
    //   text: "See profile",
    // },
  },
  {

    title: "High school",
    title1: "St.pauls | Vaniyambadi, India",
    date: "March 2010",
    category: {
      tag: "School",
      color: "#666",
    },

    // link: {
    //   url: "https://www.facebook.com/senthamizhko",
    //   text: "See profile",
    // },
  },
  {
    title: "Born",
    title1: "Vaniyambadi, India",
    date: "September 03 1992",
    category: {
      tag: "Birth",
      color: "#666",
    },

    // link: {
    //   url: "https://www.facebook.com/senthamizhko",
    //   text: "See profile",
    // },
  },
];

const TimelineItem = ({ data, index }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>

      <h2 className="title1">{data.title}</h2>
      <h4 className="title1">{data.title1}</h4>
      <p className="text">
          {
              <>
        {data.text}
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.icon && (
              <img className="gracenote" src={data.icon} alt="html"></img>
            )}
          </a>
        )}
        </>
       
    }
      </p>
      {data.link && (
        <a
          href={data.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="anchor"
        >
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} index= {idx} key={idx} />
      ))}
    </div>
  );

export default Timeline;
