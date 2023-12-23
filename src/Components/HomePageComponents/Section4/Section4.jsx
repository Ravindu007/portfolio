import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import "./Section4.scss"

const Section4 = () => {


  const [projects, setProjects] = useState([
    { 
      id:1,
      name:"Learning Management System", 
      desc:"Developed a full working LMS with admin functionalities which can be used by both teachers and students in there daytoday academic life", 
      techs:[
        {techName:"React", id:1},
        {techName:"Mongo DB", id:2},
        {techName:"Express Js", id:3},
        {techName:"Node Js", id:4},
      ],
      github:"abc",
      youtube:"def",
      deploy:"ghi",
      img:"/projects/pr1.png"
    },

    { 
      id:2,
      name:"TravelLog Web Application", 
      desc:"A Social Media platform dedicated to travellers around the world which allows travellers to post about the destinations they have visited", 
      techs:[
        {techName:"React", id:1},
        {techName:"Mongo DB", id:2},
        {techName:"Express Js", id:3},
        {techName:"Node Js", id:4},
      ],
      github:"abc",
      youtube:"def",
      deploy:"ghi",
      img:"/projects/pr2.png"
    },
    { 
      id:3,
      name:"Employee Management Platform", 
      desc:"It is a full woking Employee Management Application which allows to manage employee details", 
      techs:[
        {techName:"ASP.NET", id:1},
        {techName:"Angular", id:2},
        {techName:"MySQL", id:3},
      ],
      github:"abc",
      youtube:"def",
      deploy:"ghi",
      img:"/projects/pr1.png"
    },
    { 
      id:4,
      name:"Personalized Weather Application", 
      desc:"It is a weather application which fetched weather data and provide them according to the customer need", 
      techs:[
        {techName:"React", id:1},
        {techName:"Node.js", id:2},
        {techName:"MongoDB", id:3},
        {techName:"Tailwind CSS", id:4},
        {techName:"Bootstrap CSS", id:5},
      ],
      github:"abc",
      youtube:"def",
      deploy:"ghi",
      img:"/projects/pr3.png"
    },
  ])

  return (
    <div 
    id='projects'
    className='container pt-10 h-fit'
    data-aos="flip-up"
    data-aos-duration="1500"
    >
      {/* Section header */}
      <div className="row">
        <div className="col-12 text-center">
          <h1 className='text-4xl py-5'>PROJECTS I HAVE BUILT</h1>
        </div>
      </div>

      {/* Sectionbody */}
      <div className="row">
        <div className="col-12">
          <div className="project-carousel">
            {projects.map((project)=>(
              
                <div className='item-card w-full justify-end mx-8' key={project.id}>
                    <div className="card-top h-[20px] w-fit translate-x-[-50%] translate-y-[50%] relative px-6 py-2 group">
                            <span class="absolute inset-0  h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-color1 "></span>
                            <span class="absolute inset-0 w-full h-full bg-color2 border-2 border-color2 "></span>
                            <span class="relative space-y-6">
                                	<h1 className='text-color1'>{project.name}</h1> 
                                  <p className='text-white'>{project.desc}</p>
                                  <div className="technologies flex space-x-4">
                                    {project.techs.map((tech)=>(
                                      <p key={tech.id}>{tech.techName}</p>
                                    ))}
                                  </div>
                                  <div className="links flex items-center space-x-2">
                                      <Link>
                                        <img src="/icons/github.png" height={30} width={30} alt="" />
                                      </Link>
                                      <Link>
                                        <img src="/icons/youtube.png" height={30} width={30} alt="" />
                                      </Link>
                                      <Link>
                                        <img src="/icons/link.png" height={30} width={30} alt="" />
                                      </Link>
                                  </div>
                            </span>
                    </div>
                    <div className="img-div w-fit">
                      <img src={project.img} alt="" className='h-[30rem] w-[30rem] rounded-md'/>
                    </div>
                </div>
              
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}


$(document).ready(function(){
  $('.project-carousel').slick({
    dots:true,
    centerMode:true,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:5000
  })
})


export default Section4