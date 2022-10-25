const points =
    [
        {
            id: 1,
            question: 'Create a function named "nameOfCity". If a passed string begins with "Los" or "New", then return the full string. If not, return "The city name does not begin with Los or New". The function should be case insensitive.(16 point)',
            grade: 16
        },
        {
            id: 2,
            question: 'Create a function named "isDivisible". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. Examples: 1 ➞ false, 1000 ➞ true, 100 ➞ true(16)',
            grade: 16
        },
        {
            id: 3,
            question: 'Use a ternary operator to complete this task. Create a function named "rainingToday". If its true, print "wet day - you need an umbrella". If false, print "dry day - leave your umbrella at home".(16)',
            grade: 16
        },
        {
            id: 4,
            question: 'Create a function named "geometricalSequence" and use a loop to get the following sequence 1, 2, 4, 8, 16, 32, 64, 128, 256, concatenate each value to a string and return a string.(12 point)',
            grade: 12
        },
        {
            id: 5,
            question: 'Create a function named "multiplesOfThree" and use a loop to get the first five multiples of three. Concatenate each value to a string and return a string.(12 point)',
            grade: 12
        },
        {
            id: 6,
            question: 'Create a function named "powerOf" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.(12 point)',
            grade: 12
        },
        {
            id: 7,
            question: 'Create a function named "vowelCount" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string Example: _"hello" -> 2(16 point)',
            grade: 16
        }
    ];

for (let i = 0; i < points.length; i++) {
    console.log(points[i].id, '-', points[i].question, ':', points[i].grade)
}

const result = points.reduce(function (acc, obj) { return acc + obj.grade; }, 0);
console.log('total:', result, 'points')