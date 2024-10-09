// var countryLinks = document.querySelectorAll("ul li[data-country-code]");
var categoryLinks = document.querySelectorAll("ul li[data-category]");
var myHttp = new XMLHttpRequest();
var allItems = [];
// var selectedCountry = "us"
var selectedCategory = "technology"


function getNews(category) {
    myHttp.open("GET", `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=018d178a2c8040328b9a0238c5370ef3`);
    myHttp.send();
    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4) {
            allItems = JSON.parse(myHttp.response).articles;
            displayItems()
        }
    });
} getNews(selectedCategory)

for (var i = 0; i < categoryLinks.length; i++) {
    categoryLinks[i].addEventListener("click", function (e) {
        selectedCategory = e.target.getAttribute("data-category");
        getNews(selectedCategory);
    });
}

    // for (var i = 0; i < countryLinks.length; i++) {
    //     countryLinks[i].addEventListener("click", function (e) {
    //         selectedCountry = e.target.getAttribute("data-country-code");
    //         getNews(selectedCountry, selectedCategory); 
    //     });
    // }


function formatDate(dateString) {
    const date = new Date(dateString);

    // Get time (hours and minutes)
    const hours = date.getHours().toString().padStart(2, '0'); // Ensures 2 digits
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensures 2 digits

    // Get day, month, and year
    const day = date.getDate().toString().padStart(2, '0'); // Day of the month
    const year = date.getFullYear(); // Full year

    // Define month names
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()]; // Get the month name

    // Return the formatted date string
    return `${hours}:${minutes} ${day}-${month}-${year}`;
}


function displayItems() {
    var container = ``;
    for (var i = 0; i < allItems.length; i++) {
        container += ` <div class="col-md-3">
                    <div class="card news-card">
                    <a href="${allItems[i].url}" target="_blank"><img src="${allItems[i].urlToImage}" class="card-img-top" alt="${allItems[i].source.name}" /></a>
                        <div class="card-body">
                            <p class="text-muted">${allItems[i].author}</p>
                            <h5 class="card-title">${allItems[i].title}</h5>
                            <p class="card-text">${allItems[i].description}</p>
                            <a href="${allItems[i].url}" target="_blank" class="btn btn-primary mt-auto">Read More</a>
                        </div>
                        <div class="card-footer text-muted">
                            Published: ${formatDate(allItems[i].publishedAt)}
                        </div>
                    </div>
                </div>`

    }
    document.getElementById("item").innerHTML = container;
}
