function Stepper({ step, setStep }) {
    return (
        <div className="stepper-container">
            <button onClick={() => setStep(1)} className={step == 1 ? "currentstep" : ""}>1</button>
            <button onClick={() => setStep(2)} className={step == 2 ? "currentstep" : ""}>2</button>
            <button onClick={() => setStep(3)} className={step == 3 ? "currentstep" : ""}>3</button>
            <button onClick={() => setStep(4)} className={step == 4 ? "currentstep" : ""}>4</button>
            <button onClick={() => setStep(5)} className={step == 5 ? "currentstep" : ""}>5</button>
        </div>
    );
}
export default Stepper;
