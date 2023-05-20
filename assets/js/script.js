// make a function so that you can recall previous searches (make in get ready state)
$(function () {
    // list all global variables here
    // pull from local storage
    var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // make function for saving the search based on the local storage
    function saveSearch () {
        var search = $("search-city").val

        if (search !== "") {
            searchHistory.push(search);
            localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
            $("#search-city").val("");
           
            showSearchHistory()
        }
    }

    function showSearchHistory () {
        var showHistory = $("#search-history");
        showHistory.empty();
        $.each(searchHistory, function(index, value) {
            var searchItem = $("<p>").text(value);
            showHistory.append(searchItem);
        });
    }





})