import React from 'react'

function AptituteTestPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">RESOLUTION ACADEMY SENIOR SECONDARY SCHOOL</h1>
        <h2 className="text-xl mb-2">RESOLUTION ADMISSION TEST - 2025</h2>
        <h3 className="text-lg mb-2">GRADE I</h3>
        <h4 className="text-lg font-bold">SYLLABUS</h4>
      </header>

      <p className="text-gray-700 mb-6">
        The Resolution Admission Test (RAT) shall assess a student's literary, numeracy and general awareness skills.
      </p>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-200 pb-2 mb-4">
          LITERACY SKILLS
        </h2>
        <p className="text-gray-700 mb-4">
          The test does not aim at checking rigid rules of grammar, but at evaluating the student's
          command over the language, his fluency of expression, vocabulary, originality of
          thoughts and ideas.
        </p>
        <p className="mb-2">The student should be able to do the following :</p>
        <ol className="list-decimal pl-8 text-gray-700">
          <li className="mb-1">Recognition and writing of both Uppercase and Lowercase Aa -Zz</li>
          <li className="mb-1">Simple sight words</li>
          <li className="mb-1">Phonics - letter words</li>
          <li className="mb-1">Form simple words and sentences</li>
          <li className="mb-1">Rhymes</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-200 pb-2 mb-4">
          NUMERACY SKILLS
        </h2>
        <p className="mb-2">The student should be able to do the following :</p>
        <ol className="list-decimal pl-8 text-gray-700">
          <li className="mb-1">Recognize and backward counting</li>
          <li className="mb-1">Simple addition</li>
          <li className="mb-1">Simple shapes recognition</li>
          <li className="mb-1">Forward and backward counting</li>
          <li className="mb-1">Sequencing</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-bold border-b-2 border-gray-200 pb-2 mb-4">
          GENERAL AWARENESS
        </h2>
        <p className="text-gray-700">Know your country and state</p>
      </section>
    </div>
  )
}

export default AptituteTestPage
