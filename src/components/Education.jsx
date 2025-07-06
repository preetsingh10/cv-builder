function Education(){
    return (
        <form className="education-form" action="">
            <label htmlFor="school-name">School Name</label>
            <input type="text" name="school-name" id="school-name" />
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" />
            <label htmlFor="title-of-study">Title of Study</label>
            <input type="text" name="title" id="title-of-study" />
        </form>
    )
}
export default Education