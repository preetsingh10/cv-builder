import { useState } from "react"
import capitalize from "../utility/capitalize"

function Experience({ experience, setExperience }) {
    const [tempForm, setTempForm] = useState({})
    function handleChange(e) {
        const { name, value } = e.target
        setTempForm((tempForm) => ({
            ...tempForm,
            [name]: capitalize(value)
        }))
    }
    function addExperience() {
        const isFormEmpty = Object.values(tempForm).every(value => value === "")
        if (isFormEmpty) {
            return
        } else {
            setExperience((experience) => ([
                ...experience, { id: crypto.randomUUID(), ...tempForm }
            ]))
            setTempForm({})
        }
    }
    return (
        <>
            <h2>Experience</h2>
            <div className="experience-form" >
                <label htmlFor="jobRole">Job Role</label>
                <input type="text" name="jobRole" id="jobRole" value={tempForm.jobRole || ""} onChange={handleChange} />
                <label htmlFor="employer">Employer</label>
                <input type="text" name="employer" id="employer" value={tempForm.employer || ""} onChange={handleChange} />
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" value={tempForm.location || ""} onChange={handleChange} />
                <label htmlFor="startingDate">Starting Date</label>
                <input type="date" name="startingDate" id="startingDate" value={tempForm.startingDate || ""} onChange={handleChange} />
                <label htmlFor="endDate">End Date</label>
                <input type="date" name="endDate" id="endDate" value={tempForm.endDate || ""} onChange={handleChange} />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" value={tempForm.description || ""} onChange={handleChange}></textarea>
                <button onClick={addExperience}>Add</button>
            </div>
        </>
    )
}

export default Experience