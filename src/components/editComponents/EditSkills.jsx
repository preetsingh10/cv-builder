import capitalize from "../../utility/capitalize"
import { useState } from "react"

function EditSkills({ data, setData, currentState }) {

    const [skill,setSkill] = useState(data.title)

    function applyChanges() {
        let newState = currentState.map(item => {
            if (item.id === data.id) {
                item = {...data, title: skill}
            }
            return item
        })
        setData([...newState])

    }
    function handleDelete(){
        let newState = currentState.filter(item=>item.id !== data.id)
        setData([...newState])
    }
    return (
        <>
            <div className="skills-form">

                <input type="text" name="skill" id="skill" value={skill} onChange={(e)=>setSkill(capitalize(e.target.value))} />
                <div className="editButtonContainer">
                    <button className="editButton" onClick={applyChanges}>Apply Changes</button>
                    <button className="deleteButton" onClick={handleDelete}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg></button>
                </div>
            </div>

        </>
    )
}

export default EditSkills