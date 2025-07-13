import Heading from "./heading"
import EditEducation from "../components/editComponents/EditEducation"
function Edit({currentState, setState}){
    return(
        <>
        <h2>Edit Your Resume</h2>
        <Heading personalInfo={currentState.personalInfo} setPersonalInfo={setState.setPersonalInfo} />
        <h2>Education</h2>
        {currentState.education.length > 0 && currentState.education.map(item=>{
            return (
              
                 <EditEducation key={item.id} data={item} setData={setState.setEducation} currentState={currentState.education}/>
            )
        })}
       
        </>
    )
}
export default Edit