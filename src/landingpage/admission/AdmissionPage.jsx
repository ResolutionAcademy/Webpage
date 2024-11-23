import React from 'react'

export default function AdmissionPage() {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-blue-950">Admission Journey</h1>
            <div className="text-sm text-gray-600">
              Resolution Academy Senior Secondary School {'>'} Admissions {'>'} Admission Journey
            </div>
          </div>
  
          {/* Introduction */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <p className="text-gray-700">
              We are delighted you are considering Resolution Academy Senior Secondary School for your child. We believe that every child has the potential to be a leader. Our admission process helps applicants and their parents become more familiar with Resolution Academy Senior Secondary School, our programmes and our educational philosophy. Admissions decisions consider a philosophical fit between home and school, an applicant's academic potential and availability. You begin by submitting a detailed Registration form. Then students will visit the school to experience life in class, or participate in an interview, and will complete our entrance assessment.
            </p>
          </div>
  
          {/* What we are looking for */}
          <section className="space-y-4">
            <h2 className="bg-blue-950 p-4 text-lg font-semibold text-white">What we are looking for</h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-gray-700">
              <p className="mb-4">
                At Resolution Academy Senior Secondary School, we believe that education must be the greatest adventure in a child's life while upholding certain values like thoughtful guidance, pursuit of excellence and respect that makes it 21st century citizens.
              </p>
              <p>
                We strive to help individuals who are equipped to apply their acquired skills and knowledge, as well as their personal characteristics, to lead productive lives and become ethical and global citizens.
              </p>
            </div>
          </section>
  
          {/* Registration Procedure */}
          <section className="space-y-4">
            <h2 className="bg-blue-950 p-4 text-lg font-semibold text-white">Procedure for Registration</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Completing the Registration is the first step of the admission process.</p>
              <p className="text-gray-700">The Registration Form can be filled in from here or can also be collected from the School Admission Office.</p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  ONLINE REGISTRATION
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  OFFLINE REGISTRATION
                </button>
              </div>
  
              <div className="space-y-2 text-gray-700">
                <p>A registration fee of Rs. 1000/- must be deposited online along with the form so that the same may be registered for the year and class for which admission is sought. The fee is neither refundable nor adjustable and it is valid only for the specified academic year only.</p>
                <p>A unique Registration Number is provided to each candidate upon successful registration.</p>
                <p>Instructions regarding the Aptitude Assessment are sent to all registered candidates.</p>
              </div>
            </div>
          </section>
  
          {/* School Placement Process */}
          <section className="space-y-4">
            <h2 className="bg-blue-950 p-4 text-lg font-semibold text-white">School Placement Process</h2>
            <p className="text-gray-700">
              School Placement Assessment is a process that focuses on holistic development and thus examines a child's behavior, life skills, attitudes to the cognitive success reflected in scholastic reports. The assessment is multi-dimensional, sequential and objective. It embraces the assessment from behavioral perspective and a close interaction with parents to help us understand the child's learning patterns, health profile and developmental and skill assessment.
            </p>
          </section>
  
          {/* Documents Required */}
          <section className="space-y-4">
            <h2 className="bg-blue-950 p-4 text-lg font-semibold text-white">Documents Required at the time of Admission</h2>
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>Attested photocopy of Birth Certificate issued by the municipal authorities, or by the head of a registered nursing home, or by the hospital where the child was delivered (with father-mother name and registration number).</li>
              <li>Parents must submit their residential proof and make their it current.</li>
              <li>Two passport size colored photographs of the parents.</li>
              <li>Transfer certificate from the school last attended (in Original).</li>
              <li>Photocopy of the statement of marks of the exam last attended.</li>
              <li>Photocopy of the statement of marks of the exam last attended.</li>
              <li>Medical fitness certificate (as per the school prescribed format) from a Registered Medical Practitioner</li>
            </ul>
            <p className="mt-4 text-sm italic text-gray-600">*All documents must be produced along with originals for verification</p>
          </section>
        </div>
      </div>
    )
  }
  
  