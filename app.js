function createGreeting(firstName, lastName, timeOfDay) {
    let fullName = formatName(firstName, lastName);

    let greeting = getGreeting(timeOfDay);

    return `${fullName} ${greeting}`

}

function getGreeting(timeOfDay) {
    if (timeOfDay === "Morning") return "Good Morning";
    if (timeOfDay === "Afternoon") return "Good Afternoon";
    if (timeOfDay === "Evening") return "Good Evening";

}

function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Tests
console.log(createGreeting("Ava", " Stone", "Morning"));