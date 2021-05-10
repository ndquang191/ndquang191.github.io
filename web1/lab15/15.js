
// row = columm
//   doi mau  


// tim den table 

let table = document.body.firstElementChild

let tbody = table.firstElementChild;

let row = tbody.rows;


let trs = Array.from(row)

trs.forEach( function(tr){
    let tds = tr.cells;
   
    
    tds = Array.from(tds);

    console.log(tds) 

    tds.forEach( function(td){
        if( td.cellIndex == tr.rowIndex){

            td.style.backgroundColor = "red";
            td.style.border = "10px solid";
        }wd
    })
})


