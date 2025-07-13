import html2pdf  from "html2pdf.js"
function DownloadButton(){
    const handleDownload = () =>{
        const element = document.querySelector('.resume')
         html2pdf().from(element).save("resume.pdf")
        
    }

    return(
        <button onClick={handleDownload}>Donwload</button>
    )
}
export default DownloadButton