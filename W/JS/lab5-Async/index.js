

// setTimeout( ()=>{
//     console.log("hihi");
// },1000)


// let a = 10;

// let timer = setInterval( () => {
//     console.log("I love you!");
// },1000)

function getData( url, callback){
    
    setTimeout( () => {
        let data = api();
        callback(data);
    }, 5000)

    return data;
}



function api(){
    return {
        error : null,
        data : 100
    }
}

getData( "/students" , () => {
    console.log(data);
})