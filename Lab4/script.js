// 1
{
    let i = 1
    while (i < 100) {
        console.log(i)
        i++
    }

    for (let i = 1; i < 100; i++) {
        console.log(i)
    }
}

// 2
{
    let i = 11
    while (i < 33) {
        console.log(i)
        i++
    }

    for (let i = 11; i < 33; i++) {
        console.log(i)
    }
}

// 3
{
    let i = 0
    while (i < 100) {
        if (i % 2 === 0) {
            console.log(i)
        }
        i++
    }

    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

// 4
{
    let i = 1
    let sum1 = 0
    while (i < 100) {
        sum1 += i
        i++
    }
    console.log(sum1)

    let sum2 = 0
    for (let i = 0; i < 100; i++) {
        sum2 += i
    }
    console.log(sum2)
}

// 5
{
    const array = [1, 2, 3, 4, 5]

    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

// 6
{
    const array = [1, 2, 3, 4, 5]
    let result = 0

    for (let i = 0; i < array.length; i++) {
        result += array[i]
    }
    console.log(result)
}


// 7
{
    const obj = {
        green: 'зеленый', red: 'красный', blue: 'голубой'
    }

    for (let key in obj) {
        console.log(key)
        console.log(obj[key])
    }
}

// 8
{
    const obj = {
        kolya: "200",
        vasya: "300",
        petya: "400"
    }

    for (let key in obj) {
        console.log(`${key} - зарплата ${obj[key]} долларов`)
    }
}


// 9
{
    const array = [2, 5, 9, 15, 0, 4]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 3 && array[i] < 10) {
            console.log(array[i])
        }
    }
}

// 10
{
    const array = [4, 0, -2, 5, -12, 10]
    let result = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            result += array[i]
        }
    }
    console.log(result)
}

// 11
{
    const array = [1, 2, 5, 9, 4, 13, 4, 10]

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 4) {
            console.log("Есть")
            break
        }
    }
}

// 12
{
    const array = [10, 20, 30, 50, 235, 3000]

    for (let i = 0; i < array.length; i++) {
        let currentElem = array[i].toString()
        if (currentElem[0] == 1 || currentElem[0] == 2 || currentElem[0] == 5){
            console.log(currentElem)
        }
    }
}

// 13
{
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let str = "-"

    for (let i = 0; i < array.length; i++) {
        str += array[i] + "-"
    }
    console.log(str)
}

// 14
{
    const array = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ]

    for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div")
        div.textContent = array[i]

        if (i > 4) {
            div.style.fontFamily = "bold"
        }

        document.body.appendChild(div)
    }
}

// 15
{
    const array = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ]
    const currentDay = new Date().getDay()

    for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div")
        div.textContent = array[i]

        if (i === currentDay) {
            div.style.fontFamily = "cursive"
        }

        document.body.appendChild(div)
    }
}

// 16
{
    let n = 1000
    let num = 0
    while (n > 50) {
        n /= 50
        num++
    }
    console.log(n)
    console.log(num)
}