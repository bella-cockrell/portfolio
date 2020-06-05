import React from 'react';

//Mockups
import KodflixMockup from '../Components/Mockups/KodflixMockup';

//Images
import CSS from '../Images/css.svg';
import Express from '../Images/express.png';
import Figma from '../Images/figma.png';
import Git from '../Images/git.png';
import HTML from '../Images/html5.svg';
import JS from '../Images/javascript.png';
import MongoDB from '../Images/mongodb.png';
import Netlify from '../Images/netlify.png';
import NodeJS from '../Images/nodejs.png';
import Python from '../Images/python.png';
import ReactLogo from '../Images/react.png';
import TS from '../Images/typescript.png';

const getPages = () => {
  return (
    [{
      title: 'About Me',
      content:
        <div className='about-me-card'>
          <p>
            I'm a Junior JavaScript/React Developer with experience working with
            external libraries (Material UI, Gatsby, Leaflet, styled-components)
            and APIs. My special interest is in accessibility, animations and UX/UI
            functionality.
        </p>
          <p>
            I relish the opportunity to collaborate and meet with other developers,
            and regularly attend relevant London based meet-ups, events or conferences,
            like Codebar, React.js Girls, Microsoft Build and Women Driven Development.
        </p>
          <p>
            In my spare time you can find me playing video games, strumming the banjo,
            embroidering or starting yet another project on my GitHub.
        </p>
        </div>
    },
    {
      title: 'Skills',
      content:
        <div className='skill-card'>
          <div>
            <strong>Intermediate</strong>
            <ul>
              <li>React</li><img src={ReactLogo} />
              <li>Javascript</li><img src={JS} />
              <li>HTML5</li><img src={HTML} />
              <li>CSS3</li><img src={CSS} />
              <li>Git</li><img src={Git} />
              <li>Figma</li><img src={Figma} />
            </ul>
          </div>
          <div>
            <strong>Beginner</strong>
            <ul>
              <li>Typescript</li><img src={TS} />
              <li>Netlify</li><img src={Netlify} />
              <li>Node.js</li><img src={NodeJS} />
              <li>MongoDB</li><img src={MongoDB} />
              <li>Express.js</li><img src={Express} />
              <li>Python</li><img src={Python} />
            </ul>
          </div>
        </div>
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
          <strong>Kodflix (January 2020 – present)</strong><br />
          <a href='http://kodflix-bella.herokuapp.com/'
            alt='link to Heroku page' target='_blank' rel="noopener noreferrer"> Heroku website
        </a><br />
          <KodflixMockup />
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
