import React from 'react';
import pic from '../img/profile-1.jfif';
import resume from '../files/RiyaResume2022.pdf';

const About = () => {
	return (
		<section className="about" id="about">
			<div className="max-width">
				<h2 className="title">About me</h2>
				<div className="about-content">
					<div className="column left">
						<img src={pic} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							I'm Riya and I'm a <span>Learner</span>
						</div>
						<p>
							I am a hard-working and dedicated person. I have always been passionate about programming.<br />
							I am a curious person and a keen observer who is always ready to learn new skills. Coding
							and programming for development is something I love and do with full passion.
						</p>
						<a href={resume} target="_blank">
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
