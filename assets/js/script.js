// have api key
var weatherApi = "589cc8ea7477fcd844916816d2a6ed86";
var geoCode = "93B5F1C20C152244A14D2BEA382B7E9D";
var cityName = document.getElementById('search-city');

// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
// https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/locations?city={cityhere}&state={statehere}&dataset=Current

// https://api.openweathermap.org/data/2.5/uvi/forecast?lat={lat}&lon=“{lon}&appid={API KEY}&cnt=1



$(document).ready(function() {
    // list all global variables here
    // pull from local storage
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  
    // make function for saving the search based on the local storage
    function saveSearch() {
      var search = $('#search-city').val();
  
      if (search !== '') {
        searchHistory.push(search);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        $('#search-city').val('');

          showSearchHistory();
      }
    }
  
    function showSearchHistory() {
      var showHistory = $('#search-history');

      showHistory.empty();
  
      $.each(searchHistory, function(index, value) {
        var searchItem = $('<p>').text(value);
        showHistory.append(searchItem);
      });
    }

    // add click event so it'll happen on button click
    // later add function here so that weather event will happen
    function buttonClick() {
      saveSearch();
      
     console.log(cityName);

    }

    function clearHistory (){
      searchHistory = [];
      localStorage.removeItem("searchHistory");

      showSearchHistory();
    }
  
    // Add event listener for the search button click
    $('#search-btn').on('click', buttonClick);

    // Add event listener for the clear button click
    $('#clear-btn').on('click', clearHistory);
  
    showSearchHistory();


    // write function to get latitude and longitude
    "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"appid="+weatherApi+'"'
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApi}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let latitude = data.coord.lat;
      console.log(latitude)
      let longitude =data.coord.lon;
      console.log(longitude)
    });
  
    let object = {
    firstname: "Jay",
    occupation: "Gardener",
    Country: "USA",
    age: 57
    }

  

    let string = `Hello my name is ${object.firstname}, I am ${object.age} years old and i'm a ${object.occupation} from ${object.Country}.`

    console.log(string);

    // write function for current weather and day to display

    // fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}', {

    // })


    // need to use dayjs to show day

    // need function for future weather

    // need to fix previous searches so that they are clickable 


    
    // call to api using the URL based on location of object
    // use longitude and latitude from separate api
    // take what is delivered and parse it into the cards
    // two calls for two apis
    //  first call is for lat and long
    // the 2nd call will be fore the actual forecast
    // concat end of URL

    
    // don't forget the icon variables
    
  });


  