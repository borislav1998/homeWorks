let fNames = ["Petre", "Stanko", "Martin", "Dragan", "Marija"];
let lNames = ["Petreski", "Stankovski", "Panovski", "Gelevski", "Mitrevska"];

function fulNameConcationator(fNames, lNames) {
    let fullNames = [];
    let i = 0;
    while (i < fNames.length) {
        let fullName = `${i + 1}. ${fNames[i]} ${lNames[i]}`
        fullNames.push(fullName)
        i++;
    }
    return fullNames;
}

console.log(fulNameConcationator(fNames, lNames));