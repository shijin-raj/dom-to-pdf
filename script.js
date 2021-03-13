import { jsPDF } from 'jspdf';

function saveAsPDF() {
    const doc = new jsPDF();
    doc.text("Hello world");
    doc.save("Test.pdf");
}
module.exports = saveAsPDF;