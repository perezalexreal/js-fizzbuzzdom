let  numbers = document.querySelector('.numbers');

let container = document.querySelector('#container');

let divHtml = document.createElement('div');

divHtml.classList.add('col');


for( let i = 0; i <= 100 ; i++){

    if (i % 3 === 0 && i % 5 === 0  ){
        console.log("FizzBuzz");
        divHtml.append('FizzBuzz');
        container.append(divHtml);
    } else if (i % 3 === 0) {
        console.log("Fizz");
        divHtml.append('Fizz') ;
        container.append(divHtml);

    } else if(i % 5 === 0){
        console.log("Buzz");
        divHtml.append('Buzz');
        container.append(divHtml);

    } else {
        console.log(i);
        divHtml.append(i);
        container.append(divHtml);
    }
}

