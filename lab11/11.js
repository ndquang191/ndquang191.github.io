//bai1

// let s = 0

// for ( let i = 0 ; i <= 100 ; i++){
//     s += i
// }

// console.log("Tong tu 0 den 100 la: " + s)

// // Bai 2

// let s = 0

// for( let i = 1 ; i <= 100 ; i = i+2){
//     s += i
// }

// console.log("Tong cac so le :" + s )


// // Bai 3

// let s = 0

// for ( let i = 0; i <= 100 ; i++){
//     if( i % 3 ==0){
//         s+= i
//     }
// }

// console.log("Tong cac so chia het cho 3 la : "  +  s)

// // Bai 4

// let s = 0

// for ( let i = 0; i <= 100 ; i++){
//     if(i % 3 ==0  ||){
//         s+= i
//     }
// }

// console.log("Tong cac so chia het cho 3 la : "  +  s)


// Bai 6:

// for ( let i = 1 ; i < 10 ; i++){
//     for( let j = 1 ; j < 10; j++){
//         console.log("")
//     }
// }


// Bai 7

for ( let i = 0 ; true ; i++){

    let a = prompt("Nhap so vao")
    
    if( a == null || a == "" || isNaN(a) == true){
        break
    }

    

    if( i == 0){
        min = a ;
        max = a ;
    }

    
    if( a > max){
        max = a;
    }
    if( a < min){
        min = a;
    }
}

console.log( "Min la: " + min)
console.log( "Max la: " + max)
