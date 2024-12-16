const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Function to generate a unique file name
function generateUniqueFilename(directory, baseName) {
  let counter = 10;
  let filename = `${baseName}.pdf`;
  while (fs.existsSync(path.join(directory, filename))) {
    counter += 1;
    filename = `${baseName}_${counter}.pdf`;
  }
  return path.join(directory, filename);
}

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const directory = './pdfs';
  const baseName = 'attempt';
  const filepath = generateUniqueFilename(directory, baseName);

  await page.pdf({
    path: filepath,
    format: 'letter',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: '<div></div>',
    margin: {
      top: '0.75in',
      bottom: '0.75in',
      left: '0.75in',
      right: '0.75in',
    },
  });

  await browser.close();

  console.log(`PDF successfully generated at: ${filepath}`);
}

generatePDF().catch((error) => {
  console.error('Error generating PDF:', error);
});
