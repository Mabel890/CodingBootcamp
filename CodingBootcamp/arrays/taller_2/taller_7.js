let alturas = [1.74, 1.56, 1.68, 1.80, 1.62];

let lowMiddle = Math.floor((Object.values(alturas).length - 1) / 2);
let highMiddle = Math.ceil((Object.values(alturas).length - 1) / 2);
let media = (Object.values(alturas)[lowMiddle] + Object.values(alturas)[highMiddle]) / 2;

console.log(media);

for (let i = 0; i < alturas.length; i++) {
    if (valoresMayores = (alturas[i] > media)) {
        let valoresMayores = [alturas[i]];
        console.log(valoresMayores);
    }
}
