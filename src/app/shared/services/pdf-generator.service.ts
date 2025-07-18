import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { BestSellers, BestSellersByCategory, LowRotationBooks, MonthlySales } from '../models/reports.models';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor() { }

  exportMonthlySales(data: MonthlySales[]): void {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Monthly Sales Report', 14, 20);
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 28);

    autoTable(doc, {
      startY: 35,
      head: [['Month', 'Sales ($)', 'Books Sold']],
      body: data.map(row => [
        row.month,
        row.sales.toLocaleString(),
        row.booksSold.toString()
      ]),
      theme: 'striped',
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      headStyles: {
        fillColor: [33, 37, 41], // gris oscuro
        textColor: 255,
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245] // gris claro
      },
      margin: { left: 14, right: 14 }
    });

    doc.save('monthly-sales-report.pdf');
  }

  exportLowRotationBooks(data: LowRotationBooks[]): void {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Low Rotation Books', 14, 20);
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 28);

    autoTable(doc, {
      startY: 35,
      head: [['ISBN', 'Title', 'Authors', 'Sales', 'Last Sold']],
      body: data.map(row => [
        row.isbn,
        row.title,
        row.authors.join(', '),
        row.sales.toString(),
        row.lastSold
      ]),
      theme: 'striped',
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      headStyles: {
        fillColor: [33, 37, 41], // gris oscuro
        textColor: 255,
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245] // gris claro
      },
      margin: { left: 14, right: 14 }
    });

    doc.save('low-rotation-books.pdf');
  }


  exportBestSellers(data: BestSellers[]): void {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Best Sellers', 14, 20);
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 28);

    autoTable(doc, {
      startY: 35,
      head: [['Title', 'Category', 'Sales']],
      body: data.map(row => [
        row.title,
        row.category,
        row.sales.toString()
      ]),
      theme: 'striped',
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      headStyles: {
        fillColor: [33, 37, 41], // negro suave
        textColor: 255,
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245] // gris claro para filas alternas
      },
      margin: { left: 14, right: 14 }
    });

    doc.save('best-sellers.pdf');
  }




  async exportBestSellersByCategory(data: BestSellersByCategory[]): Promise<void> {
    // Obtener categorías únicas del data recibido
    const uniqueCategories = Array.from(new Set(data.map(book => book.category))).sort();

    if (uniqueCategories.length === 0) {
      await Swal.fire('Sin datos', 'No hay categorías disponibles para exportar.', 'warning');
      return;
    }

    // Crear HTML dinámico con checkboxes
    const categoryOptionsHtml = uniqueCategories.map(cat =>
      `<div style="text-align: left; margin: 4px 0;">
        <input type="checkbox" id="cat-${cat}" value="${cat}" checked />
        <label for="cat-${cat}">${cat}</label>
      </div>`
    ).join('');

    const { isConfirmed } = await Swal.fire({
      title: 'Seleccionar categorías',
      html: `
        <p>Elige las categorías a exportar:</p>
        ${categoryOptionsHtml}
      `,
      confirmButtonText: 'Exportar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => {
        const selected: string[] = [];
        uniqueCategories.forEach(cat => {
          const checkbox = document.getElementById(`cat-${cat}`) as HTMLInputElement;
          if (checkbox?.checked) selected.push(cat);
        });
        return selected;
      }
    });

    const selectedCategories = await Swal.getPopup()?.querySelectorAll('input:checked')
      ? Array.from(Swal.getPopup()?.querySelectorAll('input:checked') || []).map(
        el => (el as HTMLInputElement).value
      )
      : [];

    if (!isConfirmed || selectedCategories.length === 0) {
      await Swal.fire('Cancelado', 'No se exportó ningún PDF.', 'info');
      return;
    }

    // Filtrar libros por selección del usuario
    const filteredData = data.filter(book =>
      selectedCategories.includes(book.category)
    );

    // Agrupar por categoría
    const grouped: { [category: string]: BestSellersByCategory[] } = {};
    for (const book of filteredData) {
      if (!grouped[book.category]) grouped[book.category] = [];
      grouped[book.category].push(book);
    }

    // Crear PDF
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Best Sellers by Category', 14, 20);
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 28);

    let currentY = 35;

    for (const category of selectedCategories) {
      const books = grouped[category];
      if (!books) continue;

      doc.setTextColor(34, 139, 34); // verde
      doc.setFontSize(12);
      doc.text(category.toUpperCase(), 14, currentY);
      currentY += 6;

      autoTable(doc, {
        startY: currentY,
        head: [[
          'No', 'ISBN', 'Title', 'Authors', 'Editorial',
          'Price', 'Sales', 'Category', 'Best Seller'
        ]],
        body: books.map((b, index) => [
          index + 1,
          b.isbn,
          b.title,
          b.authors.join(', '),
          b.editorial,
          `$${b.price.toFixed(2)}`,
          b.sales.toString(),
          b.category,
          b.bestSeller ? 'TRUE' : 'FALSE'
        ]),
        styles: {
          fontSize: 9,
          cellPadding: 3
        },
        headStyles: {
          fillColor: [33, 37, 41],
          textColor: 255,
          fontStyle: 'bold'
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245]
        },
        theme: 'striped',
        margin: { left: 14, right: 14 },
        didParseCell: (data) => {
          const isBestSellerCol = data.column.index === 8;
          const value = data.cell.raw;
          if (isBestSellerCol && data.section === 'body') {
            data.cell.styles.fontStyle = 'bold';
            if (value === 'TRUE') {
              data.cell.styles.textColor = [0, 153, 0]; // verde
            } else if (value === 'FALSE') {
              data.cell.styles.textColor = [220, 38, 38]; // rojo
            }
          }
        }
      });

      currentY = (doc as any).lastAutoTable.finalY + 10;
      if (currentY > 270) {
        doc.addPage();
        currentY = 20;
      }
    }

    doc.save('best-sellers-by-category.pdf');

    await Swal.fire('¡Exportado!', 'El PDF fue generado correctamente.', 'success');
  }

}
