import React from 'react';
import './Education.css'; // Import the CSS file

const Education = () => {
  const educationDetails = [
    {
      degree: 'B-Tech',
      college: 'Mekapati Rajamohan Reddy  Institute of Technology and science',
      startYear: 2019,
      endYear: 2022,
    },
    {
      degree: 'Diploma',
      college: 'Govt. Polytechnic College',
      startYear: 2016,
      endYear: 2019,
    },
    {
      degree: 'SSC',
      college: 'Sri Sai High School',
      startYear: 2015,
      endYear: 2016,
    },
  ];

  return (
    <div className="education-container">
      <h2 className="education-heading">Education</h2>
      <ul className="education-list">
        {educationDetails.map((education, index) => (
          <li key={index} className="education-item">
            <h3 className="education-degree">{education.degree}</h3>
            <div className='education-data'>
            <p className="education-college">{education.college}</p>
            <p className="education-duration">
              {education.startYear} - {education.endYear}
            </p>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
