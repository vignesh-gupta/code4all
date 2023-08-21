function fun1(a){
    return function(){
        console.log(a);
    }
}

let child = fun1(2);

child();