// ---------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------- GENERAL ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------


const pathInitContent = "reports/init-content.html"

function fetchContent(url, sourceId, targetId) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(xhr.responseText, 'text/html');
            document.getElementById(targetId).innerHTML = doc.getElementById(sourceId).innerHTML;
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

function updateDivContentWithFunction(targetId, contentFunction) {
    const content = contentFunction();
    const targetDiv = document.getElementById(targetId);
    if (targetDiv) {
        targetDiv.innerHTML = content;
    }
}

function updateDivContentWithContent(array, targetId) {
    let targetDiv = document.getElementById(targetId);
    if (targetDiv) {
        targetDiv.innerHTML = array.join(' '); // Join array elements with a space
    }
}

function changeCurrentReport(src) {
    handleLabChange(src)
}

function handleLabChange(value) {
    let sourceId = value + "-sidebar"
    fetchContent(pathInitContent, sourceId, "side-btn-wrapper");
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB1 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab1 = "reports/lab1.html"

function lab1LoadFirstArticle() {
    fetchContent(pathLab1, "p1", "output");
}

function lab1LoadSecondArticle() {
    fetchContent(pathLab1, "p2", "output");
}

function lab1LoadThirdArticle() {
    fetchContent(pathLab1, "p3-btn", "side-btn-wrapper");
}

function lab1LoadThirdArticlePart1() {
    fetchContent(pathLab1, "p3-1", "output");
}

function lab1LoadThirdArticlePart2() {
    fetchContent(pathLab1, "p3-2", "output");
}

function lab1LoadThirdArticlePart3() {
    fetchContent(pathLab1, "p3-3", "output");
}

function lab1BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab1-sidebar", "side-btn-wrapper");
}


function lab1LoadFourthArticle() {
    fetchContent(pathLab1, "lab1-conclusion", "output");
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB2 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab2 = "reports/lab2.html"

function lab2LoadFirstArticle() {
    fetchContent(pathLab2, "p1", "output");
}

function lab2LoadSecondArticle() {
    fetchContent(pathLab2, "p2", "output");
}

function lab2LoadThirdArticle() {
    fetchContent(pathLab2, "p3-btn", "side-btn-wrapper");
}

function lab2LoadThirdArticlePart1() {
    fetchContent(pathLab2, "p3-1", "output");
}

function lab2LoadThirdArticlePart2() {
    fetchContent(pathLab2, "p3-2", "output");
}

function lab2LoadThirdArticlePart3() {
    fetchContent(pathLab2, "p3-3", "output");
}

function lab2LoadFourthArticlePart4() {
    fetchContent(pathLab2, "p3-4", "output");
}

function lab2BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab2-sidebar", "side-btn-wrapper");
}

function lab2LoadFourthArticle() {
    fetchContent(pathLab2, "p4", "output");
}

function lab2LoadFifthArticle() {
    fetchContent(pathLab2, "lab2-conclusion", "output");
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB3 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

const pathLab3 = "reports/lab3.html"

function lab3LoadFirstArticle() {
    fetchContent(pathLab3, "p1", "output");
}

function lab3LoadSecondArticle() {
    fetchContent(pathLab3, "p2", "output")
}

function lab3LoadThirdArticle() {
    fetchContent(pathLab3, "p3-btn", "side-btn-wrapper");
}

function lab3LoadThirdArticlePart1() {
    fetchContent(pathLab3, "p3-1", "output");
}

function lab3LoadThirdArticlePart2() {
    fetchContent(pathLab3, "p3-2", "output");
}

function lab3LoadThirdArticlePart3() {
    fetchContent(pathLab3, "p3-3", "output");
}

function lab3LoadFourthArticlePart4() {
    fetchContent(pathLab3, "p3-4", "output");
}

function lab3BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab3-sidebar", "side-btn-wrapper");
}

