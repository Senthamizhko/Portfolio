import React from "react";
import data  from "./timeline.json";
import "./TimelineStyle.css";
// const Timeline = () => {

//   return (
//     <div>
//       {data.timeline.map((row) => (
//     <div className="timeline">
        
//       <div className="item">
//           <div className="title">{row.year}
//           </div>
//           <div className="title1">{row.title}
//           </div>
//           </div>
//     </div>
//     ))}

//     </div>
//   );
// };


const timelineData = [
    {
        text: 'Born',
        date: 'September 03 1992',
        category: {
			tag: 'Birth',
			color: '#FFDB14'
		},
        
        link: {
            url: 'https://www.facebook.com/senthamizhko',
            text: 'See profile'
        }
    },
    {
        text: 'Completed my schooling from St.pauls matric hr sec school',
        date: 'March 2010',
        category: {
			tag: 'Education',
			color: '#e17b77'
		},
       
        link: {
            url: 'https://www.facebook.com/senthamizhko',
            text: 'See profile'
        }
    },
    {
        text: 'Studied Electronics and communication engineering from Sree sastha institute of engineering and technology',
        date: 'April 2014',
        category: {
			tag: 'College',
			color: '#1DA1F2'
		},
        link: {
            url: 'https://twitter.com/senthamizhko',
            text: 'See profile'
        }
    },
    {
        text:
            'Started working in Cogizant technology solution as a Programmer Analyst',
        date: 'July 31st 2014',
        category: {
			tag: 'First job',
			color: '#018f69'
		},
        link: {
            url:
                'www.linkedin.com/in/senthamizhko-arivannal',
            text: 'Check it out here'
        }
    },
    {
        text: 'Worked for Belgium Client- KBC bank in Belgium',
        date: 'May 05 2017',
        category: {
			tag: 'Onsite',
			color: '#018f69'
		},
        link: {
            url: 'https://www.kbc.com/en/working-at-kbc.html',
            text: 'See profile'
        }
    },
    {
        text: 'Working as a Senior software engineer for Gracenote sports in Utrecht, Netherlands',
        date: 'June 2019',
        category: {
			tag: 'Current Job',
			color: '#018f69'
		},
        link: {
            url: 'https://www.gracenote.com/sports/2020-summer-games/',
            text: 'See profile'
        }
    }
]

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p className="text">{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );


    export default Timeline;