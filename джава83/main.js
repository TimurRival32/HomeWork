const me = {
    name: 'Timur',
    age: 16,
    sport: 'Hockey'
}

console.log(me)

console.log('/////////////////////////////////////////')

const metod = {
    check(Name){
        console.log(`Hello ${Name}`)
    }
}

console.log(metod.check('Andrew'))

console.log('/////////////////////////////////////////')

let i = 0
const server = [
    {
        name: 'pavel',
        age: 17,
        admin: true
    },
    {
        name: 'danil',
        age: 23,
        admin: false
    },
    {
        name: 'anton',
        age: 19,
        admin: true
    },
    {
        name: 'jack',
        age: 32,
        admin: true
    },
    {
        name: 'dima',
        age: 16,
        admin: false
    },
    {
        name: 'omar',
        age: 51,
        admin: false
    },
    {
        name: 'matvey',
        age: 30,
        admin: false
    }
]

for(let h = 0; h<server.length; h++){
    if(server[h].admin == false){
        i = i+1
    }
}

console.log(i)