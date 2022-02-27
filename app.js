document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input');
    const searchInputValue = searchInput.value;
    if (searchInputValue == '' || isNaN(searchInputValue) == false) {
        return alert('Please enter the product name!')
    }
    searchInput.value = '';
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`)
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals));
});

const displayData = products => {
    const mainContainer = document.getElementById('main-container');
    mainContainer.textContent = "";
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = "";
    for (const product of products) {
        console.log(product)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card">
                <img src="${product.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.strMeal}</h5>
                    <p class="card-text">${product.strInstructions.slice(0, 145)}</p>
                    <a href="#main-container" style="text-decoration: none;">
                    <button type="button" onclick="getDetailsId(${product.idMeal})" class="btn btn-primary active">See
                        details</button>
                </a>
                </div>
            </div>
        `;
        cardContainer.appendChild(div);
    }
}

const getDetailsId = id => {
    const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]))

}
const displayDetails = data => {
    console.log(data)
    const mainContainer = document.getElementById('main-container');
    mainContainer.textContent = "";
    const div = document.createElement('div');
    div.classList.add('bg-white')
    div.classList.add('text-black')
    div.classList.add('p-5')
    div.classList.add('rounded')
    div.innerHTML = `
    <img class="rounded"  style="max-height: 70vh; max-width: 70vh;" src="${data.strMealThumb}" alt="">    

    <h5 class="mt-2" >${data.strMeal}</h5>

    <h5 class="mt-2 text-success" >${data.strArea}</h5>

    <p>${data.strInstructions}</p>
    
    `;
    mainContainer.appendChild(div);
}