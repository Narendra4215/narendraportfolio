import './WorkCardStyles.css'
import React from 'react'
// import {NavLink} from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='img'/>
    <h2 className='project-title'>{props.title}</h2>
    <div className='project-data'>
    <div className='project-name'>{props.pname}</div>
    <div className='project-name'>{props.date}</div>
    </div>

    <div className='pro-details'>
        <p>{props.text}</p>
        <a href={props.urls} target='blank'>URL: {props.urlname}</a>
     
    </div>
</div>
  )
}

export default WorkCard
