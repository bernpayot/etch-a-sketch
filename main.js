const cdiv = document.querySelector('#container');
cdiv.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("box")) {
        event.target.style.backgroundColor = changeBoxColor();
    }
});

function createBoxes(numberPerRow) {
    for (let i = 0; i < numberPerRow * numberPerRow; i++) {
        const div = document.createElement('div');
        div.classList.add("box");

        div.style.width = (700 / numberPerRow) + 'px';
        div.style.height = (700 / numberPerRow) + 'px';
        cdiv.appendChild(div);
    }
}

function changeBoxColor(e) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

function resetGrid() {
    const div = document.querySelectorAll('.box');
    div.forEach((d) => {
        cdiv.removeChild(d);
    })
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    let gridPrompt = parseInt(prompt("How many grids do you want? Maximum is 100"));
    if (gridPrompt <= 0 || gridPrompt > 100 || gridPrompt === null || gridPrompt === "") {
        alert("Invalid input, please try again!");
    } else {
        cdiv.innerHTML = '';
        createBoxes(gridPrompt);
    }
});

createBoxes(16);



  