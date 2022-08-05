import React from 'react';

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<div className="max-width">
				<h2 className="title">Contact me</h2>
				<div className="contact-content">
					<div className="column left">
						<div className="text">Get in Touch</div>
						<p>Feel free to contact me for any queries.</p>
						<div className="icons">
							<div className="row">
								<i className="fas fa-user" />
								<div className="info">
									<div className="head">Name</div>
									<div className="sub-title">Riya Saxena</div>
								</div>
							</div>
							<div className="row">
								<i className="fas fa-map-marker-alt" />
								<div className="info">
									<div className="head">Address</div>
									<div className="sub-title">Kanpur, Uttar Pradesh</div>
								</div>
							</div>
							<div className="row">
								<i className="fas fa-envelope" />
								<div className="info">
									<div className="head">Email</div>
									<div className="sub-title">riyasaxena0201@gmail.com</div>
								</div>
							</div>
						</div>
					</div>
					<div className="column right">
						<div className="text">
							<q>
								Showcasing your talent through working projects is far better than adding just another
								certification in your resume.
							</q>
							<br />
						</div>
						<cite>-Riya Saxena</cite>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
