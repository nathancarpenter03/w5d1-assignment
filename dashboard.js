// 1. Count the number of records in the "Current Quarter Details" table.
var numRecords = document.querySelectorAll('tbody tr');

console.log(numRecords.length);

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

var quarterImages = document.querySelectorAll('img');

    quarterImages[0].src = 'https://unsplash.it/100/100?image=424';
    quarterImages[1].src = 'https://unsplash.it/100/100?image=373';
    quarterImages[2].src = 'https://unsplash.it/100/100?image=542';
    quarterImages[3].src = 'https://unsplash.it/100/100?image=222';

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
var currencies = document.querySelectorAll('.text-muted');

currencies.forEach(function(currency) {
    var randomCurrency = (Math.ceil(Math.random()*100000) / 100);
    currency.innerHTML = '$' + randomCurrency;
})

// 4. Change the currently selected left side menu item from Overview to Reports.
var overview = document.querySelector('.nav-sidebar li:first-child');
overview.classList.remove('active');

var reports = document.querySelector('.nav-sidebar li:nth-child(2)');
reports.classList.add('active');

// 5. Set the default search input value to "Q4 sales".
var searchBox = document.querySelector('.form-control');

searchBox.placeholder = 'Q4 sales';

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
document.querySelector('table').classList.add('table-hover');

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
tableRows = document.querySelectorAll('tr');

tableRows[7].classList.add('success');
tableRows[8].classList.add('success');
tableRows[9].classList.add('success');
tableRows[10].classList.add('success');

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
var tableHeaders = document.querySelectorAll('th');

tableHeaders[0].innerHTML = 'ID';
tableHeaders[1].innerHTML = 'First Name';
tableHeaders[2].innerHTML = 'Last Name';
tableHeaders[3].innerHTML = 'Department';
tableHeaders[4].innerHTML = 'Client';

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var data = [];
var rows = document.querySelectorAll('tbody tr');

rows.forEach(function(row) {
    var object = {};
    object.id = Number(row.children[0].innerText.replace(/,/g, ''));
    object.firstName = row.children[1].innerText;
    object.lastName = row.children[2].innerText;
    object.department = row.children[3].innerText;
    object.client = row.children[4].innerText;
})

// 10. Make each word in the table capitalized.
var tableWords = document.querySelectorAll('td');

tableWords.forEach(function(tableWord) {
    tableWord.style.textTransform = "capitalize";
})
