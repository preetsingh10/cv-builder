import capitalize from "../utility/capitalize"
function Skills({skills, setSkills}) {
    function addSkill(){
        const skill = document.getElementById('skill').value
        setSkills((skills)=>[...skills, {id:crypto.randomUUID(), title: [capitalize(skill)]}])
       document.getElementById('skill').value = "" 
    }
    return (
        <>
            <h2>Skills</h2>
            <div className="skills-form">
                <label htmlFor="skill">Skills</label>
                <input type="text" name="skill" id="skill" />
                <button onClick={addSkill}>Add Skill</button>
            </div>

        </>
    )
}

export default Skills