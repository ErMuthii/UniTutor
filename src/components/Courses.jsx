import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data';
import { Card, Image, CardBody, Button } from '@nextui-org/react';

const Courses = () => {
  const navigate = useNavigate();
  const categories = ['All', ...new Set(courses.map(course => course.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCourseClick = (id) => {
    navigate(`/courses/${id}`);
  };

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  const studyMessage = selectedCategory === 'All'
    ? 'Explore the best courses'
    : `Explore the best ${selectedCategory.toLowerCase()} courses`;

  const guidanceMessage = selectedCategory === 'All'
    ? ''
    : `Get guidance and resources for ${selectedCategory.toLowerCase()} today!`;

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Our Courses</h1>
      <div className='text-3xl text-blue-500 font-bold mt-4'>{studyMessage}</div>
      {guidanceMessage && <div className='text-lg mt-2'>{guidanceMessage}</div>}
      <div className='mt-4'>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='p-2 border rounded'
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {filteredCourses.map(course => (
          <Card
            key={course.id}
            shadow='dark-2xl'
            className='max-w-[400px] cursor-pointer'
            onClick={() => handleCourseClick(course.id)}
          >
            <Image
              shadow='md'
              radius='lg'
              width='100%'
              alt={course.name}
              src={course.img}
              className='h-[200px] w-full object-cover'
            />
            <CardBody className='text-center p-4'>
              <h3 className='mt-2 text-lg font-bold'>{course.name}</h3>
              <p>{course.description}</p>
              <Button className='mt-4' color='primary' onClick={() => handleCourseClick(course.id)}>
                View Details
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
