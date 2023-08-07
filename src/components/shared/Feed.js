import React, {useState} from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
import one from "../../images/one.jpg"
import two from "../../images/two.jpg"
import three from "../../images/three.jpg"
import four from "../../images/four.jpg"
import five from "../../images/five.jpg"

const Feed = () => {
    const slides = [
        {
            
            'url': one
        },
        {
            'url': two
        },
        {
            'url': three
        },
        {
            'url': four
        },
        {
            'url': five
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide=currentIndex === slides.length-1;
        const newIndex=isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    };


  return (
    <>
     


        <div className='flex justify-center items-center h-screen relative group'>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute left-0.5  text-2xl rounded-full m-2 p-2 z-10 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      
      {/* Image Container */}
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '30vw', // Adjust as needed
          height: '80vh', // Adjust as needed
          borderRadius: '20px',
        }}
        className='w-1/2 h-full rounded-2xl bg-center bg-cover duration-500 shadow-2xl shadow-black/40'
      ></div>

      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute right-0.5 text-2xl rounded-full p-2 m-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>








{/* <div className='flex justify-center items-center h-screen'>
      Left Arrow
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft size={30} />
      </div>
      
      Image Container
      <div
        style={{
          backgroundImage: `url(${slides[1].url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '30vw', // Adjust as needed
          height: '80vh', // Adjust as needed
          borderRadius: '20px',
        }}
        className='w-1/2 h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>

      Right Arrow
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight size={30} />
      </div>
    </div> */}

    {/* <div className='flex justify-center items-center h-screen'>
    Left Arrow
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft size={30} />
    </div>
    'absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        <div style={{backgroundImage: `url(${slides[1].url})` ,backgroundPosition: 'center',backgroundSize: 'cover',
          width: '30vw', // Adjust as needed
          height: '80vh', // Adjust as needed
          borderRadius: '20px', }} className='w-1/2 h-full rounded-2xl bg-center bg-cover duration-500 '></div>
    </div>

     
    Right Arrow
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight size={30} />
    </div>

     <div>Feed</div> */}
    </>
  )
}

export default Feed
