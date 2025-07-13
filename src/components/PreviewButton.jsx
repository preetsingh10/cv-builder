function PreviewButton() {
    const dialog = document.querySelector("dialog")

    return (
        <button className="previewButton" onClick = {()=> dialog.showModal()}> Preview</button >
    )
}
export default PreviewButton