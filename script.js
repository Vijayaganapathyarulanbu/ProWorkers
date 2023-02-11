function updateClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
  }
  
  setInterval(updateClock, 1000);

 const people = [
        {
          name: 'Brie Larson',
          position: 'Captain Marvel',
          image: 'https://w0.peakpx.com/wallpaper/669/678/HD-wallpaper-captain-marvel-avengers-endgame.jpg',
          startColor: '#ffbc00',
          endColor: '#ff0058',
        },
        {
          name: 'Tom Holland',
          position: 'Spider Man',
          image: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          startColor: '#ff0058',
          endColor: '#00d0ff',
        },
        {
          name: ' Mark Ruffalo',
          position: 'Hulk',
          image: 'https://w0.peakpx.com/wallpaper/19/205/HD-wallpaper-hulk-the-beast-avengers-endgame-marvel-powerful-superhero.jpg',
          startColor: '#00d0ff',
          endColor: '#4dff03',
        },
        {
          name: 'Oscar ',
          position: 'Moon Knight',
          image: 'https://w0.peakpx.com/wallpaper/990/176/HD-wallpaper-marvel-s-moon-knight.jpg',
          startColor: '#4dff03',
          endColor: '#ffbc00',
        },
        {
          name: 'Robert Downey Jr',
          position: 'Iron Man',
          image: 'https://w0.peakpx.com/wallpaper/933/680/HD-wallpaper-iron-man-iron-man-avengers-endgame-marvel-comics-marvel-superheroes-superheroes-marvel-infinity-gauntlet.jpg',
          startColor: '#ffbc00',
          endColor: '#ff0058',
        },
        {
          name: 'Chris Hemsworth',
          position: 'Thor',
          image: 'https://w0.peakpx.com/wallpaper/801/442/HD-wallpaper-thor-marvel.jpg',
          startColor: '#ff0058',
          endColor: '#00d0ff',
        },
      ];

      let box = document.getElementById('card-box');

      people.forEach((person, idx) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('key', idx);
        card.style.setProperty('--start', person.startColor);
        card.style.setProperty('--end', person.endColor);

        let b = document.createElement('b');
        card.appendChild(b);

        let image = document.createElement('img');
        image.src = person.image;
        card.appendChild(image);

        let content = document.createElement('div');
        content.classList.add('content');

        let name = document.createElement('h2');
        name.innerText = person.name;
        content.appendChild(name);

        let job = document.createElement('span');
        job.innerText = person.position;
        content.appendChild(job);

        let socials = document.createElement('ul');
        socials.classList.add('sci');
        socials.innerHTML = '<li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li><li><a href="#"><i class="fa-brands fa-twitter"></i></a></li><li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li><li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>';
        content.append(socials);

        card.append(content);
        box.append(card);
      });

      console.log(box);
  