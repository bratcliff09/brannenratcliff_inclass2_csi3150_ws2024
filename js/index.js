async function init() {
    const cards = Array.from(document.getElementsByClassName("card"));
    cards.map(
        element => {
        findBtn(element, "open-btn")
        findBtn(element, "hide-btn");
        }
    );
}

//takes the specific card div, finds its open and hide buttons, and gives them functionality
function findBtn(elementA, btnClassName) {
    const btns = Array.from(elementA.getElementsByClassName(btnClassName));
    const result = Array.from(elementA.getElementsByClassName("card-result"));
    btns.map(element => {
        element.onclick = function() {
            showResult(result.at(0));
        }
    });
}

function showResult(elementA) {
    elementA.classList.toggle("open");
}

init();