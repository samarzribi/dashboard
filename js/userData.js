var customers = [
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "John Smith",
    age: 35,
    emailAddress: "john.smith@gmail.com",
    productPurchase: [
      "iPhone 12",
      "AirPods Pro",
      "Apple Watch Series 6",
      "Apple Watch SE",
      "MacBook Pro",
    ],
    totalPurchase: 5000,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "Alice Johnson",
    age: 28,
    emailAddress: "alice.johnson@yahoo.com",
    productPurchase: ["iPad Air", "AirPods Max"],
    totalPurchase: 3000,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "Peter Lee",
    age: 42,
    emailAddress: "peter.lee@hotmail.com",
    productPurchase: [
      "iPhone 11",
      "AirPods",
      "Apple Watch Series 6",
      "Apple TV",
    ],
    totalPurchase: 2500,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "Sophia Davis",
    age: 24,
    emailAddress: "sophia.davis@gmail.com",
    productPurchase: [
      "MacBook Air",
      "iPhone SE",
      "Apple Watch Series 6",
      "AirPods Pro",
    ],
    totalPurchase: 3500,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "Jack Wang",
    age: 31,
    emailAddress: "jack.wang@yahoo.com",
    productPurchase: ["iPad Pro", "AirTag", "Magic Keyboard"],
    totalPurchase: 2000,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "Olivia Chen",
    age: 29,
    emailAddress: "olivia.chen@hotmail.com",
    productPurchase: ["iPhone XR", "AirPods Max", "Apple Pencil"],
    totalPurchase: 4000,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "William Liu",
    age: 38,
    emailAddress: "william.liu@gmail.com",
    productPurchase: [
      "MacBook Pro",
      "AirPods",
      "Magic Mouse",
      "iPad Mini",
      "Apple Watch SE",
      "Apple Watch SE",
    ],
    totalPurchase: 4500,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "Emily Yang",
    age: 27,
    emailAddress: "emily.yang@yahoo.com",
    productPurchase: [
      "iPhone 12 Pro",
      "Apple Watch SE",
      "iPad Mini",
      "AirPods",
    ],
    totalPurchase: 5500,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "Michael Huang",
    age: 33,
    emailAddress: "michael.huang@hotmail.com",
    productPurchase: ["iPad Mini", "AirPods Pro", "Smart Keyboard Folio"],
    totalPurchase: 3000,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "Jessica Wu",
    age: 25,
    emailAddress: "jessica.wu@gmail.com",
    productPurchase: ["iPhone 11 Pro", "Apple Watch Series 5", "AirPods Max"],
    totalPurchase: 6000,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "Daniel Zhang",
    age: 30,
    emailAddress: "daniel.zhang@yahoo.com",
    productPurchase: ["MacBook Air", "iPhone 12 mini", "AirPods"],
    totalPurchase: 3500,
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
    fullName: "Grace Li",
    age: 36,
    emailAddress: "grace.li@hotmail.com",
    productPurchase: ["iPad Air", "AirTag", "Magic Keyboard"],
    totalPurchase: 200,
  },
];

var deleteButtons = document.querySelectorAll("#deleteBtn");

deleteButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    var customerDivs = document.querySelectorAll(".customer");
    customerDivs[index].remove();
  });
});

var productList = document.querySelector(".customerList");

customers.forEach((customer) => {
  var customerDiv = document.createElement("div");
  customerDiv.classList.add("customer");
  customerDiv.innerHTML = `
    <img src="${customer.avatar}" alt="${customer.avatar}">
    <p id="customer-name">${customer.fullName}</p>
    <p id="customer-mail">${customer.emailAddress}</p>
    <p id="purchase">${customer.productPurchase.length}</p>
    <button class="Btn"  id="deleteBtn"><img id="iconBtn" width="22" height="22" src="https://img.icons8.com/material-rounded/24/filled-trash.png" alt="filled-trash"/></button>
    <button  class="Btn" id="editBtn"><img id="iconBtn" width="22" height="22" src="https://img.icons8.com/material-rounded/24/edit--v1.png" alt="edit--v1"/></button>
  `;
  productList.appendChild(customerDiv);
});

//get the product from the customers data
function getProduct(customers) {
  var uniqueProd = [];

  for (var i = 0; i < customers.length; i++) {
    for (var key in customers[i] ){
      for (var j = 0; j < customers[i][key].length; j++){
        //console.log("und",customers[i].productPurchase[j])
        if (!uniqueProd.includes(customers[i].productPurchase[j]) && typeof(customers[i].productPurchase[j])!== undefined){
          console.log("typeOf",typeof(customers[i].productPurchase[j])!== undefined)
          uniqueProd.push(customers[i].productPurchase[j]);
    
       
        }
      }
     
    }
    
    
  }
 // console.log(uniqueProd)
  return uniqueProd;
}

getProduct(customers);
console.log(customers)