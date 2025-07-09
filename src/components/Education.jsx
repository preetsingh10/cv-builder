import { useState } from "react"

function Education({ education, setEducation }) {
    const [tempForm, setTempForm] = useState({})
    function addFormData() {
        setEducation([...education, { ...tempForm }])
        setTempForm({})
    }

    function handleChange(e) {
        const { name, value } = e.target
        setTempForm((tempForm) => ({
            ...tempForm,
            [name]: value
        }))
    }

    return (
        <>
            <h2>Education</h2>
            <form className="education-form" action="">
                <label htmlFor="school-name">School Name</label>
                <input type="text" name="schoolName" id="school-name" value={tempForm.schoolName || ""} onChange={handleChange} />
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" value={tempForm.location || ""} onChange={handleChange} />
                <label htmlFor="titleOfStudy">Title of Study</label>
                <input type="text" name="titleOfStudy" id="titleOfStudy" value={tempForm.titleOfStudy || ""} onChange={handleChange} />
                <button type="button" onClick={addFormData}>Add</button>
            </form></>

    )
}
export default Education