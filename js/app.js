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