let a = [1, 2, 3, 1 , 2, 4, 5, 6, 7, 8, 9, 10 , 1 ];

// let b = a.reduce(function (sum, i) {
//   sum += i;

//   return sum;
// }, 0);

// console.log(b);

//-----------------


// function maxOfArray(a) {
//   let max = {
//       index : 0,
//       value : 0,
//   }

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > max.value) {
//       max.index = i;
//       max.value = a[i];
//     }
//   }

//   return max;
// }

// console.log( maxOfArray(a) )

//-------------------------------


// function secondValue( a ) {
//     let max = {
//         index : -Infinity,
//         value :0,
//     }
//     let second = {};

    
//     for (let i = 0; i < a.length; i++) {

//         if (a[i] > max.value){

//             second = JSON.parse(JSON.stringify(max))
           
//             max.index = i;
//             max.value = a[i];
//         }
//     }
    
//     return second;
// }

// console.log( secondValue(a))

//------------------------------

// function cap ( a ){
//     let b ="";

//     for( let i = 0; i < a.length ; i++){
//         if( i == 0 || a[i-1] == " "){
//             console.log(a[i])
//             b +=  a[i].toUpperCase();
//             console.log( a[i])
//         }
//         else{
//             b += a[i];
//         }
//     }

//     return b;
// }


// console.log( cap("asd bsdopio qw pp"))


//============================================

// function most( a ) {
    
//     let xuathien ={};

//     for(let i = 0 ; i < a.length ; i++){

//         if( a[i] in xuathien){
//             xuathien[a[i]]++;
//         }
//         else{
//             xuathien[a[i]] = 1;
//         }
//     }
//     console.log(xuathien)
//     let max = 0;
//     let kq = {};
//     for( let prop in xuathien){
      
//         if( xuathien[prop] > max){
//             max = xuathien[prop];
//             kq = {};
//             kq[prop] = xuathien[prop];
//         }
//     }

//     return kq;
// }

// console.log( most(a))

//================================================

// function slide( str , l ){

//     let kq = [];

//     for( let i = 0 ; i < str.length ; i = i+l){

//         let temp = str.substring( i, i+l);
//         kq.push(temp);
//     }

//     return kq;
// }


// console.log(slide( "123aádasdasdsdasdd" , 3) )

//===========================================

// function breakWord( str ){
//     let kq = [];

//     for( let j = 0 ; j < str.length ; j++){
//         for( let i = j+1 ; i <= str.length ; i++){
//             let temp = str.substring(j,i);
//             kq.push(temp);
//         }
//     }
    
//     return kq;
// }


// console.log( breakWord("dog"));


//=============================================

// function removeFalsy( arr ){

//     for( let i = 0 ; i < arr.length ; i++){
//         if( ( arr[i] || false ) == false){
//             arr.splice(i,1);
//             i--;       
//         }
//     }

//     return arr;
// }

// console.log( removeFalsy( [null,"",0, false ,1] ))


//==============================================


// function random( arr){

//     let i = Math.floor(Math.random()* arr.length )
//     console.log(i);
//     return arr[i];
// }

// console.log(random(a) )

//=====================================================

// function shuffle( arr ){

//     let xx = Math.floor(Math.random() * 10)

//     for( let i = 0 ; i < xx ; i++){
//         let index1 = Math.floor(Math.random() * arr.length)
//         let index2 = Math.floor(Math.random() * arr.length)

//         let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//     }
//     return arr;
// }

// console.log( shuffle(a) )

//========================================================


// let d = new Date();

// let b = String.fromCharCode(75)
// console.log(b)

// function removeFalsy( arr){

//     arr.filter( function(i){
//         return Boolean(i);
//     })
// }