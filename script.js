const loadAPI = () => {

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => getProducts(products))
}

const displayProduct = (product) => {
    return (`
    <div class="product">
        <img src="${product.image}" alt=""> 
        <h2>${product.title}</h2> 
        <h2>${product.category}</h2>
        <h2>${product.price}</h2>
    </div>
    
    `)
}

const getProducts = (products) => {

const displayProductUI = products.map((product) => (displayProduct(product))) // what to display

const conatainer = document.getElementById('products') //where to display

conatainer.innerHTML = displayProductUI.join(" ")
}



loadAPI()