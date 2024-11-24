import React, { useState } from 'react'
import { useRef } from 'react';

const AdmissionFaqPage = () => {
    const faqs = [
      {
        question: "Are you co - educational set-up?",
        answer: "Yes, the school is a co - educational set-up with equal opportunities for boys and girls"
      },
      {
        question: "What are the school's timings?",
        answer: "A typical school day starts at 8.15 AM and ends at 2.45 PM"
      },
      {
        question: "Does the school have a uniform for students?",
        answer: "Yes, we have a uniform set for the students, both for Summers and Winters."
      },
      {
        question: "Where do your teachers come from?",
        answer: "Our diverse faculty comprises experienced teachers hailing from various parts of the country"
      },
      {
        question: "Does the school have boarding facilities?",
        answer: "Yes, the school has a boarding facilities for students from Class II to Class XII."
      }
    ];
    const toggle = []
    const [toggleAnswer, setToggleAnswer] = useState(toggle.map(() => true))
    
    const handleToggle = (index) => {
        setToggleAnswer((prev) =>
          prev.map((value, i) => (i === index ? !value : value))
        );
    };
    
  
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Admission FAQ</h1>
  
        <p className="text-gray-600 mb-8">
          Whether you've been investing your options for years or this is your first inquiry at our school, you likely have a lot of questions. We encourage you to explore this section for information about the RASSS and the admission process. After you've had a look around, if you still have questions we'll be happy to answer them.
        </p>
  
        <div className="bg-blue-500 text-white p-2 mb-8 text-center">
          Get to know Resolution Academy Senior Secondary School
        </div>
  
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <div className="flex items-center p-4 bg-gray-50 border-b">
                <button onClick={() => handleToggle(index)} className="w-6 h-6 flex items-center justify-center border rounded-full mr-3">
                    {toggleAnswer[index] ? <span className="text-gray-600">+</span> : <span className="text-gray-600">-</span>}
                </button>
                <h2 className="font-medium text-lg text-gray-800">{faq.question}</h2>
              </div>
              {!toggleAnswer[index] && <div className="p-4 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>}
            </div>
          ))}
        </div>
      </div>
    );
  };

export  default AdmissionFaqPage
