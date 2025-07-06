import Heading from "./heading"
import NextButton from "./NextButton"
import PreviewButton from "./PreviewButton"
function App(){
    return(
        <>
        <h1 className="app-title">CV builder</h1>
        <div className="container">
        <Heading />
        </div>
        <div className="button-container">
        <PreviewButton/>
        <NextButton />
        </div>
        </>
    )
}
export default App