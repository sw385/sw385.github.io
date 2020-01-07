
let amountOfRows = 2;
let amountOfColumns = 2;

// let palette = ["default", "algae", "pink", "copper", "red", "tango"]
// let colorIndex = 0;
//let currentColor = palette[colorIndex];
let numColors = 6;
let currentColor = "default";

let penDown = false;


function addRow() {
    // grab the main table and append a row to it with the same number of columns
    // add an id to the table so we can identify it
    let mainGrid = document.getElementById("main-grid");    // a reference to the grid
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    // make the row to be appended to the table on the DOM
    let newRow = document.createElement("tr");              // element is created, but not linked to DOM
    
    // populate the row with squares/cells aka TD elements
    // loop through the grid's amountofColumns
    for (let i = 0; i < amountOfColumns; i++) {
        var cell = document.createElement("td");
        cell.setAttribute("class", "default");
        cell.setAttribute("onclick", "this.className = currentColor");
        cell.setAttribute("onmousedown", "this.className = currentColor");
        newRow.appendChild(cell);                           // and appended to newRow
    }
    
    mainGrid.appendChild(newRow);                           // append newRow to mainGrid
    amountOfRows++;                                         // and update the count
};

function addColumn() {
    
    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    for (let i = 0; i < amountOfRows; i++) {
        var cell = document.createElement("td");
        cell.setAttribute("class", "default");
        cell.setAttribute("onclick", "this.className = currentColor");
        cell.setAttribute("onmousedown", "this.className = currentColor");
        mainGrid.rows[i].appendChild(cell); 
    }
    amountOfColumns++;
};

function removeRow() {

    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    if(amountOfRows > 2) {
        mainGrid.removeChild(mainGrid.lastChild);
        amountOfRows--;
    }
};

function removeColumn() {

    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    if(amountOfColumns > 2) {
    for (let i = 0; i < amountOfRows; i++) {
        mainGrid.rows[i].removeChild(mainGrid.rows[i].lastChild); 
    }
    amountOfColumns--;
    }   

};

// function cycleColor() {
    // colorIndex = (colorIndex + 1) % palette.length;
    // currentColor = palette[colorIndex];
// }

function updateSelectedColor() {
    if(document.getElementById("default").selected == true) {
        currentColor = "default";
    }
    else if(document.getElementById("algae").selected == true) {
        currentColor = "algae";
    }
    else if(document.getElementById("pink").selected == true) {
        currentColor = "pink";
    }
    else if(document.getElementById("copper").selected == true) {
        currentColor = "copper";
    }
    else if(document.getElementById("red").selected == true) {
        currentColor = "red";
    }
    else if(document.getElementById("tango").selected == true) {
        currentColor = "tango";
    }
}   

function clearCells() {

    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    
    var items = mainGrid.getElementsByTagName("td");
    for (let i = 0; i < items.length; i++) {
        items[i].className = "default";
    }
};

function fillAllCells() {

    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];

    
    var items = mainGrid.getElementsByTagName("td");
    for (let i = 0; i < items.length; i++) {
        items[i].className = currentColor;
    }
};

function fillEmptyCells() {

    // document.getElementsByTagName("tbody")[0]
    let mainGrid = document.getElementById("main-grid");
    mainGrid = mainGrid.getElementsByTagName("tbody")[0];
    
    
    var items = mainGrid.querySelectorAll("td.default");
    for (let i = 0; i < items.length; i++) {
        items[i].className = currentColor;
    }
}

document.addEventListener("mousedown", setPenDown);
document.addEventListener("mouseup", setPenUp);

function setPenDown() {
    penDown = true;
    console.log(penDown);
};

function setPenUp() {
    penDown = false;
    console.log(penDown);
};


// let test = document.querySelector("tbody");
// ? why doesn't this work? it returns undefined in the script, but works fine when pasted into the console

// attaching an EventListener to the entire document isn't what I want to do, but it's the only way I can get it to work right now

document.addEventListener("mouseover", function( event ) {
    console.log(event.target.tagName);
    if (penDown === true && event.target.tagName.toLowerCase() === "td") {
        event.target.className = currentColor;
    }
});
