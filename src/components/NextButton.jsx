function NextButton({step,setStep}){
    return(
        <button onClick={()=> setStep(step + 1)}>Next</button>
    )
}
export default NextButton