function Resume({ heading, education, experience, skills }) {
	function closePreview() {
		const previewElement = document.getElementById("resumeDialog");
		previewElement.close();
	}

	return (
		<>
			<div className="resume">
				<main className="resume__container">
					<div className="resume__topBar">
						<button onClick={closePreview} className="resume__closeBtn" aria-label="Close Preview">
							<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000ff">
								<path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
							</svg>
						</button>
					</div>
					<section className="resume__header">
						<h1 className="resume__name">
							{heading.firstName} {heading.lastName}
						</h1>
						<div className="resume__contact">
							<div className="resume__contactItem">
								<strong>Phone:</strong> <span>{heading.phoneNumber}</span>
							</div>
							<div className="resume__contactItem">
								<strong>Email:</strong> <span>{heading.email}</span>
							</div>
						</div>
					</section>

					{heading.aboutMe && (
						<section className="resume__about">
							<h2>About Me</h2>
							<hr />
							<p>{heading.aboutMe}</p>
						</section>
					)}

					{education.length > 0 && (
						<section className="resume__education">
							<h2>Education</h2>
							<hr />
							{education.map((data) => (
								<article className="resume__educationItem" key={data.id}>
									<h3>{data.titleOfStudy}</h3>
									<p>{data.schoolName}</p>
									<p>{data.location}</p>
								</article>
							))}
						</section>
					)}

					{experience.length > 0 && (
						<section className="resume__experience">
							<h2>Experience</h2>
							<hr />
							{experience.map((data) => (
								<article className="resume__experienceItem" key={data.id}>
									<h3>{data.jobRole}</h3>
									<p>{data.employer}</p>
									<p>{data.location}</p>
									<p>
										{data.startingDate} – {data.endDate}
									</p>
									<p>{data.description}</p>
								</article>
							))}
						</section>
					)}

					{skills.length > 0 && (
						<section className="resume__skills">
							<h2>Skills</h2>
							<ul className="resume__skillsList">
								{skills.map((skill) => (
									<li className="resume__skill" key={skill.id}>
										{skill.title}
									</li>
								))}
							</ul>
						</section>
					)}
				</main>
			</div>
		</>
	);
}

export default Resume;