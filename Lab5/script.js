 
// 1
function SquareNumber(num) {
    return num * num
}
console.log(SquareNumber(2))

// 2
function SumOfTwoNumbers(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result += nums[i]
    }
    return result
}
console.log(SumOfTwoNumbers(2, 3))

// 3
function t3(num1, num2, num3) {
    return (num1 - num2) / num3
}
console.log(t3(3, 2, 1))

// 4
function t4(dayNumber) {
    const daysArray = [
        "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
    ]

    for (let i = 0; i < daysArray.length; i++) {
        if (dayNumber === i + 1) {
            return daysArray[i]
        }
    }
}
console.log(t4(1))


// 5 (flags)
function t5(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === 5) {
            return "да"
        }
    }
    return "нет"
}
console.log(t5([5, 1, 2, 3, 4]))

// 6
function t6(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'true'
        }
    }
    return 'false'
}
console.log(t6(31))

// 3
function t7(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === numberArray[i - 1]) {
            return 'да'
        }
    }
    return 'нет'
}
console.log(t7([1, 2, 3, 4, 5, 5]))