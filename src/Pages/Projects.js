import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <p>
        <strong>→  What’s In? (April 11th – 12th 2020)</strong><br />
        <a
          href='medium.com/ukvscovidhack/ukvscovidhack-whatsin-7b7a68581cc8'
          alt='link to Medium website'>Medium article
        </a><br />
        This project was part of the Women Driven Development’s hackathon,
        #UKvsCOVIDHack. Over a weekend, we developed an app that would help
        users track levels of produce in shops. <br />
        <strong>Technologies → </strong>React, HTML5, CSS3, Javascript, Git.
      </p>
      <p>
        <strong>→  Github Finder(April 2020 – present)</strong><br />
        <a href='github.com/bella-cockrell/github-finder'
          alt='link to Github'>Github
        </a><br />
        This project is part of a course on how to call data from APIs using the
        MERN stack. <br />
        <strong>Technologies → </strong>
        React, HTML5, CSS3, Node.js, MongoDB, Express.js, Git.
      </p>
      <p>
        <strong>→  Eyeflix(January 2020 – present)</strong><br />
        <a href='kodflix-bella.herokuapp.com'
          alt='link to Heroku page'> Heroku website
        </a><br />
        As part of the Kodiri React bootcamp, I learned how to use React and
        developed a Netflix clone, from design to deployment.<br />
        <strong>Technologies → </strong>
        React, HTML5, CSS3, Javascript, Heroku, Node.js, MongoDB, Express.js, Git.
      </p>
    </div >
  );
};

export default Projects;
