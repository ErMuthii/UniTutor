import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

const HomeFAQ = () => {
  return (
    <>
      <h1 className='text-[#1177A9] text-center font-bold p-2 text-3xl'>Not sure if TutorApp is right for you?</h1>
      <h2 className='text-[#191919] text-center font-bold p-2 text-2xl'>Frequently Asked Questions</h2>
      <div className='flex justify-center items-center'>
        <Accordion variant='shadow' className='max-w-[800px] w-full'>
          <AccordionItem
            key='1'
            aria-label='Accordion 1'
            title='1. How do I join TutorApp as a tutor?'
          >
            <p>
              Joining TutorApp as a tutor is simple. Navigate to our registration page, fill out your profile with relevant details, including your qualifications and areas of expertise, and submit your application. Our team will review it and get back to you.
            </p>
          </AccordionItem>
          <AccordionItem
            key='2'
            aria-label='Accordion 2'
            title='2. How can I find a tutor on TutorApp?'
          >
            <p>
              TutorApp offers a detailed search and filter system. You can browse tutors by subject, read reviews from other students, and view their qualifications. Contacting tutors is straightforward through our messaging system.
            </p>
          </AccordionItem>
          <AccordionItem
            key='3'
            aria-label='Accordion 3'
            title='3. What are the benefits of using TutorApp?'
          >
            <p>
              Using TutorApp provides you with access to a network of experienced and qualified tutors. You can compare tutors based on their expertise and reviews, schedule sessions, and receive personalized assistance in your studies.
            </p>
          </AccordionItem>
          <AccordionItem
            key='4'
            aria-label='Accordion 4'
            title='4. Is there a fee for using TutorApp?'
          >
            <p>
              TutorApp is free for students to browse and connect with tutors. Tutors may have fees associated with their sessions, which will be clearly listed on their profiles. You can review and choose based on your budget and needs.
            </p>
          </AccordionItem>
          <AccordionItem
            key='5'
            aria-label='Accordion 5'
            title='5. How can I contact TutorApp for support?'
          >
            <p>
              For any questions or support, you can reach out to our team via email at support@tutorapp.com or visit our contact page. We are here to assist you with any inquiries or issues you may encounter.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default HomeFAQ;
