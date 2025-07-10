import { useState } from "react"

function Education({ education, setEducation }) {
    const [tempForm, setTempForm] = useState({})
    function addFormData() {
        const formIsEmpty = Object.values(tempForm).every(value => value === "")
        if (formIsEmpty) {
            return
        } else {
            setEducation([...education, { id: crypto.randomUUID(), ...tempForm }])
            setTempForm({})
        }

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
            <div className="education-form" >
                <label htmlFor="school-name">School Name</label>
                <input type="text" name="schoolName" id="school-name" value={tempForm.schoolName || ""} onChange={handleChange} />
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" value={tempForm.location || ""} onChange={handleChange} />
                <label htmlFor="titleOfStudy">Title of Study</label>
                <input type="text" name="titleOfStudy" id="titleOfStudy" value={tempForm.titleOfStudy || ""} onChange={handleChange} />
                <button type="button" onClick={addFormData}>Add</button>
            </div>

        </>

    )
}
export default Education