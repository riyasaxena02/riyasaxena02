import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../img/kiet.jpg';
import pic2 from '../img/dps.jpeg';

const Education = () => {
	return (
		<section className="education" id="education">
			<div className="max-width">
				<h2 className="title">Education</h2>
				<div className="education-content">
					<div className="column left">
						<img src={pic1} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Bachelor of Technology <span>(CSE)</span>
						</div>
						<p>
							I have completed my Bachelors of Technology in Computer Science and Engineering branch from
							KIET Group of Institutions, Ghaziabad affiliated to Dr. APJ Abdul Kalam Technical University
							in August 2021.
						</p>
						<br />
						<p>
							I have acquired various skills like Competitive Coding , Full Stack Web Development and many
							more throughout the 4 years of Learning.
						</p>
						<br />
						<div className="subtext">
							CGPA : <span>(8.31)</span> | Division Awarded :<span>(I-DIV HONS)</span>
						</div>
						<a href="https://www.kiet.edu/" target="_blank">
							Visit College
						</a>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="education-content">
					<div className="column right">
						<div className="text">
							Higher Secondary School{' '}
							<span>
								(12<sup>th</sup> Class)
							</span>
						</div>
						<p>
							I have completed my Higher Secondary School with English, Physics, Chemistry, Mathematics,
							Physical Education and Psychology as my subjects from Delhi Public School, Kalyanpur Kanpur
							affiliated to the Central Board of Secondary Education in May 2017.
						</p>
						<br />
						<p>
							Throughout my years of learning, I have mastered a variety of abilities such as Soft Skills,
							Human Psychology and many more.
						</p>
						<br />
						<div className="subtext">
							Aggregate : <span>(86.20%)</span>
						</div>
						<a href="https://www.dpskalyanpur.com/" target="_blank">
							Visit School
						</a>
					</div>
					<div className="column left">
						<img src={pic2} alt="Profile Pic" className="image-right" />
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="education-content">
					<div className="column left">
						<img src={pic2} alt="Profile Pic" />
					</div>
					<div className="column right">
						<div className="text">
							Senior Secondary School{' '}
							<span>
								(10<sup>th</sup> Class)
							</span>
						</div>
						<p>
							In July 2015, I graduated from Delhi Public School, Kalyanpur, Kanpur, which is accredited
							with the Central Board of Secondary Education, with English, Mathematics, Science, Hindi,
							Social Studies, and Physical Education as my subjects.
						</p>
						<br />
						<p>
							Throughout my years of learning, I had made a strong base for a variety of abilities such as
							English communication, basic information technology, and many more.
						</p>
						<br />
						<div className="subtext">
							Aggregate : <span>(93.60%)</span> | CGPA : <span>(9.80)</span>
						</div>
						<a href="https://www.dpskalyanpur.com/" target="_blank">
							Visit School
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