function lab3LoadFourthArticle() {
    fetchContent(pathLab3, "p4-sidebar", "side-btn-wrapper")
}

function lab3LoadFourthArticlePart1() {
    fetchContent(pathLab3, "p4-1", "output");
}

function lab3LoadFourthArticlePart2() {
    fetchContent(pathLab3, "p4-2", "output");
}

function lab3LoadFourthArticlePart3() {
    fetchContent(pathLab3, "p4-3", "output");
}

function lab3LoadConclusions() {
    fetchContent(pathLab3, "lab3-conclusions", "output")
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB4 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
const pathLab4 = "reports/lab4.html"

function lab4LoadFirstArticle() {
    fetchContent(pathLab4, "p1", "output");
}

function lab4LoadSecondArticle() {
    fetchContent(pathLab4, "p2", "output");
}

function lab4LoadThirdArticle() {
    fetchContent(pathLab4, "p3", "output");
}

function lab4LoadFourthArticle() {
    fetchContent(pathLab4, "p4", "output");
}

function lab4LoadConclusions() {
    fetchContent(pathLab4, "lab4-conclusions", "output")
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB5 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
const pathLab5 = "reports/lab5.html"
let arr;
let counter = 0

function lab5LoadFirstArticle() {
    fetchContent(pathLab5, "p1", "output");
}

function lab5LoadSecondArticle() {
    fetchContent(pathLab5, "p2", "output")
}

function lab5LoadThirdArticle() {
    fetchContent(pathLab5, "p3-btn", "side-btn-wrapper");
}

function lab5LoadFourthArticle() {
    fetchContent(pathLab5, "p4", "output");
}

function lab5LoadConclusions() {
    fetchContent(pathLab5, "lab5-conclusions", "output")
}

function lab5BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab5-sidebar", "side-btn-wrapper");
}

function lab5GenArr() {
    arr = generateRandomArray(100);
    updateDivContentWithContent(arr, "output");
}

function lab5findMinElemAndWriteAtStartOfArr() {
    moveMinToFront(arr, counter)
    counter++
    updateDivContentWithContent(arr, "output")
}

function lab5SortArr() {
    selectionSort(arr)
    updateDivContentWithContent(arr, "output")
}

function generateRandomArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array
}

function moveMinToFront(array, startIndex) {
    let minIndex = startIndex;
    for (let i = startIndex + 1; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
        }
    }
    const minValue = array[minIndex];
    array.splice(minIndex, 1);
    array.splice(startIndex, 0, minValue);
}

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        moveMinToFront(array, i);
    }
}

