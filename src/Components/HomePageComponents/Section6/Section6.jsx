import React, { useState } from 'react'

const Section6 = () => {

  const [photo1, setPhoto1] = useState("/gallery/g1.jpeg")


  return (
    <div className='container pt-10'>
      <div className="row">
        {/* Section Header */}
        <div className="col-12 text-center py-4">
          <h1>Gallery</h1>
        </div>
      </div>

      {/* Section Body */}
      <div className="row">

        {/* 1st row */}
        <div className="col-sm-12 col-md-3 flex flex-col space-y-3">

            {/* photo 1 */}
            <div 
              className="card col-12 rounded-[55px] min" style={{ minHeight:"300px", maxHeight:'300px', backgroundImage: `url(${photo1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              {/* Content inside the card */}
            </div>

            {/* photo 1 */}
            <div className="card col-12 rounded-[55px] min" style={{ minHeight:"300px", maxHeight:'300px', backgroundImage: `url(${photo1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              {/* Content inside the card */}
            </div>
        </div>

        {/* 2nd row */}
        <div className="hidden md:block col-md-6">
           {/* photo 1 */}
           <div className="card col-12 rounded-[55px] min" style={{ minHeight:"600px", backgroundImage: `url(${photo1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              {/* Content inside the card */}
            </div>
        </div>


        {/* 3rd row */}
        <div className="col-sm-12 col-md-3 space-y-3">
           {/* photo 1 */}
           <div className="card col-12 rounded-[55px] min" style={{ minHeight:"300px", maxHeight:'300px', backgroundImage: `url(${photo1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              {/* Content inside the card */}
            </div>

            {/* photo 1 */}
            <div className="card col-12 rounded-[55px] min" style={{ minHeight:"300px", maxHeight:'300px', backgroundImage: `url(${photo1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              {/* Content inside the card */}
            </div>
        </div>

      </div>
    </div>
  )
}

export default Section6