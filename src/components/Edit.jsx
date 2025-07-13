import Heading from "./heading"
import EditEducation from "../components/editComponents/EditEducation"
import EditExperience from "./editComponents/EditExperince"
import EditSkills from "./editComponents/EditSkills"
function Edit({ currentState, setState }) {
    return (
        <>
            <h2>Edit Your Resume</h2>
            <br />
            <Heading personalInfo={currentState.personalInfo} setPersonalInfo={setState.setPersonalInfo} />
            {currentState.education.length > 0 && <h2>Education</h2>}

            {currentState.education.length > 0 && currentState.education.map(item => {
                return (
                    <EditEducation key={item.id} data={item} setData={setState.setEducation} currentState={currentState.education} />
                )
            })}
            {currentState.experience.length > 0 && <h2>Experience</h2>}

            {currentState.experience.length > 0 && currentState.experience.map(item => {
                return (
                    <EditExperience key={item.id} data={item} setData={setState.setExperience} currentState={currentState.experience} />
                )
            })}
            {currentState.skills.length > 0 && <h2>Skills</h2>}
            {currentState.skills.length >0 && currentState.skills.map(item=>{
                return(
                    <EditSkills key={item.id} data={item} setData={setState.setSkills} currentState={currentState.skills} />
                )
            })}

        </>
    )
}
export default Edit