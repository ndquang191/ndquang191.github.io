


let salaries = {
    anna: 1000,
    john: 1200,
    phoebe: 2000,
    brian: 1500,
    diana: 1100,
};


// function input( obj ){
    
//     let name ;

//     while( true){
//         name = prompt("Nhap ten nhan vien")
//         if( name == null || name == ""){
//             break;
//         }
//         obj.name = Number(prompt("Nhap luong cua nhan vien " + name))
//         if( obj.name == "" || obj.name == null){
//             break
//         }
//     }
// }

// input(salaries)

function edit(obj){
    let name;

    while( true ){
        name = prompt("Nhap ten nhan vien")

        if( name in obj == true){
            obj.name = Number(prompt("Nhap tien luong cua nhan vien " + name))
        }
        else{
            console.log("Khong co nhan vien " + name)
            break;
        }
    }
}


function total(obj){

    let k 
    let sum = 0 ;

    for ( k in obj ){
        sum += obj[k];
    }

    return sum;
}




function minmax(obj){

    let max_s;
    let min_s;
    let name_max;
    let name_min;

    for( let k in obj){

        if( true ){

        }
        else{
            if( obj[k] > max_s){
                max_s = obj[k];
                name_max = k;
            }
        }

    }

    mm[name_max] = max_s;

    mm = {
        name_max: max_s,
    }

    console.log( mm )
}





// function avg(obj){

//     let soNhanVien = 0;

//     for( let k in obj){
//         soNhanVien++;
//     }

//     return total(obj)/soNhanVien;
// }

// console.log( avg(salaries))