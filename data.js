let newProducts = [
    {
        id: 1,
        src: "images/product-1.jpg",
        name: "Red Printed T-shirt",
        price: "50.00",
    },
    {
        id: 2,
        src: "images/product-2.jpg",
        name: "Sport Shoes Black",
        price: "120.00",
    },
    {
        id: 3,
        src: "images/product-3.jpg",
        name: "Sports Pants",
        price: "40.00",
    },
    {
        id: 4,
        src: "images/product-4.jpg",
        name: "Black blue Printed T-shirt",
        price: "65.00",
    },
    {
        id: 5,
        src: "images/product-5.jpg",
        name: "Sport Shoes Grey",
        price: "150.00",
    },
    {
        id: 6,
        src: "images/product-6.jpg",
        name: "PUMA Short Sleeve Shirt",
        price: "59.00",
    },
    {
        id: 7,
        src: "images/product-7.jpg",
        name: "All Short Sport",
        price: "20.00",
    },
    {
        id: 8,
        src: "images/product-8.jpg",
        name: "Black Men Watch",
        price: "399.00",
    },
    {
        id: 9,
        src: "images/product-9.jpg",
        name: "Men Sports Watch",
        price: "450.00",
    },
    {
        id: 10,
        src: "images/product-10.jpg",
        name: "Genuine Sneakers",
        price: "200.00",
    },
    {
        id: 11,
        src: "images/product-11.jpg",
        name: "Goya Running Shoes",
        price: "90.00",
    },  
    {
        id: 12,
        src: "images/product-12.jpg",
        name: "Sports Pants",
        price: "75.00",
    },

]
let products = JSON.parse(localStorage.getItem("products")) || newProducts
let carts = JSON.parse(localStorage.getItem("carts")) || []

function addProduct() {
    let img = document.getElementById("img").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let id = products.length == 0 ? 1 : products[products.length - 1].id + 1;;
    let addproduct = {
        id: id,
        src: img,
        name: name,
        price: price,
    }
    products.push(addproduct);
    console.log(products);
    localStorage.setItem("products", JSON.stringify(products))
    alert("Sản phẩm được thêm vào")
    location.reload();
}



