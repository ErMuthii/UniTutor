import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import axios from 'axios';
import NavBar from './NavBar';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/courses')
      .then(response => {
        console.log('Response Data:', response.data); // Log the response data
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  // Check if courses is an array before mapping
  if (!Array.isArray(courses)) {
    return <div>Error: Data is not an array</div>;
  }

  return (
    <>
    <NavBar />
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Course List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <Card key={course.id} className="shadow-lg">
            <CardHeader className="text-lg font-bold">{course.name}</CardHeader>
            <CardBody>{course.description}</CardBody>
            <CardFooter>
              <button className="btn btn-primary">Enroll</button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
};

export default CourseList;
