const name = document.getElementById('Name')
const email = document.getElementById('Email')
const submitButton = document.getElementById('submitBtn')
const sheetdbURL = 'https://sheetdb.io/api/v1/m3bchahb4l4ak'

function addDataToSheet(data) {
    fetch(sheetdbURL)
    .then(response => response.json())
    .then(data => console.log(data)); 
  }

addDataToSheet();

