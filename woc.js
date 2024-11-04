const apiKey = "914df9bf8fcd60ef818bc64b8aac24dd";
const img_url = "https://image.tmdb.org/t/p/w500";
const baseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
const movieGrid = document.getElementById("movieGrid");

function searchMovies() {
  const movieTitle = document.getElementById("movieTitle").value;

  if (movieTitle.trim() === "") {
    alert("Please enter a movie title.");
    return;
  }

  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const movieResults = document.getElementById("movieGrid4");

      if (data.results && data.results.length > 0) {
        data.results.forEach((result) => {
          const posterUrl = `https://image.tmdb.org/t/p/w500${result.poster_path}`;

          const alpha = document.createElement("div");
          alpha.classList.add("movieCard");
          alpha.innerHTML = `
              <div class="moviecard4">
                
                
              <img src="${posterUrl}" alt="No poster available" class="moviePoster4">
              <div>
               <div class="movie-info"><br>
                  <a href="" class="Title"> <h6>${result.title}</h6></a>
                   </div>
                   </div>
                
              </div>

            `;

          const moviePoster = document.createElement("img");
          moviePoster.classList.add("moviePoster");
          moviePoster.src = `https://image.tmdb.org/t/p/w500${result.poster_path}`;
          moviePoster.innerText = alpha.poster;

          movieResults.appendChild(alpha);

          alpha.onclick = function () {
            localStorage.setItem("selectedMovieTitle", result.title);
            localStorage.setItem("selectedMovieOverview", result.overview);
            localStorage.setItem("selectedMoviePoster", moviePoster.src);
            localStorage.setItem("selectedMovieRating", result.vote_average);
            localStorage.setItem(
              "selectedMovieReleaseDate",
              result.release_date
            );
            window.location.href = "movie-details.html";
          };
        });
      } else {
        alert("No results found for the entered movie title.");
      }
    })
    .catch((error) => console.error("Error:", error));
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleDiv() {
  var myDiv = document.getElementById("movieGrid4");

  if (myDiv.style.display === "none") {
    myDiv.style.display = "grid";
  } else {
    myDiv.style.display = "none";
  }
}

const fetchPopular = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  fetchPopular
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const movies = data.results;
    const movieGrid = document.querySelector(".movieGrid");

    movies.forEach((movie) => {
      const { title, overview, poster_path, genre_ids } = movie;
      const alpha = document.createElement("div");
      alpha.classList.add("movieCard2");
      alpha.innerHTML = ` 
       <img src="${img_url + poster_path}" alt="" class="moviePoster">
      <div>
       <div class="movie-info"><br>
          <a href="" class="Title"> <h6>${title}</h6></a>
           </div>
           </div>
           `;

      const starIcon = document.createElement("span");
      starIcon.className = "star";
      starIcon.innerHTML = "⭐";

      const moviePoster = document.createElement("img");
      moviePoster.classList.add("moviePoster");
      moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const movieTitle = document.createElement("div");
      movieTitle.classList.add("movieTitle");
      movieTitle.innerText = alpha.title;

      alpha.appendChild(starIcon);
      movieGrid.appendChild(alpha);

      alpha.onclick = function () {
        localStorage.setItem("selectedMovieTitle", movie.title);
        localStorage.setItem("selectedMovieOverview", movie.overview);
        localStorage.setItem("selectedMoviePoster", moviePoster.src);
        localStorage.setItem("selectedMovieRating", movie.vote_average);
        localStorage.setItem("selectedMovieReleaseDate", movie.release_date);
        window.location.href = "movie-details.html";
      };
    });
  })
  .catch((error) => {
    console.error("error fetching movies", error);
  });

