
import React from 'react';
import Slider from 'react-slick';
import { Card, CardBody, CardFooter } from '@nextui-org/react'; // Import NextUI components
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const testimonials = [
        {
          id: 1,
          name: 'Alice Brown',
          quote: 'This service is outstanding! It has completely transformed the way I manage my tasks. Highly recommended!',
          image: 'https://media.gettyimages.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?s=612x612&w=0&k=20&c=OtFYs_rdWIm6JJZxAanK6f0pV-YMfMr1IXUAHUCRfss=', 
        },
        {
          id: 2,
          name: 'Bob Green',
          quote: 'The team is incredibly professional and the service exceeded my expectations. I will definitely be a returning customer.',
          image: 'https://media.gettyimages.com/id/1304581885/photo/portrait-of-young-woman-smiling.jpg?s=612x612&w=0&k=20&c=szq9mHVYt-iWL6TebJ6BfxSX8e9WR1HqF-PbR5oma4Y=', 
        },
        {
          id: 3,
          name: 'Charlie Davis',
          quote: 'I have never experienced such seamless service before. Everything was handled with utmost care and efficiency.',
          image: 'https://media.gettyimages.com/id/1437047112/photo/volunteer-friends-gardening-at-sunset-taking-a-selfie.jpg?s=612x612&w=0&k=20&c=0Qp1W9TjUH_iVgGJOoyELBDIzmrwtIbe22x8xdBwV9M=', 
        },
        {
          id: 4,
          name: 'Diana Evans',
          quote: 'The quality of work is top-notch. I am very satisfied with the results and would recommend this service to everyone.',
          image: 'https://media.gettyimages.com/id/1283069710/photo/senior-black-business-owner.jpg?s=612x612&w=0&k=20&c=YC-RRp4cIJPWU_COaLZc_7xuJZMevDHVtRXRzdISBTo=', 
        },
        {
          id: 5,
          name: 'Evan Foster',
          quote: 'Excellent service and support! The team was very responsive and helpful throughout the entire process.',
          image: 'https://media.gettyimages.com/id/1179796267/photo/businesswoman-testimonial-portrait.jpg?s=612x612&w=0&k=20&c=4fnd-YvWXmOacc6tzHIMglkRAm7Fi_fH_m5IRLPVts4=', 
        },
        {
          id: 6,
          name: 'Fiona Harris',
          quote: 'A fantastic experience from start to finish. The attention to detail and customer care were second to none.',
          image: 'https://media.gettyimages.com/id/1486149488/photo/portrait-of-a-senior-man-on-a-workout-in-the-public-park.jpg?s=612x612&w=0&k=20&c=Qclo5u-0ct5vgc-WHOaETNdwXQx8M8LzVMv7fRvufkg=', 
        },
        {
          id: 7,
          name: 'George Isaac',
          quote: 'I am thrilled with the service provided. It was quick, efficient, and exceeded all my expectations.',
          image: 'https://media.gettyimages.com/id/1146962927/photo/senior-caucasian-man-portrait.jpg?s=612x612&w=0&k=20&c=P27qy_lRNOK9xkJ9GhkM6SbxfBIWzGbZaRzF9hi8ns4=', 
        },
        {
          id: 8,
          name: 'Hannah Johnson',
          quote: 'The best service I have ever used! The team was professional and the outcome was perfect. Thank you!',
          image: 'https://media.gettyimages.com/id/1363699125/photo/young-entrepreneur-in-his-office.jpg?s=612x612&w=0&k=20&c=gwVQsutTpSS4zI6ORevcFK1d6b6-FIMhhqEpoJcrZsI=', 
        },
        {
          id: 9,
          name: 'Ian Kelly',
          quote: 'I am very impressed with the level of service and support. The team went above and beyond to ensure my satisfaction.',
          image: 'https://media.gettyimages.com/id/1057971452/photo/office-worker-portrait.jpg?s=612x612&w=0&k=20&c=BHi4lBwkIfubWLoQ07NvawehEn0HcUk0tjaMZXOTxkY=', 
        },
        {
          id: 10,
          name: 'Julia Lewis',
          quote: 'A truly exceptional service! The team was friendly, knowledgeable, and delivered outstanding results.',
          image: 'https://media.gettyimages.com/id/1145046435/photo/portrait-of-a-happy-mature-black-man.jpg?s=612x612&w=0&k=20&c=YjV_4TQ3r0gqOBG3VOO8BU4sp6Gf11tjUB360QyZtzk=', 
        }
      ];
      

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <Card shadow className="h-full">
                <CardBody className="flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-25 h-25 rounded-2xl mb-4"
                  />
                  <p className="text-lg text-center">{testimonial.quote}</p>
                </CardBody>
                <CardFooter className="text-center">
                  <p className="text-gray-600">- {testimonial.name}</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;

