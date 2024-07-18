import React from 'react';
import Hero from './Hero';
import { Card, CardBody, CardFooter, Image, Divider } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import HomeFAQ from './HomeFAQ';
import Reviews from './Reviews';

const Home = () => {
  const navigate = useNavigate();
  const data = [
    {
      title: 'Math 101',
      description: 'Basic algebra and geometry coursework.',
      img: 'src/assets/math.jpg',
      path: '/courses/math101'
    },
    {
      title: 'Physics 201',
      description: 'Mechanics and thermodynamics coursework.',
      img: 'src/assets/physics.jpg',
      path: '/courses/physics201'
    },
    {
      title: 'Chemistry 301',
      description: 'Organic and inorganic chemistry coursework.',
      img: 'src/assets/chemistry.jpg',
      path: '/courses/chemistry301'
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Hero />
      <Divider className='my-2' />
      <h1 className='text-[#1177A9] text-center font-bold p-4 text-3xl'>Our Courses</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {data.map((item, index) => (
          <Card
            shadow='dark-2xl'
            key={index}
            className='max-w-[400px]'
            isPressable
            onPress={() => handleCardClick(item.path)}
            isHoverable
          >
            <CardBody className='overflow-visible p-0'>
              <Image
                shadow='md'
                radius='lg'
                width='100%'
                alt={item.title}
                className='h-[200px] w-full object-cover'
                src={item.img}
              />
            </CardBody>
            <CardFooter className='text-center text-medium justify-between' style={{ flexDirection: 'column' }}>
              <b className='text-center'>{item.title}</b>
              <p className='text-sm'>{item.description}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Divider className='my-4' />
      <HomeFAQ />
      <Divider className='mt-6' />
      <Reviews />
    </>
  );
};

export default Home;
