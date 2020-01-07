
// a function that will add a row to the grid

let amountOfRows = 1;
let amountOfColumns = 2;

function addRow() {
    // grab the main table and append a row to it with the same number of columns
    // add an id to the table so we can identify it
    let mainGrid = document.getElementById("main-grid");    // a reference to the grid
    // make the row to be appended to the table on the DOM
    let newRow = document.createElement("tr");              // element is created, but not linked to DOM
    
    // populate the row with squares/cells aka TD elements
    // loop through the grid's amountofColumns
    for (let i = 0; i < amountOfColumns; i++) {
        let cell = document.createElement("td");            // td element is created
        newRow.appendChild(cell);                           // and appended to newRow
    }
    
    mainGrid.appendChild(newRow);                           // append newRow to mainGrid
    amountofRows++;                                         // and update the count
}

// once the function is done, need to add the event listener and handler


