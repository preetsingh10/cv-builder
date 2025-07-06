function PreviewButton({step, setStep}){
    return (
        <button onClick={()=>setStep(step-1)}>Preview</button>
    )
} 
export default PreviewButton