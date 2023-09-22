// test one returnFirstTwoDrivers this test wants a function that returns the first two elemenets of an array

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

// explanation - the function utilizes the slice method to extract the first two elements from the 'drivers' array. .slice(0,2) extracts the elements starting from the index '0' up to but no including '2'

// test 2 - this test wants a function that returns the last two elements of an array

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

// the function again uses the 'slice' method. but this time with a negative number, which means that it starts slicing from the end of the array '-2' starts from the second to last element.

// test 3 selecting drivers - this expects an array where the first element is 'returnFirstTwoDrivers' function and the second is the 'returnLastTwoDrivers' function

const   selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// explanation - this simply declares a constant array with the two previously defined functions as its elements.

//test number 4 - this test wants a function that returns another function which will multiply its argument by a specified multiplier

function  createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
}

//explanation here, we are defining a higher-order function (a function that returns another function).
// the inner function multiplies its argument 'fare' by the 'multiplier' which is retained through a closure.

// test number 5- this function should double the fares

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

// explanation this function uses the 'creatfaremultiplier' function we defined earlier with the multplier of '2' to double the fare.

// test number 6 - this test the function shjould triple the fares.

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

// explanation - this function uses the 'createFareMultiplier' function with the multiplier of 3 to triple the fare

// test number 7 - this test expects a function that takes an array and a function and then calls that function with the array

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers)
}

// explanation this function accepts two arguements an array 'array of drivers' and a function 'fn' it then calls the passed-in function with the array as its argument

