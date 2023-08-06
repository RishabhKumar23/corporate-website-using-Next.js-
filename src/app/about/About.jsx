import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-content">
          <h2>Best Engineering Services, Facility Management Services Company in Bangalore 2020</h2>
          <ul>
            <li>
              Rish Tech. is the best engineering service and facility management service company in Bangalore since 20 Years.
            </li>
            <li>
              Rish Tech. Facility Management Private Limited is engaged in the business of providing Integrated Facility Management Solutions and Services to Corporate houses and the community at large.
            </li>
            <li>
              It is in our DNA to offer premium fulfillment services to our clients by offering finger print solutions benchmarked against Global standards at costs compatible to business acceptance.
            </li>
            <li>
              Head Quartered in Bangalore, India, MFM has the capability and flexibility to execute projects and services in any part of the Country. With Integrated Asset Management expertise spanning Project Execution, Operation & Maintenance, Environment Management, Energy Management and Comprehensive Corporate Services, MFM is the vital link to business goals for our clients.
            </li>
            <li>
              Best electrical contractors in Bangalore

            </li>
          </ul>
        </div>
      </section>
      {/* success Story section */}
      <hr />
      <section className="image-section">
        <div className="image-content">
          <h2>Our success Story</h2>
          <Image
            src='/about.jpg'
            width={500}
            height={500}
            layout='responsive'
          />
        </div>
      </section>
      {/* project section */}
      <hr />
      <section className="project-section">
        <div className="project-box">
          <h2>Top Projects handled by Maverick Engineering and Facility Management Services Company in Bangalore</h2>
          <p>"Top Facility Management Services from Mfm"</p>
          <ul>
            <li>Our project vertical has vast experience in implementing turnkey LT & HT Installations projects namely,</li>
            <li>Licensed Electrical Contractor</li>
            <li>Engineering Services</li>
            <li>Facility Management</li>
            <li>General Maintenance Services</li>
            <li>Corporate Services</li>
            <li>Energy Management and Audit Services</li>
            <li>Consultancy Services</li>
            <li>Environmental Services</li>
          </ul>
        </div>
      </section>
      {/* why us */}
      <section className="why-us-section">
        <div className="why-us-content">
          <h2>Why Choose Us</h2>
          <ul>
            <li>SPOC For all Facility Needs.</li>
            <li>Constantly Innovating.</li>
            <li>Proponent of Modern Facility.</li>
            <li>Client Centric Approach.</li>
            <li>25 years of experience in interaction with Statutory Authorities.</li>
            <li>Management Practice and Strong Leadership support.</li>
          </ul>
        </div>
      </section>
    </>

  )
}

export default About