const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]

console.log(attendances);

attendances.push(["John", 9]); // dizinin sonuna parantez içerisindeki elemanı ekler.

console.log(attendances);

attendances.push(["Max", 10]);  // dizinin sonuna parantez içerisindeki elemanı ekler.

console.log(attendances);

attendances.push(["Mary", 11]);  // dizinin sonuna parantez içerisindeki elemanı ekler.

console.log(attendances);

attendances[2][1] = 9; // Elamin' in yaşını 9 yapar.

console.log(attendances);

console.log(`Today ${attendances.length} students came to the class, first student name was ${attendances[0][0]} and last student was ${attendances[attendances.length - 1][0]}`);

const averageAge=(attendances[0][1]+attendances[1][1]+attendances[2][1]+attendances[3][1]+attendances[4][1]+attendances[5][1]+attendances[6][1]+attendances[7][1]+attendances[8][1])/9;

console.log(averageAge);

console.log(`Average age is ${averageAge.toFixed(2)}`); // virgülden sonra iki rakam tutar.

attendances.shift(); // en baştaki elemanı siler.

console.log(attendances);

attendances.splice(2,1); // 2. elemandan sonra 1 tane siler. yani 2. elemanı siler.

console.log(attendances);

console.log(`We finished class with ${attendances.length} students.`);