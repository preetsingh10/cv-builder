import { useState } from "react"
import Education from "./Education"
import Heading from "./heading"
import NextButton from "./NextButton"
import PreviewButton from "./PreviewButton"
import Stepper from "./Stepper"
import Experience from "./Experience"
import Resume from "./Resume"
function App() {
    const [step, setStep] = useState(1)
    const [personalInfo, setPersonalInfo] = useState({
        firstName: " ",
        lastName: "",
        aboutMe: "",
        phoneNumber: '',
        email: ""
    })
    const [education, setEducation] =  useState([{}])
    if (step < 1) {
        setStep(1)
    }
    return (
        <>
            <h1 className="app-title">CV builder</h1>
            <Stepper step={step} setStep={setStep} />
            <div className="form-container">
                {step === 1 && <Heading personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />}
                {step === 2 && <Education education={education} setEducation={setEducation}/>}
                {step === 3 && <Experience />}
            </div>
            <div className="button-container">
                <PreviewButton />
                <NextButton step={step} setStep={setStep} />
            </div>
            <Resume heading={personalInfo} education={education} />
        </>
    )
}
export default App
