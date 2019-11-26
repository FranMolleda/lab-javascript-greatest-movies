// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let movieYear = [...array];
  return movieYear.sort(function (movie1, movie2) {
    if (movie1.year < movie2.year) {
      return -1
    } else if (movie1.year > movie2.year) {
      return 1
    } else if (movie1.title < movie2.title) {
      return -1
    } else {
      return 1
    }

  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  return array.filter((movies) => movies.genre.includes('Drama') && movies.director === 'Steven Spielberg').length;
}



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let newArray = [...array];
  return newArray.sort(function (movie1, movie2) {
    if (movie1.title > movie2.title) {
      return 1
    } else if (movie1.title < movie2.title) {
      return -1
    }
  }).map(movie => movie.title).splice(0, 20)
}

//let students = schoolSystem.schools[0].classRooms[0].students

// Iteration 4: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let rates = array.reduce((ac, rate) => {
    if (typeof (rate.rate) != "number") {
      rate.rate = 0
    }
    return rate.rate + ac
  }, 0)
  return parseFloat((rates / array.length).toFixed(2));
}


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
  array = [...array]
  var arr = (array.filter((movies) => movies.genre.includes('Drama')).reduce((ac, rate) => {
    if (typeof (rate.rate) != "number") {
      rate.rate = 0
    }
    return rate.rate + ac
  }, 0) / array.length).toFixed(2)

  return +arr;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average