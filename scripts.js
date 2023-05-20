
const Name = document.getElementById('Name')
const Email = document.getElementById('Email')
const submitButton = document.getElementById('submitBtn')

document.getElementById('form').addEventListener(`submit`, function onChange(e) {
    e.preventDefault(); 
  
    const url = 'https://sheetdb.io/api/v1/m3bchahb4l4ak';
    const inputs = {
      Name: document.getElementById('Name').value,
      Email: document.getElementById('Email').value
    };
  axios.post(url, inputs) 
      .then(response => {console.log('Data posted successfully:', inputs);
      document.getElementById('Name').value = '';
      document.getElementById('Email').value = '';
      })
      .catch(error => {
        console.error('Error:', error);
      
        
      })
     

      
  });