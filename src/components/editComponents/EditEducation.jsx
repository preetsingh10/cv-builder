import { useState } from "react"
import capitalize from "../../utility/capitalize"

function EditEducation({ data, setData, currentState }) {
    const [tempForm, setTempForm] = useState(data)

    function editFormData() {
        const formIsEmpty = Object.values(tempForm).every(value => value === "")
        if (formIsEmpty) {
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

    function handleChange(e) {
        const { name, value } = e.target
        setTempForm(() => (
            {
                ...tempForm,
                [name]: capitalize(value)
            }
        ))
    }

    return (
        <>
            <div className="education-form edit" >
                <label htmlFor="edit-school-name">School Name</label>
                <input type="text" name="schoolName" id="edit-school-name" value={tempForm.schoolName} onChange={handleChange} />
                <label htmlFor="edit-location">Location</label>
                <input type="text" name="location" id="edit-location" value={tempForm.location} onChange={handleChange} />
                <label htmlFor="edit-titleOfStudy">Title of Study</label>
                <input type="text" name="titleOfStudy" id="edit-titleOfStudy" value={tempForm.titleOfStudy} onChange={handleChange} />
                <div className="editButtonContainer">
                <button className="editButton" type="button" onClick={editFormData}>Apply Changes</button>
                <button className="deleteButton"><svg xmlns="http://www.w3.org/2000/svg"viewBox="0 -960 960 960"  fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg></button>
                </div>
            </div>

        </>

    )
}
export default EditEducation