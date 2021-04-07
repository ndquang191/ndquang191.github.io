//Bai1:VCT tính và in bảng cửu chương, sử dụng vòng lặp for lồng nhau


// for( let i = 1 ; i <= 10 ;i++){
//     let s = ""

//     for( let j = 1 ; j<= 10; j++ ){
//         s += i*j + " "
//     }

//     console.log(s)
// }


//Bai2:VCT in ra nếu số chia hết cho 3 thì in Fizz, chia hết cho 5 thì in Buzz, chia hết cho cả 3 và 5 thì in FizzBuzz, không chia hết cho cả 3 và 5 thì in BizzFuzz, trong khoảng 0 -> 50


// for ( let i = 0 ; i <= 50 ; i++){
//     if( i % 3 == 0){
//         if( i % 5 == 0){
//             console.log(i + " : FIZZBUZZ")
//         }
//         else{
//             console.log(i + " : FIZZ")
//         }
//     }
//     else if( i % 5 == 0){
//         console.log(i + " : BUZZ")
//     }
// }

//Bai3: VCT tính và in ra tổng bội chung của 3 và 5 trong khoảng 0 -> 100
// let sum = 0;

// for( let i = 0 ; i <= 100 ; i ++){
//     if( i % 3 == 0 && i % 5 == 0){
//         sum += i;
//     }
// }

// console.log("Tong boi chung cua 3 va 5 la " + sum)


// Bai4: VCT nhập vào một số n, kiểm tra số đó có phải số nguyên tố hay không và in ra kết quả

// let n = Number(prompt("Nhap so n"))

// let count = 0 
// for ( let i = 1 ; i <= n ; i++){
//     if( n % i == 0){
//         count++
//     }
// }

// count > 2
//     ? console.log("Khong phai so nguyen to")
//     : console.log("So nguyen to")


// Bai 5: VCT nhập vào 2 số a, b kiểm tra và in ra các số nguyên tố trong khoảng a -> b


// let a = Number(prompt("Nhap so a"))
// let b = Number(prompt("Nhap so b"))


// for( let n = a ; n < b ; n++){
//     let count = 0 
//     for ( let i = 1 ; i <= n ; i++){
//         if( n % i == 0){
//             count++
//         }
//     }

//     if( count <= 2){
//         console.log( n + " la so nguyen to")
//     }
// }


// Bai 6: Bảng cửu chương ngược

// for( let i = 10 ; i > 0 ; i--){
//     let s = ""

//     for( let j = 10 ; j > 0 ; j--){
//         s += i*j + " "
//     }

//     console.log(s)
// }


// Bai 7: in ra chu so dau va cuoi
// let r = Number(prompt("Nhap so"))

// let power = 0

// while( 10**power < r){
//     power++
// }

// let sodau = ( r - ( r % 10**(power-1) ) ) / 10**(power-1)


// let socuoi = r % 10

// let kq = ""
// kq += String(sodau) + String(socuoi)
// console.log(kq)


//Bai 8: Palindrome

// let r = (prompt("Nhap so can tim"))

// let dodai = 0;
// for ( dodai  = 0 ; r[dodai] != undefined; dodai++ ){

// }
// let doixung = 0;
// for( let i = 0 ; i < dodai ; i++){
//     if( r[i] == r[dodai-1-i]){
//         doixung++;
//     }
// }

// doixung == dodai
//     ? console.log("So nhap vao la so Palindrome")
//     : console.log("No no no no no no")

// Bai9 : Amstrong


// let r = prompt("Nhap so de kiem tra")

// let dodai = 0;
// for ( dodai  = 0 ; r[dodai] != undefined; dodai++ ){

// }
// console.log(dodai)

// let sum = 0 ;
// for( let i = 0 ; i < dodai ; i++){
    
//     let so = Number(r[i])
//     sum += so**dodai

// }

// sum == r 
//     ? console.log("Day la so Amstrong")
//     : console.log("No no no no")

//-------------------------------------------------------------


// Bai 10:


// let r = Number(prompt("Nhap vao so n"))

// let f = 1;

// while( r != 0){
//     f *= r
//     r--;
// }

// console.log(f)


//-----------------------------------------------------------


// Bai 11; So Perfect

// let r = Number(prompt("Nhap so kiem tra"))

// let tong = 0

// for ( let i = 0 ; i < r ; i++){
//     if( r % i == 0 ){
//         tong += i
//     }
// }

// tong == r 
//     ? console.log("So Perfect")
//     : console.log("No no no no ")


// Bai 12: Số strong

let r = prompt("NHap so kiem tra")

let dodai = 0 ;

for( dodai = 0 ; r[dodai] != undefined ; dodai++){}

console.log(dodai)

let sum = 0;

for( let i = 0 ; i < dodai ; i++){

    let giaithua = 1
    for( let j = 1 ; j <= Number(r[i]) ; j++){
        giaithua *= j
    }

    sum += giaithua
}

console.log(sum)

sum == r
    ? console.log("Day la so Strong")
    : console.log("No noooooo")