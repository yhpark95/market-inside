document.getElementById('finalDataForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = {
        fromDate: document.getElementById('fromDate').value,
        toDate: document.getElementById('toDate').value,
        hsCode: document.getElementById('hsCode').value,
        country: document.getElementById('country').value,
        dataTypeId: document.getElementById('dataTypeId').value,
        importExport: document.getElementById('dataTypeId').options[document.getElementById('dataTypeId').selectedIndex].text,
        importer: document.getElementById('importer').value,
        supplier: document.getElementById('supplier').value
    };

    // Convert form data to JSON
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);

    // Send JSON data to a server (replace 'your-api-endpoint' with the actual API endpoint)
    fetch('/totalShipment', {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: jsonData
    })
        .then(response => response.text())
        .then(data => {
            // Handle the server response if needed
            console.log(data);
            document.body.innerHTML = data;
            const script = document.createElement('script');

// Set the source of the script to your additional JavaScript file
            script.src = '../static/resultViewScript.js';

// Append the script element to the document's head
            document.head.appendChild(script);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
console.log(document.getElementById('finalDataForm'));
