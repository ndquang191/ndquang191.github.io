//3. Viết chương trình nhập vào bán kính hình tròn, tính và in ra chu vi, diện tích của hình tròn

// let r = Number(prompt("Nhap ban kinh cua hinh tron"))
// const PI = 3.14;

// function chuVi( r){
//     return 2*PI*r;
// }

// function dienTich( r ){
//     return PI*r*r;
// } 

// console.log( "Chu vi hinh tron la: " + chuVi(r))
// console.log( "Dien tich hinh tron la: " + dienTich(r))


// Bai1 : Viết chương trình nhập vào một giá trị đo độ dài ở đơn vị cm, tính và in ra giá trị tương ứng ở
// các đơn vị mm, m, km

// let r = Number(prompt("Nhap do dai theo don vi cm"))

// function mm( r ){
//     return r*10;
// }

// function m( r ){
//     return r/100;
// }

// function km( r ){
//     return r/100000;
// }

// console.log("Doi sang mm:" + mm( r ))
// console.log("Doi sang m:" + m( r ))
// console.log("Doi sang km:" + km( r ))


// Bai2 : Viết chương trình nhập vào một giá trị nhiệt độ ở đơn vị Celsius, in ra nhiệt độ ở đơn vị Fahrenheit và Kevin tương ứng

// let c = Number(prompt("Nhap nhiet do can doi"))
// let b = Number(prompt("Nhap nhiet do can doi"))
// function cToF(c){
//     return (c*9/5) + 32;
// }

// function cToK(c){
//     return c+ 273.15;
// }

// console.log( c + " *C doi sang *F : " + cToF(c));

// console.log( c + " *C doi sang *K : " + cToK(b));


//

//3. Viết chương trình nhập thời gian hiện tại tính theo số giây từ 0h, tính và in ra giá trị giờ/phút/giây tương ứng theo định dạng h:m:s


let s = Number(prompt("Nhap so giay hien gio"))


function second(s){
    return s%60;
}

function minute(s){
    return (( s-second(s) )%3600)/60;
}

function hour(s){
    
    return ( s - second(s) - minute(s)*60)/3600;

}

console.log( s + " giay doi sang duoc: " + hour(s) + "h" + minute(s) +"m" + second(s) + "s" ) 