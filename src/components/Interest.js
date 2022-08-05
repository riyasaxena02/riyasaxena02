import React from 'react';

const Interests = () => {
	return (
		<section className="interests" id="interests">
			<div className="max-width">
				<h2 className="title">My interests</h2>
				<div className="interest-content">
					<div className="card">
						<div className="box">
							<i className="fas fa-paint-brush" />
							<div className="text">Web Designing</div>
							<p>
								I love designing websites and upgrading myself by learning new skills and implementing
								them
							</p>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<i className="fas fa-chart-line" />
							<div className="text">Learning new Things</div>
							<p>
								I believe in constantly updating myself by learning something new with practical
								Implementations
							</p>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<i class="fas fa-laptop-code" />
							<div className="text">Debugging</div>
							<p>
								I love to debug applications by using developer tools, It gives me thrill to find the
								issue as soon as possible
							</p>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<i class="fas fa-wifi" />
							<div className="text">Reading books</div>
							<p>I never get bored because of books. Every time I'm idle, I always have a new book to read to broaden my knowledge and enjoy knowing more about things.</p>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<i class="fas fa-car" />
							<div className="text">Space Exploration</div>
							<p>The latest space-related breakthroughs and discoveries have me incredibly intrigued. What this universe has to offer is incredibly fascinating.</p>
						</div>
					</div>
					<div className="card">
						<div className="box">
							<i class="fas fa-car" />
							<div className="text">Writing</div>
							<p>I love to write because it allows my mind to go to anyplace it wants to with no restrictions. It is a way to express myself in ways I may not otherwise be comfortable doing.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Interests;
