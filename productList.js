(function () {
    var mockDB = [
        { make: 'BMW', model: 'M2', year: '2021', price: 70000, img: 'carPictures/M2.jpeg'},
        { make: 'Audi', model: 'RS5', year: '2021', price: 100000, img: 'carPictures/RS5.jpg'},
        { make: 'BMW', model: 'M4', year: '2021', price: 100000, img: 'carPictures/M4.jpg'},
        { make: 'Mercedes', model: 'AMG GT', year: '2021', price: 400000, img: 'carPictures/AMG.jpg'},
        { make: 'BMW', model: 'i8', year: '2021', price: 150000, img: 'carPictures/i8.jpg'},
        { make: 'Porsche', model: '911 Turbo', year: '2021', price: 170000, img: 'carPictures/911.jpg'},
        { make: 'Lamborghini', model: 'Huracan', year: '2021', price: 230000, img: 'carPictures/huracan.jpg'},
        { make: 'BMW', model: '7 Series', year: '2021', price: 100000, img: 'carPictures/7series.jpg'},
        { make: 'Aston Martin', model: 'Vantage', year: '2021', price: 140000, img: 'carPictures/vantage.jpg'},
    ];

    function renderList (results) {
        var items = document.querySelector('#products');
        var cars = results.map(function (result) {
            var newDiv = document.createElement("div");
            var img = document.createElement("img");
            img.src = result.img;
            newDiv.className = 'card';
            newDiv.appendChild(img);
            newDiv.innerHTML += (result.year + " " + result.model + " " + result.make + " Price - $" + result.price.toString());
            items.appendChild(newDiv);
        });
    }

    renderList(mockDB);

})();