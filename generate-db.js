const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'database');

const dataFiles = ['customers.json', 'administrators.json', 'editorials.json', 'authors.json', 'books.json'];
const db = {};

dataFiles.forEach((file) => {
  const key = path.basename(file, '.json'); // "customers", "books", etc.
  const filePath = path.join(dataDir, file);
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    db[key] = JSON.parse(content);
  } catch (err) {
    console.error(`❌ Error al leer o parsear ${filePath}:`, err.message);
  }
});
fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(db, null, 2));
console.log('✅ db.json creado exitosamente con:', Object.keys(db).join(', '));
