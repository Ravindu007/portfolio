import React from 'react'

const Section7 = () => {
  return (
    <div className='container pt-10 flex justify-center'>

      {/* Section Header */}
      <div className="row">
        <div className="col-12 text-center">
          <h1>Lets get Connected</h1>
        </div>


       <div className="col-12">
         {/* Form */}
         <form action="" className=''>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className='form-control bg-inherit border-color1'/>
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className='form-control bg-inherit border-color1'/>
          </div>
          <div className="form-group flex flex-col">
            <label>Message</label>
            <textarea name="" id="" cols="30" rows="10"  className='form-control bg-inherit border-color1'></textarea>
          </div>
          <div className="button-div flex justify-end">
            <button class="relative px-6 py-2 group w-fit">
                  <span class="absolute inset-0  h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-color1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full bg-color1 border-2 border-color2 group-hover:bg-color1"></span>
                  <span class="relative text-color2 group-hover:text-color2">Connect</span>
              </button>
          </div>
        </form>
       </div>

      </div>
    </div>
  )
}

export default Section7