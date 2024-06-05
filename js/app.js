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

function lab5LoadThirdArticlePart4() {
    fetchContent(pathInitContent, "p2-4", "side-btn-wrapper");
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