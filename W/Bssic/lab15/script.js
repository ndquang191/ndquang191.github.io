// // 1. Thay đổi title trang thành Họ tên

// //document.head.lastElementChild.textContent = prompt("Nhap title moi")


// // 2. Tách đoạn văn bản cho sẵn thành 2 (cắt chỗ từ 'nemo?'), đặt vào trong thẻ p

// // let text = document.body.textContent;



// // // console.log( document.body.textContent );

// // let index = text.indexOf("nemo?") + 5;

// // let par2 = document.createElement("p");
// // let par1 = document.createElement("p")


// // par2.innerHTML = text.slice( 0 , index);

// // par1.innerHTML = text.slice(index,text.length);

// // document.body.textContent = ""; 

// // document.body.appendChild(par2);
// // document.body.appendChild(par1);


// // // 3. Đếm xem có bao nhiêu từ có độ dài lớn hơn 8 ký tự, thêm mã HTML vào trang
// // // <p>Số từ có độ dài lớn hơn 8: ...</p>
// // // bên dưới 2 đoạn văn bản bên trên

// // text = document.body.textContent
// // console.log(text.length)

// // index = 0;
// // let dodai = 0 ;
// // let count = 0;
// // while( index < text.length - 1){
    
// //     let dot = [".",","," " , "?" ,"\n"]
// //     if( dot.includes(text[index]) == false ) {
// //         dodai++;
// //         console.log("ahihi")
// //     }
// //     else{
// //         if( dodai > 8){
// //             count++;
// //         }
// //         dodai = 0;
// //     }
// //     index++;
// // }



// // console.log( "co " + count + " tu dai hon 8 chu cai");

// // 4. Highlight các từ đó, sử dụng thẻ <mark> hoặc thẻ <span class...>

// let str = [];

// str.forEach(function(word){
//     par1.textContent = p1.textContent.replaceAll(word, "!!!!")
// })
// // 5. Thay thế nội dung các từ đó thành 'Thầy Ba đẹp trai 🧡'

// // 6. Thêm src và alt cho thẻ img, sử dụng link ảnh bất kỳ

// document.getElementsByTagName("/img").src = "https://png.pngtree.com/png-clipart/20190920/original/pngtree-summer-summer-little-yellow-duck-cartoon-free-material-png-image_4662010.jpg"
// document.getElementsByTagName("/img").alt = "1 con chim nho dang di boi"



// let img = document.getElementsByTagName("img")[0];

// console.log( img)
// img.src = "https://ducbeatmusic.com/uploads/pictures/images/900x520_piano-min(1).jpg"

let p = document.getElementsByTagName("p");

p.onclick = function(){
    console.log("hhahaa")
}