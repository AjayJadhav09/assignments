const fs = require('fs');

function removeExtraSpaces(str) {
    return str.replace(/\s+/g, ' ').trim();
}

fs.readFile('./file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const cleanedData = removeExtraSpaces(data);

    fs.writeFile('./file.txt', cleanedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File has been cleaned and saved.');
        }
    });

    console.log(data);
});

