import { useEffect, useState } from 'react';
import bannerImage from '../../assets/Banner-Image/Banner.png';
const Banner = () => {
  const phrases = ['Transforming Businesses', 'Driving Innovation', 'Delivering Results'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);
    
    return () => {
      clearInterval(interval);
    };
  }, [phrases.length]);

  return (
    <div className='mb-0'>
        <div className=" bg-slate-800 text-white relative">
      <div className="container mx-auto pt-6">
        <div className="flex items-center justify-center pl-8">
       <div className= "absolute left-10">
       <p className=" font-bold mb-4 text-3xl">Hi, I’m Lutfar Rahman</p>
        <p className="text-3xl font-bold mb-4  font-sans font-extrabold text-pink-800">{phrases[currentPhraseIndex]}</p>
        <p className='text-3xl  font-sans font-extrabold'>based in BD.</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Order Now
        </button>
       </div>
          <img
            className="w-full"
            src={bannerImage}
            alt="Banner Image"
          />
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
