import React from 'react'

function AchievementItem(props) {
  return (
    <div className="col-md-3 col-sm-6 mb-md-0 mb-5 text-center">
        <h2 className="achivement__nbr">{props.nbr}</h2>
        <span className="achievement__text">{props.text}</span>
        
    </div>
  )
} 

export default AchievementItem