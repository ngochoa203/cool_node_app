const fs = require('fs');

// Read a file asynchronously using readFile
fs.readFile('./lorem.txt', (err, data) => {
    if (err) {
        return console.log('Error reading file:', err);
    }
    console.log('File content (readFile):', data.toString());
});

// Read a file synchronously using readFileSync
try {
    const dataSync = fs.readFileSync('./lorem.txt');
    console.log('File content (readFileSync):', dataSync.toString());
} catch (err) {
    console.log('Error reading file:', err);
}

// Check if a file exists
const path = './config.js';
fs.access(path, fs.F_OK, (err) => {
    if (err) {
        console.error('File does not exist:', err);
        return;
    }
    console.log('File exists!');
});

// Create a new file using fs.open
fs.open('file.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('File created successfully!');
});

// Write content to a file (overwrites if it already exists)
fs.writeFile('file.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('File content written!');
});

// Append content to an existing file
fs.appendFile('file.txt', 'New content', (err) => {
    if (err) throw err;
    console.log('File content updated!');
});

// Delete a file
fs.unlink('file.txt', (err) => {
    if (err) {
        console.log('Cannot delete file:', err);
    } else {
        console.log('File deleted!');
    }
});

// Rename a file
fs.rename('oldfile.txt', 'newfile.txt', (err) => {
    if (err) throw err;
    console.log('File renamed!');
});

// Copy a file
fs.copyFile('file.txt', 'copyfile.txt', (err) => {
    if (err) throw err;
    console.log('File copied!');
});
