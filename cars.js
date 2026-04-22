// Student Number: 224062123

window.onload = function () {

    const makes = ["VW", "BMW", "Benz", "Audi", "Ford", "Toyota"];

    const makeList = document.getElementById("make-list");
    makes.forEach((make, index) => {
        let option = document.createElement("option");
        option.value = make;
        option.textContent = make;
        makeList.appendChild(option);
    });

    const cars = [
        { name: "Beetle", type: "Classic", make: "VW", img: "beetle.jpg" },
        { name: "Mustang", type: "Muscle", make: "Ford", img: "mustang.jpg" },
        { name: "Corolla", type: "Sedan", make: "Toyota", img: "corolla.jpg" },
        { name: "A4", type: "Sedan", make: "Audi", img: "a4.jpg" },
        { name: "C-Class", type: "Luxury", make: "Benz", img: "cclass.jpg" },
        { name: "M3", type: "Sport", make: "BMW", img: "m3.jpg" },
        { name: "Golf GTI", type: "Hatchback", make: "VW", img: "golf.jpg" },
        { name: "Supra", type: "Sport", make: "Toyota", img: "supra.jpg" }
    ];

    let currentCar = null;
    let correct = 0;
    let total = 0;

    const carName = document.getElementById("car-name");
    const carType = document.getElementById("car-type");
    const carImg = document.getElementById("car-img");
    const guessBtn = document.getElementById("guess-btn");

    const correctSpan = document.getElementById("correct");
    const totalSpan = document.getElementById("total");

    function getRandomCar() {
        return cars[Math.floor(Math.random() * cars.length)];
    }

    function displayCar(car) {
        carName.textContent = car.name;
        carType.textContent = car.type;
        carImg.src = car.img;
        carImg.classList.remove("hidden");
    }

    function loadNewCar() {
        currentCar = getRandomCar();
        displayCar(currentCar);
        guessBtn.classList.remove("disabled");
        guessBtn.disabled = false;
    }

    loadNewCar();

    guessBtn.onclick = function () {

        guessBtn.disabled = true;
        guessBtn.classList.add("disabled");

        let selectedMake = makeList.value;

        if (selectedMake === currentCar.make) {
            correct++;
            correctSpan.textContent = correct;
        }

        total++;
        totalSpan.textContent = total;

        loadNewCar();
    };
};