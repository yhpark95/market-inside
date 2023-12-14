document.getElementById('downloadData').addEventListener('click', function () {
    // Get the form data
    const formData = {
        totalShipmentValue: document.getElementById('totalShipmentValue').value,
        fromDate: document.getElementById('fromDate').value,
        toDate: document.getElementById('toDate').value,
        hsCode: document.getElementById('hsCode').value,
        country: document.getElementById('country').value,
        dataTypeId: document.getElementById('dataTypeId').value
    };

    // Convert form data to JSON
    const jsonData = JSON.stringify(formData);

    // Send JSON data to a server (replace 'your-api-endpoint' with the actual API endpoint)
    fetch('/resultView', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
        .then(response => response.text())
        .then(data => {
            // Handle the server response if needed
            console.log(data);
            // You can redirect or handle the response here as required.
            window.location.href = "/";
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
