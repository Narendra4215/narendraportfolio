import React from 'react';
import './skills.css';

const skillsData = [
  { skill: 'HTML', percentage: 90 },
  { skill: 'CSS', percentage: 85 },
  { skill: 'JavaScript', percentage: 80 },
  { skill: 'React.js', percentage: 75 },
  { skill: 'Sass', percentage: 70 },
  { skill: 'Next.js', percentage: 70 },
  { skill: 'TypeScript', percentage: 65 },
];

const SkillsPage = () => {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{item.skill}</span>
              <span className="percentage-label">{item.percentage}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-percentage"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
