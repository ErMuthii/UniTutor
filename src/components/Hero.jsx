import React from 'react';
import {ReactTyped} from 'react-typed';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();  
  return (
    <div className='bg-gray-100'>
      <div className='max-w-[800px] mt-[-120px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#087EB8] font-bold p-2'>ENHANCE YOUR LEARNING EXPERIENCE</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Empowering Students for Success</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl font-bold mr-2'>Revise and Learn with</p>
          <span className='text-[#087EB8] font-semibold md:text-4xl sm:text-4xl text-xl'>
            <ReactTyped
              strings={['Math 101', 'Physics 201', 'Chemistry 301']}
              typeSpeed={120}
              backSpeed={120}
              loop
            />
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-[-180px] mb-12 space-x-8">
        <Button variant='ghost' size="lg" color="primary" onClick={() => navigate('/courses')}>Explore Courses</Button>
        <Button variant='ghost' size='lg' onClick={() => navigate('/contact')}>Contact a Lecturer</Button>
      </div>
    </div>
  );
}

export default Hero;
