const products = [
    // card - 1
    {
        name: "Small Scindapsus Aureum - Devil’s Ivy- Pothos",
        img_url:
            "https://www.plantstore.ie/cdn/shop/products/Scindapsus_ff99fc67-bace-4efc-9e8b-d0811e2e131e.png?v=1636054528&width=1100",
        price: 1815,
        id: 0,
    },
    // card - 2
    {
        name: "Ficus Benjamina &quot;The Weeping Fig&quot; - Plant Store",
        img_url:
            "https://www.plantstore.ie/cdn/shop/products/monstera.png?v=1641565765&width=1100",
        price: 4510,
        id: 1,
    },
    // card - 3
    {
        name: "Medium Monstera deliciosa- Swiss Cheese Plant - 60cm",
        img_url:
            "https://www.plantstore.ie/cdn/shop/products/bostonfern.png?v=1641324387&width=1100",
        price: 1299,
        id: 2,
    },
    // card - 4
    {
        name: "Schefflera arboricola - Umbrella Tree 160cm",
        img_url:
            "https://www.plantstore.ie/cdn/shop/files/4SCAUHA19.png?v=1708437156&width=1100",
        price: 1499,
        id: 3,
    },
    // card - 5
    {
        name: "Pachira Aquatica - Plant Store",
        img_url:
            "https://www.plantstore.ie/cdn/shop/products/aglaonema1.png?v=1641321623&width=1100",
        price: 2499,
        id: 4,
    },
    // card - 6
    {
        name: "Large Scindapsus- Devil&",
        img_url:
            "https://www.plantstore.ie/cdn/shop/products/asparagus.png?v=1641578326&width=1100",
        price: 2510,
        id: 5,
    },

];

let cartCount = 0;
let totalSum = 0;
function addToCart(price) {
    console.log(price)
    cartCount++;
    totalSum = totalSum + price;
    document.getElementById("cart-total").innerText = cartCount;
    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("sum-total").innerText = totalSum;
}
function showProduct() {
    for (const product of products) {
        // console.log(product)
        const productCard = document.createElement("div")
        productCard.innerHTML = `
        <div class="card bg-base-100 shadow-md product-card">
                <figure class="px-10 pt-5">
                    <img class="w-100 h-100 mx-auto" class="" src="${product.img_url}" alt="Shoes"
                        class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">${product.name}</h2>
                    <div class="flex justify-center gap-3">
                        <p class="text-lg opacity-30 line-through">$200</p>
                        <p class="text-xl">$ ${product.price}</p>
                    </div>
                    <div class="card-actions">
                        <button onclick="addToCart(${product.price})" class="btn btn-success text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        `
        document.getElementById("product-container").append(productCard)
    }
    
}
showProduct()