function addTooltip() {
    const tooltipText = document.getElementById('tooltipText').value;
    const targetElementId = document.getElementById('targetElementId').value;
    const targetElement = document.getElementById(targetElementId);

    if (targetElement) {
        // Create a span element for the tooltip text
        const span = document.createElement('span');
        span.classList.add('tooltiptext');
        span.textContent = tooltipText;

        // Wrap the target element with a tooltip container
        const wrapper = document.createElement('div');
        wrapper.classList.add('tooltip');
        targetElement.parentNode.insertBefore(wrapper, targetElement);
        wrapper.appendChild(targetElement);
        wrapper.appendChild(span);
    } else {
        alert('Елемент з вказаним ID не знайдено.');
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB5-1 -------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
const pathLab5_1 = "reports/lab5-1.html"

function lab5_1_LoadFirstArticle() {
    fetchContent(pathLab5_1, "p1", "output");
}

function lab5_1_LoadSecondArticle() {
    fetchContent(pathLab5_1, "p2", "output")
}

function lab5_1_LoadThirdArticle() {
    fetchContent(pathLab5_1, "p3-btn", "side-btn-wrapper");
}

function lab5_1_LoadConclusions() {
    fetchContent(pathLab5_1, "lab5-1-conclusions", "output")
}

function lab5_1BackAndLoadSidebar() {
    fetchContent(pathInitContent, "lab5-1-sidebar", "side-btn-wrapper");
}

function lab5_1_Load_3_2() {
    fetchContent(pathLab5_1, "p3-2", "output")
}

function lab5_1_Load_3_4() {
    fetchContent(pathLab5_1, "p3-4", "output")
    showInitialData();
}

function lab5_1_Load_3_6() {
    fetchContent(pathLab5_1, "p3-6", "output")
    showOriginalMedicines();
}

function lab5_1_Load_3_8() {
    fetchContent(pathLab5_1, "p3-8", "output")
    
}

function lab5_1_Load_3_10() {
    fetchContent(pathLab5_1, "p3-10", "output")
}

// TASK 2
function getProductDetails(productId, successCallback, errorCallback) {
    // Перевірка, чи існує товар з вказаним ідентифікатором productId
    var products = {
        1: {id: 1, name: "Product 1", price: 10},
        2: {id: 2, name: "Product 2", price: 20},
        3: {id: 3, name: "Product 3", price: 30}
    };

    var product = products[productId];

    // Якщо товар існує, передаємо його деталі в successCallback
    if (product) {
        successCallback(product);
    } else {
        // Якщо товар не знайдено, викликаємо errorCallback з повідомленням про помилку
        errorCallback("Товар з ідентифікатором " + productId + " не знайдено");
    }
}

// Приклад функції getProductById, яка повертає деталі товару за його ідентифікатором
function getProductById(productId) {
    var products = {
        1: {id: 1, name: "Product 1", price: 10},
        2: {id: 2, name: "Product 2", price: 20},
        3: {id: 3, name: "Product 3", price: 30}
    };

    return products[productId];
}

function getDetails() {
    var productId = document.getElementById("productIdInput").value;

    // Викликаємо функцію getProductDetails з відповідними колбеками
    getProductDetails(productId,
        // Колбек для успішного виконання
        function (product) {
            // Відображаємо деталі товару
            document.getElementById("result").innerHTML = "<pre>" + JSON.stringify(product, null, 2) + "</pre>";
        },
        // Колбек для помилки
        function (errorMessage) {
            // Відображаємо повідомлення про помилку
            document.getElementById("result").innerHTML = "<p style='color: red;'>" + errorMessage + "</p>";
        }
    );
}

// TASK 4
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

function showAllCities() {
    const citiesContainer = document.getElementById("citiesContainer");
    citiesContainer.innerHTML = ""; // Очистити контейнер

    const citiesList = document.createElement("ul");
    Object.keys(concerts).forEach((city, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${city}`;
        citiesList.appendChild(listItem);
    });

    citiesContainer.appendChild(citiesList);
}

function showUpcomingConcerts() {
    const citiesContainer = document.getElementById("citiesContainer");
    citiesContainer.innerHTML = ""; // Очистити контейнер

    const upcomingCitiesList = document.createElement("ul");
    Object.entries(concerts).forEach(([city, date], index) => {
        const currentDate = new Date();
        if (date > currentDate) {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${city}`;
            upcomingCitiesList.appendChild(listItem);
        }
    });

    citiesContainer.appendChild(upcomingCitiesList);
}

// TASK 6
const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

function showOriginalMedicines() {
    const medicinesContainer = document.getElementById("medicinesContainer");
    medicinesContainer.innerHTML = ""; // Очистити контейнер

    const originalList = document.createElement("ul");
    originalList.id = "originalList";
    medicines.forEach((medicine, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${medicine.name} - ${medicine.price} грн`;
        originalList.appendChild(listItem);
    });

    medicinesContainer.appendChild(originalList);
}

function applyDiscount() {
    const medicinesContainer = document.getElementById("medicinesContainer");
    medicinesContainer.innerHTML = ""; // Очистити контейнер

    const discountedList = document.createElement("ul");
    discountedList.id = "discountedList";
    const discountedMedicines = getDiscountedMedicines();
    discountedMedicines.forEach((medicine, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${medicine.name} - ${medicine.price} грн`;
        discountedList.appendChild(listItem);
    });

    medicinesContainer.appendChild(discountedList);
}

function showDiscountedMedicines() {
    const medicinesContainer = document.getElementById("medicinesContainer");
    medicinesContainer.innerHTML = ""; // Очистити контейнер

    const discountedList = document.createElement("ul");
    discountedList.id = "discountedList";
    const discountedMedicines = getDiscountedMedicines();
    discountedMedicines.forEach((medicine, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${medicine.name} - ${medicine.price} грн`;
        discountedList.appendChild(listItem);
    });

    medicinesContainer.appendChild(discountedList);
}

function getDiscountedMedicines() {
    return medicines.map((medicine, index) => {
        const discountedPrice = medicine.price > 300 ? medicine.price * 0.7 : medicine.price;
        return {
            id: index + 1,
            name: medicine.name,
            price: discountedPrice
        };
    });
}

// TASK 8
function Storage(initialItems) {
    this.items = initialItems;

    this.getItems = function() {
        return this.items;
    };

    this.addItem = function(item) {
        this.items.push(item);
    };

    this.removeItem = function(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
}

const initialItems = ["apple", "banana", "mango"];
const storage = new Storage(initialItems);

function displayItems() {
    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = ""; // Очищаємо вміст

    storage.getItems().forEach(item => {
        const listItem = document.createElement("div");
        listItem.textContent = item;
        itemsList.appendChild(listItem);
    });
}

function addItem() {
    const newItemInput = document.getElementById("newItemInput");
    const newItem = newItemInput.value.trim();
    if (newItem !== "") {
        storage.addItem(newItem);
        displayItems();
        newItemInput.value = ""; // Очищаємо поле вводу
    }
}

function showItems() {
    alert(storage.getItems().join(", "));
}

function clearItems() {
    storage.items = [];
    displayItems();
}

// TASK 10
function checkBrackets(str) {
    const stack = []; // Стек для відстеження відкритих дужок

    // Мапа для відображення відкриваючих і закриваючих дужок
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Перевірка кожного символу у рядку
    for (let char of str) {
        // Якщо символ - відкриваюча дужка, додаємо її до стеку
        if (bracketsMap[char]) {
            stack.push(char);
        }
        // Якщо символ - закриваюча дужка
        else if (char === ')' || char === '}' || char === ']') {
            // Перевіряємо, чи відповідає закриваюча дужка останній відкриваючій у стеку
            const lastOpeningBracket = stack.pop();
            if (!lastOpeningBracket || bracketsMap[lastOpeningBracket] !== char) {
                return false; // Неправильне закривання дужок
            }
        }
    }

    // Перевірка, чи всі відкриваючі дужки були правильно закриті
    return stack.length === 0;
}

function checkCode() {
    const codeInput = document.getElementById("codeInput");
    const code = codeInput.value.trim();
    const result = document.getElementById("result-10");

    if (checkBrackets(code)) {
        result.textContent = "Brackets are correct!";
        result.style.color = "green";
    } else {
        result.textContent = "Brackets are incorrect!";
        result.style.color = "red";
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB8 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
const pathLab8 = "reports/lab8.html"

function lab8LoadFirstArticle() {
    fetchContent(pathLab8, "p1", "output");
}

function lab8LoadSecondArticle() {
    fetchContent(pathLab8, "p2", "output");
}

function lab8LoadThirdArticle() {
    fetchContent(pathLab8, "p3", "output");
}

// ---------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------ LAB9 ---------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
const pathLab9 = "reports/lab9.html"

function lab9LoadFirstArticle() {
    fetchContent(pathLab9, "p1", "output");
}

function lab9LoadSecondArticle() {
    fetchContent(pathLab9, "p2", "output");
}

function lab9LoadThirdArticle() {
    fetchContent(pathLab9, "p3", "output");
}