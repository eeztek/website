import React from 'react'
// import heroImg from '../assets/images/heroImage.jpg'
import hero2 from '../assets/images/hero-2.jpg'
import SVGComponent from './SVGComponent'

const Hero = () => {
  return (
    <div className="relative w-full bg-slate-700 lg:h-[83vh]"
    style={{ 
        backgroundImage: `url("https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/banner_h_3_bg.png")` 
      }}
    >
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="heading-style mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
            Web Development Services
          </h1>
          <p className='text-white mt-5'>We design and build industry-leading web-based products that bring value to your customers, delivered with compelling UX.</p>
            <div action="" className="mt-8 flex items-start space-x-2">
              <div className='d-flex'>
                <a href="#contact">
                <button
                  type="button"
                  className="primary-btn d-flex"
                >
                  Let's work together
                  <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" fill='#ffffff' viewBox="0 0 24 24" width="24" height="24"><path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path></svg>
                </button>
                </a>
              </div>
            </div>
        </div>
        <div style={{backgroundImage: `url('https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/banner_h_4_red_shape.png')`, width:'115%'}} className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
           <SVGComponent/>
        </div>
      </div>
    </div>
  )
}

export default Hero;

