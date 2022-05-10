import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function eventsPDF(events) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [{
        text: 'Liste of Events',
        fontSize: 15,
        bold: true,
        margin: [15, 20, 0, 45] // left, top, right, bottom
    }];

    // const dados = events.map(event => {
    //     return [{ text: event.title, fontSize: 9, margin: [0, 2, 0, 2] }, 
    //     { text: event.description, fontSize: 9, margin: [0, 2, 0, 2] },
    //      { text: event.date, fontSize: 9, margin: [0, 2, 0, 2] }];
    // });

    const details = [{
        table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [[{ text: 'title', style: 'tableHeader', fontSize: 10 }, { text: 'description', style: 'tableHeader', fontSize: 10 }, { text: 'date', style: 'tableHeader', fontSize: 10 }]]
        },
//    ...dados
    }];

    function Rodape(currentPage, pageCount) {
        return [{
            text: currentPage + '/' + pageCount,
            alignment: 'right',
            fontSize: 9,
            margin: [0, 10, 20, 0]
        }];
    }

    const docDefinitios = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
          footer: Rodape
    };

    pdfMake.createPdf(docDefinitios).download();
}


export default eventsPDF;