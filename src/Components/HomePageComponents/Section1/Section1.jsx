import React from 'react'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <div className='h-screen mb-72 md:mb-0'>
      <div className="row">
        {/* portfolio description */}
        <div className="col-sm-12 col-md-7 flex flex-col justify-center space-y-4 pt-8 md:pt-0">
          <h1 className='text-4xl'>Hi ! I'm Ravindu Dharmadasa</h1>
          <h1 className='text-4xl'>Full Stack Developer</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum excepturi natus quisquam fuga dolor est dolores quo vitae temporibus, animi similique magnam aut deserunt, impedit nostrum? Suscipit facilis deleniti modi?</p>
            <button class="relative px-6 py-2 group w-fit">
                <span class="absolute inset-0  h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-color1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-color1 border-2 border-color2 group-hover:bg-color1"></span>
                <span class="relative text-color2 group-hover:text-color2"> Download CV</span>
            </button>
        </div>

        {/* Portfolio image */}
        <div className="min-h-screen col-sm-12 col-md-5 flex flex-col justify-center items-center mt-10">
            {/* image */}
            <div className="flex max-w-sm photo-div border-2 border-color1 relative">
              <div className="photo-div-2  translate-x-4 translate-y-[-30px] border-2 border-color1">
                <img src="/images/rsd.png" alt=""  className=''/>
              </div>
            </div>
            {/* social media icons */}
            <div className=" w-[60%] social-div flex justify-around px-4 py-2">
              <Link>
                <img src="/icons/fb.png" alt="" />
              </Link>
              <Link>
                <img src="/icons/linkedIn.png" alt="" />
              </Link>
              <Link>
                <img src="/icons/github.png" alt="" />
              </Link>
              <Link>
                <img src="/icons/twitter.png" alt="" />
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section1