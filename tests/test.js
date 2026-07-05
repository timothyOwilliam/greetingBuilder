//tests
import {createGreeting} from '../src/app.js'

function runTests(){
    console.log("Running tests...");

    //Arrange
    let firstName = "Amy";
    let lastName ="Ivan";
    let timeOfDay = "Morning";

    //Act
    const result = createGreeting(firstName, lastName, timeOfDay);

    //Assert
    //Missing one name (lastname)
    console.assert(
        result === `${firstName} Good ${timeOfDay}`, 
        `Test Failed`
    );

    //Missing "Good" in the string lateral
    console.assert(
        result === `${firstName} ${lastName} ${timeOfDay}`, 
        `Test Failed`
    );

    console.log("Test Passed!!")



}
runTests();