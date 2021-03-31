// When size is submitted by the user, call makeGrid()

const isSubmitted = document.getElementById('isSubmitted');
isSubmitted.addEventListener("click", function(event) {
    event.preventDefault()  //stop refresh of the page on submit
    makeGrid()
});

    
function makeGrid() {
    //verify values are not too high to be mostly within a
    //"normal" sized laptop screen
    if (inputHeight.value > 40 || inputWidth.value > 40) {
        window.alert("Please choose height and width values below 40");
        }
    else {
        //remove any current table data on clicking Submit
        const removeTable = document.querySelector('table');
        const tableParent = removeTable.parentElement;
        tableParent.removeChild(removeTable);
        
        //create table of cells based on inputHeight.value and
        //inputWidth.value
        //could create variables mapped to those values but it
        //seemed redundant
        const table = document.createElement('table');
        for (let h = 1; h <= inputHeight.value; h++) {
            const row = document.createElement('tr');
            for (let w = 1; w <= inputWidth.value; w++) {
                const cell = document.createElement('td');
                //add listener to each cell and apply chosen color
                cell.addEventListener("click", function() {
                    this.style.backgroundColor = colorPicker.value;
                })
                //TODO - Would be nice to add something to turn the color
                //back to white if clicked twice
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    document.body.appendChild(table);
    }
}