const fetchTopRated = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  fetchTopRated
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const movies = data.results;
    const movieGrid2 = document.querySelector(".movieGrid2");

    movies.forEach((movie) => {
      const { title, overview, poster_path, genre_ids } = movie;
      const beta = document.createElement("div");
      beta.classList.add("movieCard2");
      beta.innerHTML = ` 
         <img src="${img_url + poster_path}" alt="" class="moviePoster2">
        <div>
         <div class="movie-info"><br>
            <a href="" class="Title"> <h6>${title}</h6></a>
             </div>
             </div>
             `;

      const moviePoster = document.createElement("img");
      moviePoster.classList.add("moviePoster2");
      moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const movieTitle = document.createElement("div");
      movieTitle.classList.add("movieTitle2");
      movieTitle.innerText = beta.title;

      movieGrid2.appendChild(beta);

      beta.onclick = function () {
        localStorage.setItem("selectedMovieTitle", movie.title);
        localStorage.setItem("selectedMovieOverview", movie.overview);
        localStorage.setItem("selectedMoviePoster", moviePoster.src);
        localStorage.setItem("selectedMovieRating", movie.vote_average);
        localStorage.setItem("selectedMovieReleaseDate", movie.release_date);
        window.location.href = "movie-details.html";
      };
    });
  })
  .catch((error) => {
    console.error("error fetching movies", error);
  });

const fetchUpcoming = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  fetchUpcoming
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.results.forEach(function (genre) {
      let genrearray = genre.genre_ids;
      for (let i in genrearray) {
        if (genrearray[i] == 28) {
          document.getElementsByClassName("moviecard4").innerHTML = `
            <h2 class="header4">Drama Movies</h2>

            <div class="movieGrid4" id="movieGrid4">
              <div class="moviecar4">
                <div>
                  <img src="spiderman.jpg" alt="" class="moviePoster4" />
                </div>
                <div>
                  <div class="movie-info">
                    <br />
                    <a href="" class="Title"><h6>Spider-Man: No Way Home</h6></a>
                  </div>
                </div>
              </div>
            </div>
            `;
        } else {
          continue;
        }
      }
    });

    const movies = data.results;
    const movieGrid3 = document.querySelector(".movieGrid3");

    movies.forEach((movie) => {
      const { title, overview, poster_path, genre_ids } = movie;
      const gamma = document.createElement("div");
      gamma.classList.add("movieCard2");
      gamma.innerHTML = ` 
        <img src="${img_url + poster_path}" alt="" class="moviePoster3">
       <div>
        <div class="movie-info"><br>
           <a href="" class="Title"> <h6>${title}</h6></a>
            </div>
            </div>
            `;

      const moviePoster = document.createElement("img");
      moviePoster.classList.add("moviePoster3");
      moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      const movieTitle = document.createElement("div");
      movieTitle.classList.add("movieTitle2");
      movieTitle.innerText = gamma.title;

      movieGrid3.appendChild(gamma);

      gamma.onclick = function () {
        localStorage.setItem("selectedMovieTitle", movie.title);
        localStorage.setItem("selectedMovieOverview", movie.overview);
        localStorage.setItem("selectedMoviePoster", moviePoster.src);
        localStorage.setItem("selectedMovieRating", movie.vote_average);
        localStorage.setItem("selectedMovieReleaseDate", movie.release_date);
        window.location.href = "movie-details.html";
      };
    });
  })
  .catch((error) => {
    console.error("error fetching movies", error);
  });

var mov = document.getElementsByClassName("moviecard");
mov[0].style.display = "none";

var mov1 = document.getElementsByClassName("moviecard2");
mov1[0].style.display = "none";

var mov2 = document.getElementsByClassName("moviecard3");
mov2[0].style.display = "none";

var mov3 = document.getElementsByClassName("moviecard4");
mov3[0].style.display = "none";

const fetchTOP = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM",
  },
};

const fetchNowplaying = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM",
  },
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM",
  },
};

const toprated = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM",
  },
};

const horror = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM",
  },
};

const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const apiUrl2 =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

