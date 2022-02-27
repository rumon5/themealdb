document.getElementById('search-button').addEventListener('click', function () {
    const searchInputValue = document.getElementById('search-input').value;
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`)
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals))

});

const displayData = (data) => {
    console.log(data);
}