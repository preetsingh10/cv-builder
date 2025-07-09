function Resume({heading, education}) {
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
				{education.map((data,index)=>{
					return (
						<div className="educationData" key={index}>
							<h3>{data.schoolName}</h3>
							<h3>{data.location}</h3>
							<h3>{data.titleOfStudy}</h3>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default Resume
