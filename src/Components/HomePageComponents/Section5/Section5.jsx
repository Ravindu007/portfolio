import React, { useState } from 'react'

const Section5 = () => {

  const [certificates , setCertificates] = useState([
    {name:"Python Fundamentals", img:"/certifications/c3.png", id:1},
    {name:"Java Fundamentals", img:"/certifications/c1.png", id:2},
    {name:"PHP Fundamentals", img:"/certifications/c2.png", id:3},
    {name:"Google Technical Fundamentals", img:"/certifications/c3.png", id:4},
    {name:"Google Bits and Bytes", img:"/certifications/c1.png", id:5}
  ])

  return (
    <div 
    id='certificates'
    className='container h-fit pt-10'
    data-aos="flip-down"
    data-aos-duration="1500" 
    >
      {/* Section Header */}
      <div className="row">
        <div className="col-12 text-center">
          <h1 className='text-4xl py-5'>CERTIFICATIONS</h1>
        </div>
      </div>


      <div className="row">
        <div className="col-12">
          <div className="certificate-carousel">
            {certificates.map((certificate)=>(

              <div className="col-md-4 card bg-inherit rounded-[55px] border-2 border-color1 mx-2">
                <div className="card-body">
                  <img src={certificate.img} alt="" className='bg-cover'/>
                </div>
                <div className="card-footer text-center">
                  <p>{certificate.name}</p>
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
  $('.certificate-carousel').slick({
    dots:true,
    centerMode:true,
    slidesToShow:3,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
})

export default Section5