function PreviewButton(){
    const dialog = document.querySelector("dialog")

    return (
        <button onClick={()=>dialog.showModal()}>Preview</button>
    )
}
export default PreviewButton