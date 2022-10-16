import React from 'react';
import './achievement.css';
import AchievementItem from './achievementItem';

function Achievement() {
  return (
    <section className="achivement py-4" id="achievement">
      <div className="container">
        <div className="row">
          <AchievementItem nbr={"+800"} text={"Partners"}/> 
          <AchievementItem nbr={"+55"} text={"Countries"}/> 
          <AchievementItem nbr={"+4500"} text={"Opportunities"}/> 
          <AchievementItem nbr={"+1529"} text={"Companies"}/> 
        </div>
      </div>
    </section>
  )
}

export default Achievement