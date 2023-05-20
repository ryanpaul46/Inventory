const name = document.getElementById('Name')
const email = document.getElementById('email')
const displayButton = document.getElementById('displayBtn')
const sheetdbURL = 'https://sheetdb.io/api/v1/m3bchahb4l4ak'

function returnDataSheet(data) {
    fetch(sheetdbURL)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      getDataFromSheet();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }


displayButton.addEventListener('click',() =>{
  const displayResults = 
})
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');
  const API_KEY = "088685c2a67e77bd14b598ddd8d14d66";
  
  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) return;
  
    const url = `https://api.musixmatch.com/ws/1.1/track.search?q=${searchTerm}&apikey=${API_KEY}`;
  
  
    fetch(url)
    
      .then(response => response.json())
      .then(data => {
        const tracks = data.message.body.track_list;
        const html = tracks.map(track => `
          <div>
            <h2>${track.track.track_name}</h2>
            <p>By ${track.track.artist_name}</p>
            <a href="${track.track.track_share_url}" target="_blank">View Lyrics</a>
          </div>
        `).join('');
        console.log(data)
  
        searchResults.innerHTML = html;
      })
      .catch(error => {
        console.error(error);
        searchResults.innerHTML = '<p>Sorry, there was an error searching for lyrics. Please try again later.</p>';
      });
  });
  