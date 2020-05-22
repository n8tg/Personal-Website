import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import avatar from '../assets/images/me2.jpeg';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h2 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h2>
          <div className="subheading mb-5">
            {config.address} · <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I’ve been working with Windows ever since I could get my hands on a computer.
          I started out in IT as just another kid with a home PC that was frequently broken
          in one way or another, usually by my own doing. 
          </p>
          <p className="lead mb-5">By the time I reached high school, through all my mistakes, I had a solid understanding of networking concepts and was
          running servers for a few different multiplayer games. My entry to Windows server
          administration and corporate infrastructure began with the Glenview Park District
          in 2013. From there, the rest is history. 
          </p>      
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
        <span className="d-none d-lg-block p-3">
            <img
              className="img-fluid img-profile mx-auto mb-2"
              src={avatar}
              alt=""
            />
        </span>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          {/*Job position - Prescient Solutions*/}
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">IT Consultant</h3>
              <div className="subheading mb-3">Prescient Solutions</div>
              <p>
              At Prescient, I'm part of a "Do it all" team that's embedded onsite with our client.

              Anything from server infrastructure, core networking, Active Directory, VDI, and application deployment,
              I'm behind it.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2017 - Present</span>
            </div>
          </div>

          {/*Job position - Blue Star Solutions*/}
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Tier 2 Support</h3>
              <div className="subheading mb-3">Blue Star Tec</div>
              <p>
              At Blue Star, I was a part of a 15 person MSP team. Serving on the second line of support, I learned how
              vital solid documentation, good note taking, and quality monitoring and alerting is to an organization.
              Being an MSP, I also gained invaluable experience with numerous business structures and environments.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2011 - March 2013</span>
            </div>
          </div>

          {/*Job position - Glenview Parks*/}
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Help Desk & Junior SysAdmin</h3>
              <div className="subheading mb-3">Glenview Park District</div>
              <p>
              My entry into the IT world. I started on the help desk, consisting of myself and another full time employee.
              I quickly moved into assisting with the park districts Terminal Servers, Active Directory administration, and assisting with the on premises Exchange environment.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Iowa</h3>
              <div className="subheading mb-3">Bachelor of Arts</div>
              <div>Geoinformatics - Minor in CS</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2012 - May 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Familiar Operating Systems &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-centos"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-linux"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-apple"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-windows"></i>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              1st in state - US Cyber Challenge - 2011 - Reliving the Highschool glory days.
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
