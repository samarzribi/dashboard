var products = [

{
    name : "Apple Watch Series 5",
    img : "../assets/applewatch.jpg",
    price : 2999000,
    sales : 3400 ,
    views : 50000 , 
    likes : 1000

},


{
    name : "iPhone 12 mini",
    img : "../assets/iphone-12-mini-green.jpg",
    price : 2999000,
    sales : 3400 ,
    views : 50000 , 
    likes : 1000

},
{
    name : "AirPods Max",
    img : "../assets/airpodsmax.jpg",
    price : 29000,
    sales : 36000 ,
    views : 50000 , 
    likes : 2000

},
{
    name : "Apple Pencil",
    img : "../assets/applepenc.jpg",
    price : 250000,
    sales : 3900 ,
    views : 50000 , 
    likes : 1000

},
{
    name : "iPhone XR",
    img : "../assets/iphone-xr.jpg",
    price : 278000,
    sales : 3400 ,
    views : 50000 , 
    likes : 700

},
{
    name : "Apple TV",
    img : "../assets/apple-tv.jpg",
    price : 360090,
    sales : 3400 ,
    views : 6300 , 
    likes : 1000

},
{
    name : "Magic Keyboard",
    img : "../assets/magicKeyboard.jpg",
    price : 15000,
    sales : 2000 ,
    views : 50000 , 
    likes : 6000

},
{
    name : "AirTag",
    img : "../assets/airtag.jpg",
    price : 59000,
    sales : 3500 ,
    views : 10000 , 
    likes : 4000

},
{
    name : "AirPods",
    img : "../assets/irPods.jpg",
    price : 1258964,
    sales : 1200 ,
    views : 20000 , 
    likes : 5113

},
{
    name : "Apple Watch SE",
    img : "../assets/APPLE-WATCH.jpg",
    price : 5248900,
    sales : 2200 ,
    views : 50000 , 
    likes : 6050

},
{
    name : "Smart Keyboard Folio",
    img : "../assets/smart.jpg",
    price : 150030,
    sales : 3400 ,
    views : 50000 , 
    likes : 5263

},
{
    name : "iPad Mini",
    img : "../assets/ipadmini.jpg",
    price : 540020,
    sales : 3400 ,
    views : 50000 , 
    likes : 920

},
{
    name : "Apple Watch Series 6",
    img : "../assets/applewatch.jpg",
    price : 2650012,
    sales : 3400 ,
    views : 50000 , 
    likes : 50

},
{
    name : "MacBook Air",
    img : "../assets/apple-macbook.jpg",
    price : 9500050,
    sales : 600 ,
    views : 50000 , 
    likes : 8000

},
{
    name : "iPhone 12",
    img : "../assets/iphone12.jpg",
    price : 500090,
    sales : 500 ,
    views : 50000 , 
    likes : 3000

},
{
    name : "AirPods Pro",
    img : "../assets/pro.jpg",
    price : 2980050,
    sales : 650 ,
    views : 50000 , 
    likes : 12530

},
{
    name : "Apple Watch Series 6",
    img : "../assets/watch.jpg",
    price : 658920000,
    sales : 65000 ,
    views : 6000000000 , 
    likes : 25000000

},
{
    name : "Apple Watch SE",
    img : "../assets/watch.jpg",
    price : 6800050,
    sales : 65000 ,
    views : 780000 , 
    likes : 20000

},
{
    name : "MacBook Pro",
    img : "../assets/macbookpro.jpg",
    price : 2999000,
    sales : 25000 ,
    views : 36006 , 
    likes : 120000

}
]
var productList = $(".productList")

function submit(arr) {
  if (productList) {
    arr.forEach((product) => {
      var productDiv = $("<div>").addClass("customer")
      productDiv.append($("<img>").attr("src", product.img).attr("alt", product.name))
      productDiv.append($("<p>").addClass("product-name").text(product.name))
      productDiv.append($("<p>").addClass("product-price").text("$" + product.price))
      productDiv.append($("<p>").addClass("product-sales").text("Sales: " + product.sales))
      productDiv.append($("<p>").addClass("product-views").text("Views: " + product.views))
      productDiv.append($("<p>").addClass("product-likes").text("Likes: " + product.likes))
      productDiv.append($("<button>").addClass("btn").text("delete"))
      productList.append(productDiv)
    })
  }
}

submit(products)

  
  function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}
function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}
function search() {
  var searchTerm = document.getElementById("search").value.toLowerCase();
  var filteredProducts = products.filter(function (product) {
    return product.name.toLowerCase().indexOf(searchTerm) !== -1;
  });
  console.log("filter", filteredProducts);
  var searchResultsList = document.getElementById("search-results");
  // Clear list
  searchResultsList.innerHTML = "";
  // Add to list
  filteredProducts.forEach(function (product) {
    var listItem = document.createElement("li");
    listItem.innerText = product.name;
    listItem.addEventListener("click", function () {
      location.href = "#getAll";
    });
    searchResultsList.appendChild(listItem);
  });
  // Display
  searchResultsList.style.display = "block";
}
var searchResults = document.getElementById("search-results");
searchResults.addEventListener("mouseleave", () => {
  searchResults.style.display = "none";
});

var deleteButtons = document.querySelectorAll(".btn");

deleteButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    var productL = document.querySelectorAll(".customer");
    productL[index].remove();
  });
});






