import { useState } from "react"
import Education from "./Education"
import Heading from "./heading"
import NextButton from "./NextButton"
import PreviewButton from "./PreviewButton"
import Stepper from "./Stepper"
function App(){
const [step,setStep] = useState(1)
if(step < 1){
    setStep(1)
}
    return(
        <>
        <h1 className="app-title">CV builder</h1>
        <Stepper step={step} setStep={setStep}/>
        <div className="container">
        {step === 1 && <Heading />}
        {step ===2 && <Education/>}
        </div>
        <div className="button-container">
        <PreviewButton step={step} setStep={setStep}/>
        <NextButton step={step} setStep={setStep}/>
        </div>
        </>
    )
}
export default App