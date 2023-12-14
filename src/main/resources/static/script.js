// script.js

document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        fromDate: document.getElementById('fromDate').value,
        toDate: document.getElementById('toDate').value,
        hsCode: document.getElementById('hsCode').value,
        country: document.getElementById('country').options[document.getElementById('country').selectedIndex].text,
        countryId: document.getElementById('country').value
    };

    // Convert form data to JSON
    const jsonData = JSON.stringify(formData);

    // Send JSON data to a server (replace 'your-api-endpoint' with the actual API endpoint)
    fetch('/dataType', {
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
            document.body.innerHTML = data;
            const script = document.createElement('script');

// Set the source of the script to your additional JavaScript file
            script.src = '../static/totalShipmentScript.js';

// Append the script element to the document's head
            document.head.appendChild(script);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
const countries = [
    {
        "id": 1,
        "countryName": "Djibouti"
    },
    {
        "id": 2,
        "countryName": "Dominica"
    },
    {
        "id": 3,
        "countryName": "Dominican Republic"
    },
    {
        "id": 4,
        "countryName": "DR Congo"
    },
    {
        "id": 5,
        "countryName": "Ecuador"
    },
    {
        "id": 6,
        "countryName": "Egypt"
    },
    {
        "id": 8,
        "countryName": "Equatorial Guinea"
    },
    {
        "id": 9,
        "countryName": "Eritrea"
    },
    {
        "id": 10,
        "countryName": "Estonia"
    },
    {
        "id": 11,
        "countryName": "Eswatini"
    },
    {
        "id": 12,
        "countryName": "Ethiopia"
    },
    {
        "id": 15,
        "countryName": "Faroe Islands"
    },
    {
        "id": 16,
        "countryName": "Fiji"
    },
    {
        "id": 17,
        "countryName": "Finland"
    },
    {
        "id": 19,
        "countryName": "France"
    },
    {
        "id": 20,
        "countryName": "French Guiana"
    },
    {
        "id": 21,
        "countryName": "French Polynesia"
    },
    {
        "id": 22,
        "countryName": "Gabon"
    },
    {
        "id": 23,
        "countryName": "Gambia"
    },
    {
        "id": 24,
        "countryName": "Georgia"
    },
    {
        "id": 25,
        "countryName": "Germany"
    },
    {
        "id": 28,
        "countryName": "Ghana"
    },
    {
        "id": 29,
        "countryName": "Greece"
    },
    {
        "id": 30,
        "countryName": "Greenland"
    },
    {
        "id": 31,
        "countryName": "Grenada"
    },
    {
        "id": 33,
        "countryName": "Guatemala"
    },
    {
        "id": 34,
        "countryName": "Guinea"
    },
    {
        "id": 36,
        "countryName": "Guyana"
    },
    {
        "id": 37,
        "countryName": "Haiti"
    },
    {
        "id": 38,
        "countryName": "Honduras"
    },
    {
        "id": 39,
        "countryName": "Hong Kong"
    },
    {
        "id": 40,
        "countryName": "Hungary"
    },
    {
        "id": 41,
        "countryName": "Iceland"
    },
    {
        "id": 42,
        "countryName": "India"
    },
    {
        "id": 43,
        "countryName": "Indonesia"
    },
    {
        "id": 44,
        "countryName": "Iran"
    },
    {
        "id": 45,
        "countryName": "Iraq"
    },
    {
        "id": 46,
        "countryName": "Ireland"
    },
    {
        "id": 47,
        "countryName": "Israel"
    },
    {
        "id": 48,
        "countryName": "Italy"
    },
    {
        "id": 49,
        "countryName": "Jamaica"
    },
    {
        "id": 50,
        "countryName": "Japan"
    },
    {
        "id": 51,
        "countryName": "Jordan"
    },
    {
        "id": 52,
        "countryName": "Kazakhstan"
    },
    {
        "id": 53,
        "countryName": "Kenya"
    },
    {
        "id": 54,
        "countryName": "Kiribati"
    },
    {
        "id": 55,
        "countryName": "Kuwait"
    },
    {
        "id": 56,
        "countryName": "Kyrgyzstan"
    },
    {
        "id": 57,
        "countryName": "Laos"
    },
    {
        "id": 58,
        "countryName": "Latvia"
    },
    {
        "id": 59,
        "countryName": "Lebanon"
    },
    {
        "id": 60,
        "countryName": "Lesotho"
    },
    {
        "id": 61,
        "countryName": "Liberia"
    },
    {
        "id": 62,
        "countryName": "Libya"
    },
    {
        "id": 63,
        "countryName": "Lithuania"
    },
    {
        "id": 64,
        "countryName": "Luxembourg"
    },
    {
        "id": 65,
        "countryName": "Belgium Luxembourg"
    },
    {
        "id": 66,
        "countryName": "Macao"
    },
    {
        "id": 67,
        "countryName": "Madagascar"
    },
    {
        "id": 68,
        "countryName": "Malawi"
    },
    {
        "id": 69,
        "countryName": "Malaysia"
    },
    {
        "id": 71,
        "countryName": "Maldives"
    },
    {
        "id": 72,
        "countryName": "Mali"
    },
    {
        "id": 73,
        "countryName": "Malta"
    },
    {
        "id": 74,
        "countryName": "Marshall Islands"
    },
    {
        "id": 75,
        "countryName": "Martinique"
    },
    {
        "id": 76,
        "countryName": "Mauritania"
    },
    {
        "id": 77,
        "countryName": "Mauritius"
    },
    {
        "id": 78,
        "countryName": "Mayotte"
    },
    {
        "id": 79,
        "countryName": "Mexico"
    },
    {
        "id": 80,
        "countryName": "Micronesia"
    },
    {
        "id": 81,
        "countryName": "Moldova"
    },
    {
        "id": 82,
        "countryName": "Mongolia"
    },
    {
        "id": 83,
        "countryName": "Montenegro"
    },
    {
        "id": 84,
        "countryName": "Montserrat"
    },
    {
        "id": 85,
        "countryName": "Morocco"
    },
    {
        "id": 86,
        "countryName": "Mozambique"
    },
    {
        "id": 87,
        "countryName": "Myanmar"
    },
    {
        "id": 88,
        "countryName": "Namibia"
    },
    {
        "id": 89,
        "countryName": "Nepal"
    },
    {
        "id": 90,
        "countryName": "Netherlands"
    },
    {
        "id": 92,
        "countryName": "New Caledonia"
    },
    {
        "id": 93,
        "countryName": "New Zealand"
    },
    {
        "id": 94,
        "countryName": "Nicaragua"
    },
    {
        "id": 95,
        "countryName": "Niger"
    },
    {
        "id": 96,
        "countryName": "Nigeria"
    },
    {
        "id": 97,
        "countryName": "Niue"
    },
    {
        "id": 98,
        "countryName": "North Korea"
    },
    {
        "id": 99,
        "countryName": "Macedonia"
    },
    {
        "id": 100,
        "countryName": "Norway"
    },
    {
        "id": 101,
        "countryName": "Oman"
    },
    {
        "id": 103,
        "countryName": "Pakistan"
    },
    {
        "id": 105,
        "countryName": "Palau"
    },
    {
        "id": 106,
        "countryName": "Palestine"
    },
    {
        "id": 107,
        "countryName": "Panama"
    },
    {
        "id": 109,
        "countryName": "Papua New Guinea"
    },
    {
        "id": 110,
        "countryName": "Paraguay"
    },
    {
        "id": 111,
        "countryName": "Peru"
    },
    {
        "id": 112,
        "countryName": "Philippines"
    },
    {
        "id": 113,
        "countryName": "Poland"
    },
    {
        "id": 114,
        "countryName": "Portugal"
    },
    {
        "id": 115,
        "countryName": "Qatar"
    },
    {
        "id": 116,
        "countryName": "Reunion"
    },
    {
        "id": 117,
        "countryName": "Romania"
    },
    {
        "id": 118,
        "countryName": "Russia"
    },
    {
        "id": 119,
        "countryName": "Rwanda"
    },
    {
        "id": 120,
        "countryName": "Saint Helena"
    },
    {
        "id": 121,
        "countryName": "Saint Kitts and Nevis"
    },
    {
        "id": 122,
        "countryName": "Saint Kitts Nevis and Anguilla"
    },
    {
        "id": 123,
        "countryName": "Saint Lucia"
    },
    {
        "id": 124,
        "countryName": "Saint Pierre and Miquelon"
    },
    {
        "id": 125,
        "countryName": "Saint Vincent and the Grenadines"
    },
    {
        "id": 126,
        "countryName": "Samoa"
    },
    {
        "id": 127,
        "countryName": "Sao Tome and Principe"
    },
    {
        "id": 128,
        "countryName": "Saudi Arabia"
    },
    {
        "id": 129,
        "countryName": "Senegal"
    },
    {
        "id": 130,
        "countryName": "Serbia"
    },
    {
        "id": 131,
        "countryName": "Seychelles"
    },
    {
        "id": 132,
        "countryName": "Sierra Leone"
    },
    {
        "id": 133,
        "countryName": "Singapore"
    },
    {
        "id": 134,
        "countryName": "Slovakia"
    },
    {
        "id": 135,
        "countryName": "Czechoslovakia"
    },
    {
        "id": 136,
        "countryName": "Slovenia"
    },
    {
        "id": 138,
        "countryName": "Solomon Islands"
    },
    {
        "id": 139,
        "countryName": "Somalia"
    },
    {
        "id": 140,
        "countryName": "South Africa"
    },
    {
        "id": 141,
        "countryName": "South Korea"
    },
    {
        "id": 142,
        "countryName": "South Sudan"
    },
    {
        "id": 143,
        "countryName": "Spain"
    },
    {
        "id": 144,
        "countryName": "Sri Lanka"
    },
    {
        "id": 145,
        "countryName": "Sudan"
    },
    {
        "id": 146,
        "countryName": "Suriname"
    },
    {
        "id": 147,
        "countryName": "Sweden"
    },
    {
        "id": 148,
        "countryName": "Switzerland"
    },
    {
        "id": 149,
        "countryName": "Syria"
    },
    {
        "id": 150,
        "countryName": "Tajikistan"
    },
    {
        "id": 151,
        "countryName": "Tanzania"
    },
    {
        "id": 152,
        "countryName": "Thailand"
    },
    {
        "id": 153,
        "countryName": "Timor Leste"
    },
    {
        "id": 154,
        "countryName": "Togo"
    },
    {
        "id": 155,
        "countryName": "Tonga"
    },
    {
        "id": 156,
        "countryName": "Trinidad and Tobago"
    },
    {
        "id": 157,
        "countryName": "Tunisia"
    },
    {
        "id": 158,
        "countryName": "Turkey"
    },
    {
        "id": 159,
        "countryName": "Turkmenistan"
    },
    {
        "id": 160,
        "countryName": "Turks and Caicos Islands"
    },
    {
        "id": 161,
        "countryName": "Tuvalu"
    },
    {
        "id": 162,
        "countryName": "Uganda"
    },
    {
        "id": 163,
        "countryName": "Ukraine"
    },
    {
        "id": 164,
        "countryName": "United Arab Emirates"
    },
    {
        "id": 165,
        "countryName": "United Kingdom"
    },
    {
        "id": 166,
        "countryName": "USA"
    },
    {
        "id": 167,
        "countryName": "Uruguay"
    },
    {
        "id": 168,
        "countryName": "US Virgin Islands"
    },
    {
        "id": 169,
        "countryName": "Uzbekistan"
    },
    {
        "id": 170,
        "countryName": "Vanuatu"
    },
    {
        "id": 171,
        "countryName": "Venezuela"
    },
    {
        "id": 172,
        "countryName": "Vietnam"
    },
    {
        "id": 173,
        "countryName": "Wallis and Futuna"
    },
    {
        "id": 174,
        "countryName": "Yemen"
    },
    {
        "id": 175,
        "countryName": "Democratic Yemen"
    },
    {
        "id": 176,
        "countryName": "Zambia"
    },
    {
        "id": 177,
        "countryName": "Zimbabwe"
    },
    {
        "id": 178,
        "countryName": "Aland Islands"
    },
    {
        "id": 179,
        "countryName": "American Samoa"
    },
    {
        "id": 180,
        "countryName": "Antarctica"
    },
    {
        "id": 181,
        "countryName": "Bouvet Island"
    },
    {
        "id": 182,
        "countryName": "British Indian Ocean Territory"
    },
    {
        "id": 183,
        "countryName": "Christmas Island"
    },
    {
        "id": 184,
        "countryName": "Cocos Keeling Islands"
    },
    {
        "id": 185,
        "countryName": "Curacao"
    },
    {
        "id": 188,
        "countryName": "Gibraltar"
    },
    {
        "id": 192,
        "countryName": "Vatican City"
    },
    {
        "id": 193,
        "countryName": "Isle of Man"
    },
    {
        "id": 194,
        "countryName": "Jersey"
    },
    {
        "id": 195,
        "countryName": "Liechtenstein"
    },
    {
        "id": 196,
        "countryName": "Monaco"
    },
    {
        "id": 200,
        "countryName": "Pitcairn"
    },
    {
        "id": 201,
        "countryName": "Puerto Rico"
    },
    {
        "id": 204,
        "countryName": "San Marino"
    },
    {
        "id": 208,
        "countryName": "Taiwan"
    },
    {
        "id": 209,
        "countryName": "Tokelau"
    },
    {
        "id": 211,
        "countryName": "British Virgin Islands"
    },
    {
        "id": 212,
        "countryName": "Western Sahara"
    },
    {
        "id": 224,
        "countryName": "Kosovo"
    },
    {
        "id": 233,
        "countryName": "Netherlands Antilles"
    },
    {
        "id": 248,
        "countryName": "Zanzibar"
    },
    {
        "id": 249,
        "countryName": "Yugoslavia"
    },
    {
        "id": 256,
        "countryName": "Republic Yemen"
    },
    {
        "id": 259,
        "countryName": "Afghanistan"
    },
    {
        "id": 260,
        "countryName": "Albania"
    },
    {
        "id": 261,
        "countryName": "Algeria"
    },
    {
        "id": 262,
        "countryName": "Andorra"
    },
    {
        "id": 263,
        "countryName": "Angola"
    },
    {
        "id": 264,
        "countryName": "Anguilla"
    },
    {
        "id": 265,
        "countryName": "Antigua and Barbuda"
    },
    {
        "id": 266,
        "countryName": "Argentina"
    },
    {
        "id": 267,
        "countryName": "Armenia"
    },
    {
        "id": 268,
        "countryName": "Aruba"
    },
    {
        "id": 270,
        "countryName": "Australia"
    },
    {
        "id": 271,
        "countryName": "Austria"
    },
    {
        "id": 272,
        "countryName": "Azerbaijan"
    },
    {
        "id": 273,
        "countryName": "Bahamas"
    },
    {
        "id": 274,
        "countryName": "Bahrain"
    },
    {
        "id": 275,
        "countryName": "Bangladesh"
    },
    {
        "id": 276,
        "countryName": "Barbados"
    },
    {
        "id": 277,
        "countryName": "Belarus"
    },
    {
        "id": 278,
        "countryName": "Belgium"
    },
    {
        "id": 279,
        "countryName": "Belize"
    },
    {
        "id": 280,
        "countryName": "Benin"
    },
    {
        "id": 281,
        "countryName": "Bermuda"
    },
    {
        "id": 282,
        "countryName": "Bhutan"
    },
    {
        "id": 283,
        "countryName": "Bolivia"
    },
    {
        "id": 284,
        "countryName": "Sabah"
    },
    {
        "id": 285,
        "countryName": "Bosnia and Herzegovina"
    },
    {
        "id": 286,
        "countryName": "Botswana"
    },
    {
        "id": 287,
        "countryName": "Brazil"
    },
    {
        "id": 288,
        "countryName": "Brunei"
    },
    {
        "id": 289,
        "countryName": "Bulgaria"
    },
    {
        "id": 290,
        "countryName": "Burkina Faso"
    },
    {
        "id": 291,
        "countryName": "Burundi"
    },
    {
        "id": 292,
        "countryName": "Cape Verde"
    },
    {
        "id": 293,
        "countryName": "Cambodia"
    },
    {
        "id": 294,
        "countryName": "Cameroon"
    },
    {
        "id": 295,
        "countryName": "Canada"
    },
    {
        "id": 296,
        "countryName": "Cayman Islands"
    },
    {
        "id": 297,
        "countryName": "Central African Republic"
    },
    {
        "id": 298,
        "countryName": "Chad"
    },
    {
        "id": 299,
        "countryName": "Chile"
    },
    {
        "id": 300,
        "countryName": "China"
    },
    {
        "id": 301,
        "countryName": "Colombia"
    },
    {
        "id": 302,
        "countryName": "Comoros"
    },
    {
        "id": 303,
        "countryName": "Congo"
    },
    {
        "id": 304,
        "countryName": "Cook Islands"
    },
    {
        "id": 305,
        "countryName": "Costa Rica"
    },
    {
        "id": 306,
        "countryName": "Cote d Ivoire"
    },
    {
        "id": 307,
        "countryName": "Croatia"
    },
    {
        "id": 308,
        "countryName": "Cuba"
    },
    {
        "id": 309,
        "countryName": "Cyprus"
    },
    {
        "id": 310,
        "countryName": "Czechia"
    },
    {
        "id": 311,
        "countryName": "Denmark"
    },
    {
        "id": 312,
        "countryName": "Mexico Sea"
    },
    {
        "id": 313,
        "countryName": "EU Transit"
    }
];
// Get a reference to the <select> element
const selectElement = document.getElementById("country");

// Iterate through the countries data and create <option> elements
countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.id;
    option.name = country.countryName;
    option.text = country.countryName;
    selectElement.appendChild(option);
});
