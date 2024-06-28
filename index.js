const fs = require('fs');
const path = require('path');

// Function to read a file
function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file from disk: ${err}`);
        } else {
            console.log(`File content:\n${data}`);
        }
    });
}

// Function to write to a file
function writeFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
        } else {
            console.log('File has been written');
        }
    });
}

// Specify the file path
const filePath = path.join(__dirname, 'file.txt');

// Read the file (uncomment to use)
// readFile(filePath);

// Write to the file
// writeFile(filePath, 'New ');
readFile(filePath);
