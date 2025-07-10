function Resume({ heading, education, experience }) {
	return (
		<div className="resume-container">
			<div className="heading">
				<h1>{heading.firstName + ' ' + heading.lastName}</h1>
				<div className="contact-section">
					<div className="phoneNumber">
						<h5>Phone:</h5>
						<p >{heading.phoneNumber}</p>
					</div>
					<div className="email">
						<h5>Email:</h5>
						<p>{heading.email}</p></div>
				</div>
			</div>
			<div className="aboutme-section">
				<h3>About Me</h3>
				<hr />
				<pre>{heading.aboutMe}</pre>
			</div>
			<div className="education-container">
				<h3>Education</h3>
				{education.length !== 0 && education.map(data => {
					return (
						<div className="educationData" key={data.id}>
							<h3>{data.titleOfStudy}</h3>
							<p>{data.schoolName}</p>
							<p>{data.location}</p>
						</div>
					)
				})}
			</div>
			<div className="experience-container">
				<h3>Experience</h3>
				{experience.map(data => {
					return (
						<div className="experienceData" key={data.id}>
							<h3>{data.jobRole}</h3>
							<p>{data.employer}</p>
							<p>{data.location}</p>
							<p>{data.startingDate}</p>
							<p>{data.endDate}</p>
							<p>{data.description}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default Resume
