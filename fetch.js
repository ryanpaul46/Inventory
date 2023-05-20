const fetchButton = document.getElementById('fetchBtn');
const dataResults = document.getElementById('data-container');

fetchButton.addEventListener(`click`, async (e) => {
  e.preventDefault();


    const url = 'https://sheetdb.io/api/v1/m3bchahb4l4ak';
  
axios.get(url)
      .then(data => console.log(data))
      
      
    });