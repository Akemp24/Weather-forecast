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
  });