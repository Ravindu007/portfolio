import React from 'react'

const Section2 = () => {
  return (
    <div className='mt-52 md:mt-0'>
      {/* Section heading */}
      <div className="row">
        <div className="col-12 text-center">
          <h1>About Me</h1>
        </div>
      </div>


      {/* Section Body */}
      <div className="row">

        {/* Education Qualiifcations */}
        <div className="col-sm-12 col-md-5 space-y-6">
          <h1>Education Qualifications</h1>

            {/* Higher Education */}
            <div className="card bg-inherit border-2 border-color1 px-2 py-4">
              <p>2020 - 2024</p>
              <p>Higher Education: Sabaragamuwa University Of Sri lanka</p>
              <p>BSc (Hons) in Computing & Information Systems</p>
              <p>Current GPA: <span>3.84</span></p>
            </div>

              {/* Secondary Education */}
              <div className="card bg-inherit border-2 border-color1 px-2 py-4">
                <p>2009 - 2017</p>
                <p>Secondary Education: Ananda College Colombo 10</p>
                <p>G.C.E.(O/L) 2014: 9A's</p>
                <p>G.C.E.(A/L) 2018: <br />
                  <ul className='pl-4'>
                    <li>Combine Maths: B</li>
                    <li>Physics: C</li>
                    <li>Chemistry: C</li>
                  </ul>
                </p>
              </div>

        </div>


        {/* Click Me button */}
        <div className="col-sm-12 col-md-2 flex flex-col justify-center items-center space-y-4">
            {/* image */}
            <div className="img-div border-2 rounded-full border-color1 z-50 flex py-1">
              <img src="/images/rsd.png" alt="" />
            </div>


            {/* button */}
            <button class="relative px-6 py-2 group w-fit">
                <span class="absolute inset-0  h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-color1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-color1 border-2 border-color2 group-hover:bg-color1"></span>
                <span class="relative text-color2 group-hover:text-color2">Explore</span>
            </button>
        </div>

        {/* Volunteering Experience */}
        <div className="col-sm-12 col-md-5 space-y-6">
          <h1>Volunteering Experience</h1>

          {/* IEEE */}
            <div className="card bg-inherit border-2 border-color1 px-2 py-4 space-y-8">
              <div className="chair">
                <p>2023 - Present</p>
                <p>Chaierperson IEEE Student Branch SUSL</p>
              </div>

              <div className="member">
                <p>2022 - Present</p>
                <p>Active Member IEEE Student Branch SUSL</p>
              </div>
            </div>

            {/* Stemup */}
            <div className="card bg-inherit border-2 border-color1 px-2 py-4 space-y-8">
              <div className="stemup">
                <p>2023 - Present</p>
                <p>Active Member - STEMUp Educational Foundation</p>
              </div>
            </div>

             {/* Stemup */}
             <div className="card bg-inherit border-2 border-color1 px-2 py-4 space-y-8">
              <div className="aisec">
                <p>2020 - 2022</p>
                <p>Active Member - AISEC in Sabaragamuwa</p>
              </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Section2