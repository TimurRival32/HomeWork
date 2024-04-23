
function hello(yourname){
    return `Hello, ${yourname}`
}
console.log(hello('Andrew'))

console.log('//////////////////////////////////')

const number = [1,22,13,4,9,76,7,98]

function choice(massive){
    for(let i = 0; i < massive.length ;i++){
        if(massive[i]>10){
            console.log(massive[i])
        }
    }
}

console.log(choice(number))

console.log('//////////////////////////////////')

function calculator(num1, num2, num_sign){
    if (num_sign==='плюс'){
        return num1+num2
    }
    if (num_sign==='минус'){
        return num1-num2
    }
    if (num_sign==='умножить'){
        return num1*num2
    }
    if (num_sign==='разделить'){
        return num1/num2
    }
}

console.log(calculator(2, 3, 'минус'))

