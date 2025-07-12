function PreviewButton() {
    const dialog = document.querySelector("dialog")

    return (
        <button className="button--preview" onClick = {()=> dialog.showModal()}> Preview</button >
    )
}
export default PreviewButton