function Experience() {
    return (
        <>
            <h2>Experience</h2>
            <form className="experience-form" action="">
                <label htmlFor="job-role">Job Role</label>
                <input type="text" name="job-role" id="job-role" />
                <label htmlFor="employer">Employer</label>
                <input type="text" name="employer" id="employer" />
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" />
                <label htmlFor="starting-date">Starting Date</label>
                <input type="date" name="starting-date" id="starting-date" />
                <label htmlFor="end-date">End Date</label>
                <input type="date" name="end-date" id="end-date" />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"></textarea>
            </form>
        </>
    )
}

export default Experience