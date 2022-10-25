// Create your solutions here
function divider(arg) {
    const line = `\n ${"-".repeat(15)} ${arg} ${"-".repeat(15)} \n`;
    console.log(line);
}


//   1. Los or New?

//   Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.  
divider(01)

function nameOfCity(town01) {
    let str0100 = town01.slice(0, 3).toLowerCase();
    let str0101 = "los";
    let str0102 = "new";

    if (str0100 !== str0101 && str0100 !== str0102) {
        return "The city name does not begin with Los or New";
    } else {
        return town01
    }
}

console.log(nameOfCity("Miami"));
console.log(nameOfCity("Los Angeles"));
console.log(nameOfCity("New York"));



// 2. isDivisible?

// Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.
divider(02)

function isDivisible(arg4) {
    if (arg4 % 100 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisible(1));
console.log(isDivisible(10));
console.log(isDivisible(100));
console.log(isDivisible(1000));

// 3. What's the weather?

// Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".
divider(03)

const isRaining = (bool) => (bool === true) ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";

console.log(isRaining(true));
console.log(isRaining(false));


// 4. Sequence

// Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64`_. Concatenate each value to a string and return a string.
divider(04)

const geometricalSequence = (num) => {
    let result = ``;
    for (let i = 0; i < num; i++) {
        result += Math.pow(2, i) + " ";
    }
    return result;
}

console.log(geometricalSequence(4));


// 5. Multiples

// Create a function named "_multiplesOfThree_" and **use a loop** to return the first 'n' multiples of three: _`3 6 9 12 15 ...`_. Concatenate each value to a string and return a string.
divider(05)

const multiplesOfThree = (num) => {
    let result = ``;
    for (let i = 1; i <= num; i++) {
        result += (3 * i) + " ";
    }
    return result;
}

console.log(multiplesOfThree(10));



// 6. You've got the power

// Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.
divider(06)

const powerOf = (num) => Math.pow(num, num);
console.log(powerOf(4));



// 7. How many?

// Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string.
divider(07)

const vowelCount = (str07) => {
    let test = "aeiou";
    let str07smal = str07.toLowerCase();
    let zaehler = 0;
    for (let i = 0; i < str07smal.length; i++) {
        if (test.includes(str07smal[i])) {
            zaehler++;
        }
    }
    return zaehler;
}
console.log(vowelCount("fwb"));
console.log(vowelCount('hello'));
console.log(vowelCount('test'));