function fetchDramaMovies() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const movieContainer = document.getElementById("movieGrid4");

      movieContainer.innerHTML = "";

      data.results
        .forEach((movie) => {
          const genres = movie.genre_ids;
          const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
          const title = movie.title;

          const moviePoster = document.createElement("img");
          moviePoster.classList.add("moviePoster");
          moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

          if (genres.includes(18)) {
            const moviecard4 = document.createElement("div");
            moviecard4.className = "moviecard4";
            moviecard4.innerHTML = `
                

                <img src="${posterUrl}" alt="" class="moviePoster">
       <div>
        <div class="movie-info"><br>
           <a href="" class="Title"> <h6>${title}</h6></a>
            </div>
            </div>
              `;
            movieContainer.appendChild(moviecard4);

            moviecard4.onclick = function () {
              localStorage.setItem("selectedMovieTitle", movie.title);
              localStorage.setItem("selectedMovieOverview", movie.overview);
              localStorage.setItem("selectedMoviePoster", moviePoster.src);
              localStorage.setItem("selectedMovieRating", movie.vote_average);
              localStorage.setItem(
                "selectedMovieReleaseDate",
                movie.release_date
              );
              window.location.href = "movie-details.html";
            };
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
}

function fetchHorrorMovies() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const movieContainer = document.getElementById("movieGrid4");

      movieContainer.innerHTML = "";

      data.results
        .forEach((movie) => {
          const genres = movie.genre_ids;
          const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
          const title = movie.title;

          if (genres.includes(27)) {
            const moviePoster = document.createElement("img");
            moviePoster.classList.add("moviePoster");
            moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

            const moviecard4 = document.createElement("div");
            moviecard4.className = "moviecard4";
            moviecard4.innerHTML = `
                      
      
                      <img src="${posterUrl}" alt="" class="moviePoster">
             <div>
              <div class="movie-info"><br>
                 <a href="" class="Title"> <h6>${title}</h6></a>
                  </div>
                  </div>
                    `;
            movieContainer.appendChild(moviecard4);

            moviecard4.onclick = function () {
              localStorage.setItem("selectedMovieTitle", movie.title);
              localStorage.setItem("selectedMovieOverview", movie.overview);
              localStorage.setItem("selectedMoviePoster", moviePoster.src);
              localStorage.setItem("selectedMovieRating", movie.vote_average);
              localStorage.setItem(
                "selectedMovieReleaseDate",
                movie.release_date
              );
              window.location.href = "movie-details.html";
            };
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
}

function fetchActionMovies() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const movieContainer = document.getElementById("movieGrid4");

      movieContainer.innerHTML = "";

      data.results
        .forEach((movie) => {
          const genres = movie.genre_ids;
          const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
          const title = movie.title;

          if (genres.includes(28)) {
            const moviePoster = document.createElement("img");
            moviePoster.classList.add("moviePoster");
            moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

            const moviecard4 = document.createElement("div");
            moviecard4.className = "moviecard4";
            moviecard4.innerHTML = `
                      
      
                      <img src="${posterUrl}" alt="" class="moviePoster">
             <div>
              <div class="movie-info"><br>
                 <a href="" class="Title"> <h6>${title}</h6></a>
                  </div>
                  </div>
                    `;
            movieContainer.appendChild(moviecard4);

            moviecard4.onclick = function () {
              localStorage.setItem("selectedMovieTitle", movie.title);
              localStorage.setItem("selectedMovieOverview", movie.overview);
              localStorage.setItem("selectedMoviePoster", moviePoster.src);
              localStorage.setItem("selectedMovieRating", movie.vote_average);
              localStorage.setItem(
                "selectedMovieReleaseDate",
                movie.release_date
              );
              window.location.href = "movie-details.html";
            };
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
}

function fetchCrimeMovies() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const movieContainer = document.getElementById("movieGrid4");

      movieContainer.innerHTML = "";

      data.results
        .forEach((movie) => {
          const genres = movie.genre_ids;
          const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
          const title = movie.title;

          if (genres.includes(80)) {
            const moviePoster = document.createElement("img");
            moviePoster.classList.add("moviePoster");
            moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

            const moviecard4 = document.createElement("div");
            moviecard4.className = "moviecard4";
            moviecard4.innerHTML = `
                          
          
                          <img src="${posterUrl}" alt="" class="moviePoster">
                 <div>
                  <div class="movie-info"><br>
                     <a href="" class="Title"> <h6>${title}</h6></a>
                      </div>
                      </div>
                        `;
            movieContainer.appendChild(moviecard4);

            moviecard4.onclick = function () {
              localStorage.setItem("selectedMovieTitle", movie.title);
              localStorage.setItem("selectedMovieOverview", movie.overview);
              localStorage.setItem("selectedMoviePoster", moviePoster.src);
              localStorage.setItem("selectedMovieRating", movie.vote_average);
              localStorage.setItem(
                "selectedMovieReleaseDate",
                movie.release_date
              );
              window.location.href = "movie-details.html";
            };
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
}

function fetchThrillerMovies() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const movieContainer = document.getElementById("movieGrid4");

      movieContainer.innerHTML = "";

      data.results
        .forEach((movie) => {
          const genres = movie.genre_ids;
          const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
          const title = movie.title;

          if (genres.includes(53)) {
            const moviePoster = document.createElement("img");
            moviePoster.classList.add("moviePoster");
            moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

            const moviecard4 = document.createElement("div");
            moviecard4.className = "moviecard4";
            moviecard4.innerHTML = `
                              
              
                              <img src="${posterUrl}" alt="" class="moviePoster">
                     <div>
                      <div class="movie-info"><br>
                         <a href="" class="Title"> <h6>${title}</h6></a>
                          </div>
                          </div>
                            `;
            movieContainer.appendChild(moviecard4);

            moviecard4.onclick = function () {
              localStorage.setItem("selectedMovieTitle", movie.title);
              localStorage.setItem("selectedMovieOverview", movie.overview);
              localStorage.setItem("selectedMoviePoster", moviePoster.src);
              localStorage.setItem("selectedMovieRating", movie.vote_average);
              localStorage.setItem(
                "selectedMovieReleaseDate",
                movie.release_date
              );
              window.location.href = "movie-details.html";
            };
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
}

const apiUrl3 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

function fetchRomanceMovies() {
  fetch(apiUrl3)
    .then((response) => response.json())
    .then((data) => {
      const movieContainer = document.getElementById("movieGrid4");

      movieContainer.innerHTML = "";

      data.results
        .forEach((movie) => {
          const genres = movie.genre_ids;
          const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
          const title = movie.title;

          if (genres.includes(10749)) {
            const moviePoster = document.createElement("img");
            moviePoster.classList.add("moviePoster");
            moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

            const moviecard4 = document.createElement("div");
            moviecard4.className = "moviecard4";
            moviecard4.innerHTML = `
                                  
                  
                                  <img src="${posterUrl}" alt="" class="moviePoster">
                         <div>
                          <div class="movie-info"><br>
                             <a href="" class="Title"> <h6>${title}</h6></a>
                              </div>
                              </div>
                                `;
            movieContainer.appendChild(moviecard4);

            moviecard4.onclick = function () {
              localStorage.setItem("selectedMovieTitle", movie.title);
              localStorage.setItem("selectedMovieOverview", movie.overview);
              localStorage.setItem("selectedMoviePoster", moviePoster.src);
              localStorage.setItem("selectedMovieRating", movie.vote_average);
              localStorage.setItem(
                "selectedMovieReleaseDate",
                movie.release_date
              );
              window.location.href = "movie-details.html";
            };
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
}

const addToWatchlist = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTRkZjliZjhmY2Q2MGVmODE4YmM2NGI4YWFjMjRkZCIsInN1YiI6IjY1N2RkOTk4YzkwNTRmMDZjY2I1NzgwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ3yOMMwoaBpFHhBuaYcIyYEPWi262RveuThxqmJxkM",
  },
};


function toggleNavbar() {
  var navbar = document.getElementById("myTopnav");
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }
}

