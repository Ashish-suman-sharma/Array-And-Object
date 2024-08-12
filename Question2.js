const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];

ages.sort((a, b) => a - b);

const minAge = ages[0];
const maxAge = ages[ages.length - 1];

const medianAge = (ages.length % 2 === 0)
    ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
    : ages[Math.floor(ages.length / 2)];

const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

const ageRange = maxAge - minAge;

const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log(`Sorted Ages: ${ages}`);
console.log(`Minimum Age: ${minAge}`);
console.log(`Maximum Age: ${maxAge}`);
console.log(`Median Age: ${medianAge}`);
console.log(`Average Age: ${averageAge}`);
console.log(`Age Range: ${ageRange}`);
console.log(`Absolute difference (min - average): ${diffMinAverage}`);
console.log(`Absolute difference (max - average): ${diffMaxAverage}`);
