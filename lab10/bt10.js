
// Bai1 : VCT nhập ba số a, b, c, kiểm tra và in ra số lớn nhất

// let a = Number(prompt("Nhap so a"))
// let b = Number(prompt("Nhap so b"))
// let c = Number(prompt("Nhap so c"))

// if( a > b && a > c ){
//     console.log( a + " la so lon nhat")
// }
// else if( c > b && c > a ){
//     console.log( c + " la so lon nhat")
// }
// else if( b > a && b > c ){
//     console.log( b + " la so lon nhat")
// }
// else{
//     console.log("Khong co so lon nhat")
// }


// a > b 
//     ? a > c
//         ? console.log(a + " la so lon nhat") 
//         : console.log(c + " la so lon nhat")
//     : b > c
//         ? console.log(b + " la so lon nhat")
//         : console.log(c + " la so lon nhat")   

// Bai2: VCT nhập một năm year, kiểm tra và in ra năm đó có phải năm nhuận hay không

// let a = Number(prompt("Nhap nam vao"))

// if( a%4 == 0){
//     console.log( a + " la nam nhuan")
// }
// else{
//     console.log( a + " khong phia la nam nhuan")
// }

// Bai3: 3. VCT nhập một ký tự char, kiểm tra và in ra ký tự đó là nguyên hay phụ âm (tiếng Anh)
 


let a = prompt("Nhap vao 1 ki tu")

if( a[1] == undefined){
    if( a[0] >= "A" && a[0] <= "Z" ){

        if( a == 'u' || a == 'e' || a == 'o' || a == 'A' || a == 'i'){
            console.log("Nguyen am")
        }
        else{
            console.log("Khong biet no la cai gi")
        }
    }
    else{
        console.log("Sieu nhan 2")
    }
}
else{
    console.log("Sieu nhan")
}
// else{
//     console.log("Nhap sai")
// }

// // Bai4: 


// Biai 5 VCT nhập ba hệ số a, b, c, của phương trình bậc 2 ax2 + bx + c = 0, tính và in ra nghiệm phương trình đó

// let a = Number(prompt("Nhap giá trị của a"))
// let b = Number(prompt("Nhap giá trị của b"))
// let c = Number(prompt("Nhap giá trị của c"))


// let delta = b*b - 4*a*c

// if ( delta < 0 ){
//     console.log("Pt vo nghiem")
// }
// else if( delta == 0){
//     console.log("Pt co nghiem kep: " + -b/(2*a))
// }
// else{
//     console.log("Pt co 2 nghiem")

//     console.log( "x1 = " + ( -b + delta**1/2 ) / 2 )
//     console.log( "x2 = " + ( -b - delta**1/2 ) / 2 ) 

// }


// Bai6 : 6. VCT nhập số điểm point ở thang điểm 10 của sinh viên quy đổi sang thang điểm chữ:

// let a = Number(prompt("Nhap diem"))

// if( 0 <= a && a <= 10){
//     if( a <= 4){
//         console.log(a + " tuong duong diem F")
//     }
//     else if( a < 5.5 ){
//         console.log(a + " tuong duong diem D")
//     }
//     else if( a < 7){
//         console.log(a + " tsong duong diem C")
//     }
//     else if( a < 8.5){}
// }

