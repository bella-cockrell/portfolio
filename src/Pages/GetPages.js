import React from 'react';

const getPages = () => {
  return (
    [{
      title: 'About Me',
      content: 'I am a frontend dev with a keen spirit and an eye for design. I like always to improve my knowledge by challenging myself and learn new technologies.'
    },
    {
      title: 'Skills',
      content:
        <div>
          <div>
            <p>→ Intermediate</p>
            <ul>
              <li>React</li>
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Git</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <p>→ Beginner</p>
            <ul>
              <li>Typescript</li>
              <li>Heroku</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
    },
    {
      title: 'Contact',
      content:
        <p>
          LinkedIn:
            <a href='https://www.linkedin.com/in/bella-cockrell/' alt='bella-cockrell' target='_blank' rel="noopener noreferrer">
            <br />bella-cockrell
            </a> <br />
          Github:
            <a href='https://github.com/bella-cockrell' alt='bella-cockrell' target='_blank' rel="noopener noreferrer">
            <br />bella-cockrell
            </a>
        </p>
    },
    {
      title: 'Experience',
      content:
        <div>
          <strong>
            Frontend dev at BoulderBook <br />(April 2020 – present)
          </strong>
          <br />
          <div>
            Currently working full-time with a team of back- and frontend developers creating an MVP that allows users to log their climbing sessions.
              <br />
            <strong>Technologies →</strong>
            React with Material UI and styled-components, HTML5, CSS3, Javascript, Typescript, Git.
          </div>
          <br />
          <strong>
            Editor at Pavilion Books (Nov 2014 – present)
        </strong>
          <div>
            I currently project-manage the craft, art and gift titles under the
            Pavilion and Collins & Brown imprints. I have extensive experience
            with handling administration, managing good client relations,
            proofreading and editing.
      </div><br />
          <strong>
            Content Editor at Quintet (Sept – Nov 2014)
      </strong>
          <div>
            I provided content for a new custom cookbook app that reused existing
            recipe content. I worked closely with the app’s developers and
            provided user feedback.
      </div>
        </div>
    },
    {
      title: 'Projects',
      content: <div>
        <p>
          <strong>What’s In? (April 11th – 12th 2020)</strong><br />
          <a
            href='https://medium.com/ukvscovidhack/ukvscovidhack-whatsin-7b7a68581cc8'
            alt='link to Medium website' target='_blank' rel="noopener noreferrer">Medium article
        </a><br />
        This project was part of the Women Driven Development’s hackathon,
        #UKvsCOVIDHack. Over a weekend, we developed an app that would help
        users track levels of produce in shops. <br />
          <strong>Technologies → </strong>React, HTML5, CSS3, Javascript, Git.
      </p><br />
        <p>
          <strong>Github Finder (April 2020 – present)</strong><br />
          <a href='https://github.com/bella-cockrell/github-finder'
            alt='link to Github' target='_blank' rel="noopener noreferrer">Github
        </a><br />
        This project is part of a course on how to call data from APIs using the
        MERN stack. <br />
          <strong>Technologies → </strong>
        React, HTML5, CSS3, Node.js, MongoDB, Express.js, Git.
      </p><br />
        <p>
          <strong>Eyeflix (January 2020 – present)</strong><br />
          <a href='http://kodflix-bella.herokuapp.com/'
            alt='link to Heroku page' target='_blank' rel="noopener noreferrer"> Heroku website
        </a><br />
        As part of the Kodiri React bootcamp, I learned how to use React and
        developed a Netflix clone, from design to deployment.<br />
          <strong>Technologies → </strong>
        React, HTML5, CSS3, Javascript, Heroku, Node.js, MongoDB, Express.js, Git.
      </p>
      </div >
    }]
  )
}

export default getPages;
