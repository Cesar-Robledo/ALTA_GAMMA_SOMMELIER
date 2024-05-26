// Funciones para agregrar tarjetas de productos y carrito 
const shopcontent = document.getElementById("shopcontent");
const vercarrito = document.getElementById("vercarrito")

    let carrito = [];

    productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">$${product.precio}</p>
    `;
    shopcontent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    
    content.append(comprar);
    
    comprar.addEventListener("click", ()=>{
        alert ("Se agregará el producto al carrito, para la segunda entrega se habilitará la 5ta seccion en la que los productos se añadiran a la seccion SHOP")
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });
    });
    vercarrito.addEventListener("click", () =>{
    })


