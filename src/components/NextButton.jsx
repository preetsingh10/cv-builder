function NextButton({step,setStep}){
    return(
        <button className="button--next" onClick={()=> setStep(step + 1)}>Next</button>
    )
}
export default NextButton