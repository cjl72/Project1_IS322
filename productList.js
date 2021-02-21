(function () {
    var mockDB = [
        { make: 'BMW', model: 'M2', year: '2021', price: 70000, img: ''},
        { make: 'Audi', model: 'RS5', year: '2021', price: 100000, img: ''},
        { make: 'BMW', model: 'M4', year: '2021', price: 100000, img: ''},
        { make: 'Mercedes', model: 'AMG GT', year: '2021', price: 400000, img: ''},
        { make: 'BMW', model: 'i8', year: '2021', price: 150000, img: ''},
        { make: 'Porsche', model: '911 Turbo', year: '2021', price: 170000, img: ''},
        { make: 'Lamborghini', model: 'Huracan', year: '2021', price: 230000, img: ''},
        { make: 'BMW', model: '7 Series', year: '2021', price: 100000, img: ''},
        { make: 'Aston Martin', model: 'Vantage', year: '2021', price: 140000, img: ''},
    ];

    function renderList (results) {
        var items = document.querySelector('#products');
        var cars = results.map(function (result) {
            return (result.year + " " + result.model + " " + result.make + " $" + result.price.toString())
        })
        cars.forEach(function (row) {
            var newDiv = document.createElement("div");
            newDiv.className = 'card';
            newDiv.innerHTML = row.toString();
            items.appendChild(newDiv);
        });
    }

    renderList(mockDB);

})();