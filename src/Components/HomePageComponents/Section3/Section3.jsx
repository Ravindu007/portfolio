import React, { useState } from 'react'

const Section3 = () => {

  const [tecSkills, setTecSkills] = useState([
    {skillName: "HTML", level:10, id:1},
    {skillName: "CSS / SCSS", level:70, id:2},
    {skillName: "Bootstrap / Tailwind CSS", level:90, id:3},
    {skillName: "JavaScript", level:70, id:4},
    {skillName: "Ract JS", level:80, id:5},
    {skillName: "Node Js / Express Js", level:80, id:6},
    {skillName: "ASP .Net", level:30, id:7},
    {skillName: "Java", level:50, id:8},
    {skillName: "PHP", level:40, id:9},
    {skillName: "My SQL / Mongo DB", level:60, id:10},
    {skillName: "Git and Git hub", level:80, id:11},
  ])

  const [softSkills, setSoftSkills] = useState([
    {skillName: "Leadership", level:10, id:1},
    {skillName: "Communication", level:70, id:2},
    {skillName: "Problem Solving", level:90, id:3},
    {skillName: "Team work", level:70, id:4},
    {skillName: "Colloboration", level:80, id:5},
  ])

  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom"
    data-aos-duration="1500">
      {/* ection Header */}
      <div className="row">
        <div className="col-12 text-center">
          <h1>Skills</h1>
        </div>
      </div>

      {/* Section Body */}
      <div className="row">

        {/* Technical skills */}
        <div className="col-sm-12 col-md-6">
          <h1 class="text-2xl py-2">Tecnical Skills</h1>
          <div className="tec-skill-card space-y-4">
            {tecSkills.map((skill)=>(
              <div key={skill.id}>
                <h1>{skill.skillName}</h1>
                <div className="bar-case w-[100%] border-2 border-color1">
                  <div 
                    className={`levelbar h-1 bg-color1`} 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Softskills */}
        <div className="col-sm-12 col-md-6">
          <h1 class="text-2xl py-2">Non-Technical Skills</h1>
          <div className="tec-skill-card space-y-4">
            {softSkills.map((skill)=>(
              <div key={skill.id}>
                <h1>{skill.skillName}</h1>
                <div className="bar-case w-[100%] border-2 border-color1">
                  <div 
                    className={`levelbar h-1 bg-color1`} 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section3