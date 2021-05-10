let rowsCollection = document.body.getElementsByTagName("tr");
let turn = 0;
let rows = Array.from(rowsCollection);


function getRow(i){
    return Array.from( rows[i].getElementsByTagName("td"))
}


function checkrow(rowIndex, cellIndex) {
  let same = 1;

  let r = Array.from(rows[rowIndex].getElementsByTagName("td"));

  for (let i = cellIndex - 3; i < cellIndex + 4; i++) {
    if (i <=0 || i >= rows.length) {
      continue;
    }
    if (r[i].style.backgroundColor == r[i - 1].style.backgroundColor) {
      same++;
      if (same == 5) {
        return true;
      }
    } else {
      same = 1;
    }
  }
  return false;
}


function checkColumn( rowIndex, cellIndex){

    let same = 1;


    for( let i = rowIndex -3 ; i < rowIndex + 4 ; i ++){

        if( i <= 0 || i >= rows.length){
            continue
        }
        else{

            if( getRow(i)[cellIndex].style.backgroundColor == getRow(i-1)[cellIndex].style.backgroundColor){
                same++;
                if(same == 5){
                    return true;
                }
            }
            else{
                same = 1; 
            }
        }
    }        
    return false;
}



rows.forEach(function (row) {
  let tr = Array.from(row.cells);

  tr.forEach(function (td) {
    td.onclick = function () {
      turn++;
      if (turn % 2 == 0) {
        td.style.backgroundColor = "blue";
      } else {
        td.style.backgroundColor = "red";
      }

      if (checkrow(row.rowIndex, td.cellIndex) == true || checkColumn( row.rowIndex, td.cellIndex) == true) {
        td.style.backgroundColor = "black";
      }

      
      this.onclick = null;
    };
  });
});
