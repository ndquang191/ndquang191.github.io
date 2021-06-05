

let form = document.forms.converter;

let from = form.from;
let to = form.to;

let temp = form.temp;

let btn = form.btnConvert;
let result = form.result;

console.log(btn)

btn.onclick = function(){
    

    value = Number(temp.value);
    let t = value;
    if( from.value == "farenheit" ){
        t = (value - 32)* 5/9;
    }

    if( from.value == "kevin"){
        t =  value + 273.15;
    }
    console.log(t);

    if( to.value == "kevin"){
        t = t - 273.15;
    }
    if( to.value == "farenheit"){
        t = t*9/5 + 32;
    }

    result.value = t;
}

btn.addEventListerner()