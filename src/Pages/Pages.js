import React from 'react';

const Pages = () => {
  return (
    [{
      title: 'About Me',
      content: 'I am a frontend dev with a keen spirit and an eye for design. I like always to improve my knowledge by challenging myself and learn new technologies.'
    },
    {
      title: 'Skills',
      content: '→ Intermediate: React, Javascript, HTML5, CSS3, Git, Figma → Beginner: Typescript, Heroku, Node.js, MongoDB, Express.js, Python'
    },
    {
      title: 'Contact',
      content: <p>to come (this is HTML!)</p>
    },
    {
      title: 'Experience',
      content: 'Frontend dev at BoulderBook (April 2020 – present). Currently working full-time with a team of back- and frontend developers creating an MVP that allows users to log their climbing sessions. Technologies: React with Material UI and styled-components, HTML5, CSS3, Javascript, Typescript, Git. Editor at Pavilion Books (Nov 2014 – present). I currently project-manage the craft, art and gift titles under the Pavilion and Collins & Brown imprints. I have extensive experience with handling administration, managing good client relations, proofreading and editing. Content Editor at Quintet (Sept – Nov 2014). I provided content for a new custom cookbook app that reused existing recipe content. I worked closely with the app’s developers and provided user feedback.'
    },
    {
      title: 'Projects',
      content: 'What’s In? (April 11th – 12th 2020). This project was part of the Women Driven Development’s hackathon, #UKvsCOVIDHack. Over a weekend, we developed an app that would help users track levels of produce in shops. Technologies → </strong>React, HTML5, CSS3, Javascript, Git. Github Finder (April 2020 – present). This project is part of a course on how to call data from APIs using the MERN stack. Technologies → React, HTML5, CSS3, Node.js, MongoDB, Express.js, Git. Eyeflix (January 2020 – present). As part of the Kodiri React bootcamp, I learned how to use React and developed a Netflix clone, from design to deployment. Technologies → React, HTML5, CSS3, Javascript, Heroku, Node.js, MongoDB, Express.js, Git.'
    }]
  )
}

export default Pages;
