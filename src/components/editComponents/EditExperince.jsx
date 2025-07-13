import { useState } from "react"
import capitalize from "../../utility/capitalize"

function EditExperience({ data, setData, currentState }) {
    const [tempForm, setTempForm] = useState(data)
    function handleChange(e) {
        const { name, value } = e.target
        setTempForm((tempForm) => ({
            ...tempForm,
            [name]: capitalize(value)
        }))
    }
    function applyChanges() {
        const isFormEmpty = Object.values(tempForm).every(value => value === "")
        if (isFormEmpty) {
            return
        } else {
            let newState = currentState.map(item => {
                if (item.id === data.id) {
                    item = { ...tempForm }
                }
                return item
            })
            setData([...newState])
        }
    }
    function handleDelete() {
        let newState = currentState.filter(item => item.id !== data.id)
        setData([...newState])
    }
    return (
        <>
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
                <div className="editButtonContainer">
                    <button className="editButton" onClick={applyChanges}>Apply Changes</button>
                    <button className="deleteButton" onClick={handleDelete}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg></button>
                </div>
            </div>
        </>
    )
}

export default EditExperience