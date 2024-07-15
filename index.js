document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById('dog-image-container');
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Existing code from Challenge 1
  
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById('dog-breeds');
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          dogBreedsList.appendChild(li);
        });
      });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Existing code from Challenge 1 and 2
  
    const dogBreedsList = document.getElementById('dog-breeds');
  
    // Add event listener to change font color on click
    dogBreedsList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // Change color as desired
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Existing code from Challenge 1, 2, and 3
  
    const dogBreedsList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
  
    breedDropdown.addEventListener('change', function(event) {
      const selectedLetter = event.target.value;
      const lis = dogBreedsList.getElementsByTagName('li');
  
      for (let i = 0; i < lis.length; i++) {
        const breedName = lis[i].textContent.toLowerCase();
        if (breedName.startsWith(selectedLetter)) {
          lis[i].style.display = 'block';
        } else {
          lis[i].style.display = 'none';
        }
      }
    });
  });
  