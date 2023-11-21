// Code your solution here
const drivers = [
    { name: "Dave", hometown: "Columbus" },
    { name: "Bob", hometown: "Westerville" },
    { name: "Molly", hometown: "Dublin" },
    { name: "Sam", hometown: "Worthington" }
];
matchName(drivers, "bob");

function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}

const driversList = ["Dave", "Bob", "Molly", "Jack"];
const driverDesc = [
    { name: "Dave", hometown: "Columbus" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "Molly", hometown: "Dublin" },
    { name: "Sam", hometown: "Worthington" }
];

console.log(findMatching(driversList, "Dave"));
console.log(fuzzyMatch(driversList, "sa"));
console.log(matchName(driverDesc, "bob"));