function Resume(prop) {
	return (
		<div className="resume-container">
			<div className="heading">
				<h1>{prop.heading.firstName + ' ' + prop.heading.lastName}</h1>
				<div className="contact-section">
					<div className="phoneNumber">
						<h5>Phone:</h5>
						<p >{prop.heading.phoneNumber}</p>
					</div>
					<div className="email">
						<h5>Email:</h5>
						<p>{prop.heading.email}</p></div>
				</div>
			</div>
			<div className="aboutme-section">
				<h3>About Me</h3>
			<hr />
			<p>{prop.heading.aboutMe}</p>
			</div>
		</div>
	)
}
export default Resume
