import React from 'react'

function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-xl font-medium text-gray-600 mb-2">Guiding Principles</h1>
        <img
          src="aboutUs/img1.png"
          alt="Students of Resolution Academy"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Vision Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <p className="text-gray-700">
              Resolution Academy Senior Secondary School aspires to become a premier institution 
              that is deeply rooted in Indian ethics. We aim to equip the future generation 
              of learners with a repertoire of skills and a sensitized perspective to 
              understand and appreciate diversity, enabling them to develop solutions to 
              meet the challenges of a dynamic environment and society.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="aboutUs/img2.png"
              alt="Faculty members"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src="aboutUs/img3.png"
              alt="School event"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              Resolution Academy Senior Secondary School works at providing 
              a broad based education to develop its learners to be:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Balanced in Mind, Body and Heart</li>
              <li>Open - Minded Inquirers And Effective Communicators</li>
              <li>Able to acknowledge and accept diversity and appreciate differences</li>
              <li>Responsible for Human Rights, Sustainable Development</li>
              <li>Global Well Being thereby reflecting a true global citizen</li>
              <li>Prepared to face challenges with confidence and optimism</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Core Values</h2>
        <p className="text-center text-blue-600 mb-6">
          To foster a community built on positive relationships among all the stakeholders of the larger society
        </p>
        <div className="flex justify-center mb-8">
          <img
            src="aboutUs/img4.png"
            alt="Core Values Diagram"
            className="w-full max-w-md h-15"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Empathy",
              desc: "To enable awareness and acknowledgment of one's own and other beings"
            },
            {
              title: "Equity",
              desc: "To envision fair and justified distribution and service to learners"
            },
            {
              title: "Enterprise",
              desc: "To encourage learning, lateral thinking and creative problem solving"
            },
            {
              title: "Integrity",
              desc: "To instill the right understanding of righteousness and justice"
            },
            {
              title: "Nurturing Relationships",
              desc: "To build human connection and collective synergy"
            },
            {
              title: "Inclusivity",
              desc: "To be a global citizen and respect global practices"
            }
          ].map((value, index) => (
            <div key={index} className="p-4 bg-blue-50 rounded-lg hover:scale-10 transition-transform duration-300 shadow-md">
              <h3 className="font-bold text-blue-800 mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    
  )
}

export default AboutUsPage
