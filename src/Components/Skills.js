import React from 'react';
import '../App.css';

const Skills = () => {
  return (
    <div >
      <h2>Skills</h2>
      <div className='skills'>
        <div>
          <strong>→ Intermediate</strong><br />
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
          <strong>→ Beginner</strong><br />
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
    </div>
  )
}

export default Skills;
