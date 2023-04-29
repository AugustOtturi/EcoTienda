const callApi = async () => {
    const res = await fetch('../json/products.json');
    const data = await res.json();

    for (let el of data) {
        let grid = document.getElementById('gridCards');
        let newCard = document.createElement('div');
        newCard.classList = 'productCard';
        newCard.innerHTML = `

                    <h3 class="productTitle">${el.nombre}</h3>
                    <img class="productImg" src="${el.imagen}" alt="Producto">
                    <p class="productDescription">${el.descripcion}</p>
                    <span class="productPrice">$${el.precio}</span>
                    <button class="productBtn">comprar</button>
                </div>

        
        `;
        grid.appendChild(newCard);
    }
};

callApi();
