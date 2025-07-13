import { useState } from "react"
import capitalize from "../utility/capitalize"
function Skills({ skills, setSkills }) {
    const [skill, setSkill] = useState("")
    function addSkill() {
        if(skill === ""){
            return 
        }
        setSkills(() => [...skills, { id: crypto.randomUUID(), title: [capitalize(skill)] }])
        setSkill("")
    }

    return (
        <>
            <h2>Skills</h2>
            <div className="skills-form">

                <input type="text" name="skill" id="skill" value={skill} onChange={(e) => setSkill(e.target.value)} />
                <button className="addButton" onClick={addSkill}>Add Skill</button>
            </div>

        </>
    )
}

export default Skills