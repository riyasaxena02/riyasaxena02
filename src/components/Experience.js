import React from 'react';
import pic1 from '../img/tcs.jpg';
import pic3 from '../img/ieo.jpg';

const Experience = () => {
	return (
		<section className="experience" id="experience">
			<div className="max-width">
				<h2 className="title">Work Experience</h2>
				<div className="experience-content">
					<div className="column left">
						<img src={pic1} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							TATA Consultancy Services <br />
							<span>(Data Analyst Lead | Systems Engineer)</span>
							<br />
							<h4>New Delhi | August 2021 - present</h4>
						</div>
						<ul>
							<li>Worked as a Data Analyst Lead with 4 people in my team</li>
							<li>Used SQL and Qlik, familiar with BI tools</li>
							<li>Working on PSP V2, Ministry of External Affairs, GoI</li>
							<li>Worked as a Software Developer (Java, Groovy)</li>
							<li>Collaborated with On-Shore as well as Off-Shore colleagues</li>
							<li>Experience of working with an Agile Team of 18 Members</li>
							<li>Delivered multiple stories tracked by Jira</li>
							<li>Tested software for bugs, fixed them along with documentation to increase clarity</li>
						</ul>
						<a href="https://www.tcs.com/" target="_blank">
							Visit Company
						</a>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="experience-content">
					<div className="column left">
						<img src={pic3} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Innovatecraft (IEO MAKERS FABLAB PVT. LTD.) <br />
							<span>(Front End Web Development Intern)</span>
							<br />
							<h4>Remote | April 2020 - September 2020</h4>
						</div>
						<ul>
							<li>Worked as a Front End Web Developer (HTML, CSS, JS)</li>
							<li>
								Dedicated 100 Hours Learning based upon Web Development (HTML, CSS, JS, Express,
								Node.js, MongoDB)
							</li>
							<li>Implemented my skills on a project while collaborating in a team.</li>
							<li>
								Took the permission of Product Owner and continued to work and add features to the
								website even after the internship was over
							</li>
						</ul>
						<a href="http://innovatecraft.com/" target="_blank">
							Visit Company
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
