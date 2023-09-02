import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import "./Section4.scss"

const Section4 = () => {


  const [projects, setProjects] = useState([
    { 
      id:1,
      name:"Learning Management System", 
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.", 
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
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.", 
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
      id:3,
      name:"Learning Management System", 
      desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.", 
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
  ])

  return (
    <div className='container pt-10 h-fit'>
      {/* Section header */}
      <div className="row">
        <div className="col-12 text-center">
          <h1>Projects I have Built</h1>
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
                                  <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non facilis voluptates nobis est quisquam at quaerat odio consequuntur ea numquam ullam delectus, dignissimos rem, fuga ad exercitationem incidunt adipisci? Possimus.</p>
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
                      <img src={project.img} alt="" />
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