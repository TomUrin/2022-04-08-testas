/*
1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)
*/

console.log('-----------------1-----------------');

const a = 5;
const b = 5;
if (a > b) {
    console.log(`a skaicius didesnis.`);
} else if (a < b) {
    console.log(`b skaicius didesnis.`);
} else {
    console.log(`skaiciai yra lygus.`)
}

console.log('-----------------2-----------------');

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('-----------------3-----------------');

for(let i = 0; i <= 10; i += 2) {
    console.log(i);
}

console.log('-----------------4-----------------');

for(let i = 0; i < 5; i++) {
    let skaicius = Math.floor(Math.random() * 10)
    console.log(skaicius);
}

console.log('-----------------5-----------------');

const x = 0
while (x < 10) {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    if (random === 5) {
        break;
    }
}

console.log('-----------------6-----------------');

let ilgis = Math.floor(Math.random() * (30 - 20) + 20);
let mas = [];

    for (let i = 0; i < ilgis; i++) {
	mas[i] = Math.floor(Math.random() * (30 - 10) + 10);  
    }

console.log(`Masyvo ilgis: ${mas.length}`);
console.log(mas);

console.log('-----------------7-----------------');

const raides = {
    raidziu: 'ABCD',
}

const atsitiktiniai = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function masyv(num, raide) {
    let p = [];
    let rezultatas = [];
    raide.forEach( item => t = [...p, ...raides[item]]);
    for (let i = 0; i < num; i++) {
        rezultatas.push(t[atsitiktiniai(0, t.length - 1)])
    }
    console.log(rezultatas);
}

masyv(100, ['raidziu']);


console.log('-----------------8-----------------');

function lygineSuma(n, p) {
    let skaiciuSuma = n + p;
    let masyvuIlgis = (n.length + p.length);
    if (typeof n === 'number' && typeof p === 'number' && skaiciuSuma % 2 === 0) {
        return skaiciuSuma;
    } else if (typeof n === 'object' && typeof p === 'object' && masyvuIlgis % 2 === 0) { 
        return masyvuIlgis;
    } else {
        return 'Suma nelygine';
    }
}
    
console.log(lygineSuma(4, 4))


console.log('-----------------9-----------------');

function pirminisSkaicius(x){
    if (typeof x === 'number' && x % x === 0 && x % 1 === 0 && x > 1) {
        return 'Skaicius yra pirminis'
    } else {
        return 'Skaicius yra nepirminis'
    }
}

console.log(pirminisSkaicius(2))


console.log('-----------------10-----------------');

function telefonoNumeris(mas) {
    const numeris = mas;
    let form = mas.toString();
    return `(${form[0]}${form[2]}${form[4]}) ${form[6]}${form[8]}${form[10]}-${form[12]}${form[14]}${form[16]}${form[18]}`;

}

console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]));