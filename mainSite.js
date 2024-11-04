const fetchTopRated = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM'
    }
  };
  
  const fetchNowplaying = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM'
    }
  };
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM'
    }
  };
  
  document.getElementById('showHorrorButton').addEventListener('click', function () {
    Promise.all([
      fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', fetchTopRated),
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', fetchNowplaying),
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    ])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(dataArray => {
        const combinedResults = dataArray.reduce((acc, data) => acc.concat(data.results), []);
        console.log(combinedResults);
  
        const movieGrid = document.getElementById('movieGrid4');
        movieGrid.innerHTML = '';
  
        combinedResults.forEach(function (movie) {
          if (movie.genre_ids.includes(27)) {
            const movieCard = document.createElement('div');
            movieCard.className = 'moviecard4';
  
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            img.alt = movie.title;
            img.className = 'moviePoster4';
  
            const movieInfo = document.createElement('div');
            movieInfo.className = 'movie-info';
            const titleLink = document.createElement('a');
            titleLink.href = '';
            titleLink.className = 'Title';
            titleLink.innerHTML = `<h6>${movie.title}</h6>`;
  
            movieInfo.appendChild(titleLink);
            movieCard.appendChild(img);
            movieCard.appendChild(movieInfo);
            movieGrid.appendChild(movieCard);
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });

  var mov3 = document.getElementsByClassName('moviecard4')
mov3[0].style.display='none'