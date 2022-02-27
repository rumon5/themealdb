document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input');
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`)
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals));
});

const displayData = products => {
    console.log(products);
    const cardContainer = document.getElementById('card-container');
    for (const product of products) {
        console.log(product)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card">
                <img src="${product.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.strMeal}</h5>
                    <p class="card-text">${product.strInstructions.slice(0, 150)}</p>
                        <button type="button" class="btn btn-primary active">See details</button>
                </div>
            </div>
        `;
        cardContainer.appendChild(div);
    }
}