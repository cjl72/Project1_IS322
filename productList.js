(function () {
    var mockDB = [
        { make: 'BMW', model: 'M2', year: '2021', price: 70000},
        { make: 'Audi', model: 'RS5', year: '2021', price: 100000},
        { make: 'BMW', model: 'M4', year: '2021', price: 100000},
        { make: 'Mercedes', model: 'AMG GT', year: '2021', price: 400000},
        { make: 'BMW', model: 'i8', year: '2021', price: 150000},
        { make: 'Porsche', model: '911 Turbo', year: '2021', price: 170000},
        { make: 'Lamborghini', model: 'Huracan', year: '2021', price: 230000},
        { make: 'BMW', model: '7 Series', year: '2021', price: 100000},
        { make: 'Aston Martin', model: 'Vantage', year: '2021', price: 140000},
    ];

    function renderList (results) {
        var items = document.querySelector('#products');
        items.innerHTML = '';
        var cars = results.map(function (result) {
            return (result.year + " " + row.model + " " + row.make + " $" + row.price.toString())
        })
        cars.forEach(function (row) {
            var newDiv = document.createElement("div");
            newDiv.className = 'card';
            toAdd.appendChild(newDiv)
        });
    }

    renderList(mockDB);

})();