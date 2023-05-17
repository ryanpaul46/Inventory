const Name = document.getElementById('Name')
const Email = document.getElementById('Email')
const submitButton = document.getElementById('submitBtn')

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    const url = 'https://sheetdb.io/api/v1/m3bchahb4l4ak';
    const data = {
      Name: document.getElementById('Name').value,
      Email: document.getElementById('Email').value
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Data posted successfully:', result);
       
      })
      .catch(error => {
        console.error('Error:', error);
       
      });
  });