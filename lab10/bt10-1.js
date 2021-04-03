//Bai 1:


// let a = Number(prompt("Nhap so"))

// a % 2 == 0
//     ? console.log("So chan")
//     : console.log("So le")

// Bai 2 :Viết chương trình nhập vào 2 số a, b, kiểm tra và in ra số lớn hơm

// let a = Number(prompt("Nhap so a "))
// let b = Number(prompt("Nhap so b "))

// a < b
//     ? console.log( a + " la so lon hon")
//     : a > b
//         ? console.log( b + " la so lon hon")
//         : console.log("2 so bang nhau")


// Bai 3: Viết chương trình nhập vào một tháng trong năm, in ra mùa tương ứng


// let a = Number(prompt("Nhap voa so thang"))

// 1 > a || 12 < a 
//     ? console.log("Nhap sai")
//     : a < 4
//         ? console.log("Mua xuan")
//         : a < 7
//             ? console.log("Mua he")
//             : a < 10
//                 ? console.log("Mua thu")
//                 : console.log("Mua dong")


// Bai 4:Viết chương trình nhập vào 2 số a, b là tham số của phương trình bậc nhất ax + b = 0, tính và in ra nghiệm của phương trình đó

// let a = Number(prompt("Nhap a"))
// let b = Number(prompt("Nhap b"))

// a == 0
//     ? b == 0
//         ? console.log("Vo so nghiem")
//         : console.log("Vo nghiem")
//     : console.log("Nghiem la " + -b/a)



// Bai 5 : tam gia

let a = Number(prompt("Nhap canh a"))
let b = Number(prompt("Nhap canh b"))
let c = Number(prompt("Nhap canh c"))

a + b > c && a + c > b && b + c > a && console.log("Tam giac")


 (a + b <= c || a + c <= b || b + c <= a) || console.log("khong phai Tam giac")
    
