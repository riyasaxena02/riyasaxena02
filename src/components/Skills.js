import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
	return (
		<section className="skills" id="skills">
			<div className="max-width">
				<h2 className="title">My skills</h2>
				<div className="skills-content">
					<div className="column left">
						<div className="text">My Skills in Front End Development</div>
						<p>
							I have acquired knowledge of Front End Development by regularly educating myself on new and
							better ways of doing things.
							<br />
							I am continuously trying to learn something new and put it into practise through Projects.
						</p>
						<Link to="/skill">Technologies Known</Link>
					</div>
					<div className="column right">
						<div className="bars">
							<div className="info">
								<span>HTML</span>
								<span>85%</span>
							</div>
							<div className="line html" />
						</div>
						<div className="bars">
							<div className="info">
								<span>CSS</span>
								<span>85%</span>
							</div>
							<div className="line css" />
						</div>
						<div className="bars">
							<div className="info">
								<span>JavaScript</span>
								<span>70%</span>
							</div>
							<div className="line js" />
						</div>
					</div>
				</div>
				<br />
				<hr />
				<br />
				<div className="skills-content">
					<div className="column right">
						<div className="bars">
							<div className="info">
								<span>Express JS</span>
								<span>70%</span>
							</div>
							<div className="line express" />
						</div>
					<div className="bars">
							<div className="info">
								<span>Java</span>
								<span>75%</span>
							</div>
							<div className="line java" />
						</div>
						<div className="bars">
							<div className="info">
								<span>Python</span>
								<span>70%</span>
							</div>
							<div className="line python" />
						</div>
						<div className="bars">
							<div className="info">
								<span>MongoDB</span>
								<span>70%</span>
							</div>
							<div className="line mongo" />
						</div>
						<div className="bars">
							<div className="info">
								<span>MySQL</span>
								<span>75%</span>
							</div>
							<div className="line mysql" />
						</div>
					</div>
					<div className="column left">
						<div className="text">My Skills in Back End Development</div>
						<p>
							The inner workings of things fascinate me, which is why I'm interested in Back End
							Development.
							<br />
							I have developed various significant projects such as OSI Farming Equipment on Rent,
							Instagram Clone and many more to put my knowledge of back end development into practise.
						</p>
						<a href="https://www.linkedin.com/in/riya-saxena-11074917b/">Go to my LinkedIn</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
