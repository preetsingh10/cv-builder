import { useState } from "react"
import Education from "./Education"
import Heading from "./heading"
import NextButton from "./NextButton"
import PreviewButton from "./PreviewButton"
import Stepper from "./Stepper"
import Experience from "./Experience"
import Resume from "./Resume"
import Skills from "./Skills"
function App() {
    const [step, setStep] = useState(1)
    const [personalInfo, setPersonalInfo] = useState({
        firstName: " ",
        lastName: "",
        aboutMe: "",
        phoneNumber: '',
        email: ""
    })
    const [education, setEducation] = useState([])
    const [experience, setExperience] = useState([])
    const [skills, setSkills] = useState([])
    if (step < 1) {
        setStep(1)
    }
    return (
        <>
            <h1 className="app-title">CV builder</h1>
            <Stepper step={step} setStep={setStep} />
            <div className="form-container">
                {step === 1 && <Heading personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />}
                {step === 2 && <Education education={education} setEducation={setEducation} />}
                {step === 3 && <Experience experience={experience} setExperience={setExperience} />}
                {step === 4 && <Skills skills={skills} setSkills={setSkills} />}
            </div>
            <div className="button-container">
                <PreviewButton />
                <NextButton step={step} setStep={setStep} />
            </div>
            <dialog id="resumeDialog">

                <Resume heading={personalInfo} education={education} experience={experience} skills={skills} />
            </dialog>
        </>
    )
}
export default App
