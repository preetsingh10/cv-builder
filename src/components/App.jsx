import { useState } from "react"
import Education from "./Education"
import Heading from "./heading"
import NextButton from "./NextButton"
import PreviewButton from "./PreviewButton"
import Stepper from "./Stepper"
import Experience from "./Experience"
import Resume from "./Resume"
import Skills from "./Skills"
import Edit from "./Edit"
import icon from "../assets/reshot-icon-resume-RK2HTZ6GUA.svg"
function App() {
    const [step, setStep] = useState(1)
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        aboutMe: "",
        phoneNumber: '',
        email: ""
    })
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])
    const [skills, setSkills] = useState([])
    const allState = {
        personalInfo,
        education,
        experience,
        skills
    }
    const allSetFunctions = {
        setPersonalInfo, setEducation, setExperience, setSkills
    }
    if (step < 1) {
        setStep(1)
    }
    return (
        <>
            <div className="appHeading">
                <img className="resumeIcon" src={icon} alt="resume icon" />
                <h1 className="app-title">CV Builder</h1>
            </div>

            <Stepper step={step} setStep={setStep} />
            <div className="form-container">
                {step === 1 && <Heading personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />}
                {step === 2 && <Education education={education} setEducation={setEducation} />}
                {step === 3 && <Experience experience={experience} setExperience={setExperience} />}
                {step === 4 && <Skills skills={skills} setSkills={setSkills} />}
                {step === 5 && <Edit currentState={allState} setState={allSetFunctions} />}
            </div>
            <div className="button-container">
                <PreviewButton />
                {step !== 5 && <NextButton step={step} setStep={setStep} />}
            </div>
            <dialog id="resumeDialog">

                <Resume heading={personalInfo} education={education} experience={experience} skills={skills} />
            </dialog>
        </>
    )
}
export default App
