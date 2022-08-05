import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../img/kaarigar.png';
import pic2 from '../img/osi.png';
import pic3 from '../img/alberghi.png';

const Projects = () => {
	return (
		<section className="projects" id="projects">
			<div className="max-width">
				<h2 className="title">My Projects</h2>
				<div className="project-content">
					<div className="card">
						<div className="box">
							<img src={pic1} alt="SaaS" />
							<div className="text">Kaarigar</div>
							<p>
							A Website to give opportunity of becoming entrepreneurs to the poor artisans and craftsmen who do not have a platform to showcase their talents.
							</p>
							<div className="projectLinks">
							<div className="link1">
									<a href="https://kaarigar.herokuapp.com/" target="_blank">
										Visit Project
									</a>
								</div>
								<div className="link2">
									{/* <Link to="/project/kaarigar">Know More</Link> */}
									<Link>Know More</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<img src={pic2} alt="" />
							<div className="text">OSI Farming</div>
							<p>
								It is a HTML, CSS, JS, NodeJS based website that rents out farm equipment to poor farmers who can't afford to buy their
								own.
							</p>
							<div className="projectLinks">
								<div className="link1">
									<a href="https://osi-farming.herokuapp.com/" target="_blank">
										Visit Project
									</a>
								</div>
								<div className="link2">
									<Link to="/project/osi-farming">Know More</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<img src={pic3} alt="" />
							<div className="text">Alberghi</div>
							<p>
							It was a website to book hotel rooms for various destinations in various price brackets. It has basic features like sign up and login.
							</p>
							<div className="projectLinks">
								<div className="link1">
									<a href="https://kaarigar.herokuapp.com/" target="_blank">
										Visit Project
									</a>
								</div>
								<div className="link2">
									{/* <Link to="/project/alberghi">Know More</Link> */}
									<Link>Know More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
