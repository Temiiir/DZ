var getAverage = (array) => {
    var count = 0
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++
            sum += array[i]
        }
    }
    return sum / count
};
console.log(getAverage([2, -78, 45, 4, -7, -6, -10, 26, 30, 8, 10]))


var getSum = (array) =>{
    var evenNum = 0
    for(var i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            evenNum+=array[i]*2
        }
    }return evenNum
}
console.log(getSum([20, 21, 4, 12, 54, 13, 4, 3, 2, 60, 10]))


var getLetter = (words) =>{
    var word = []
    for (var i = 0; i < words.length; i++){
        if (words[i].toLowerCase().includes('t') || words[i].toLowerCase().includes('a')) {
            word.push(words[i])
        }
    }
    return word
}
console.log(getLetter(['text', 'frontend', 'apple', 'cherry', 'pineapple', 'strawberry', 'DRACULA', 'ANT', 'dog', 'CS2']))