// these are globally scoped
var greetingMessage = 'Hello';
var firstName = "Barney";
var lastName = "Rubble";

function texasGreeting() {
    var greetingMessage = "Howdy pardner!";
    return greetingMessage;
}

function noBlockScope() {
    for(var i = 0; i < 3; i++) {
        var square = i * i;
    }
    // square is still in scope even through declared in block above
    return square;
}

function meetTheFlintstones() {
    var firstName = "Fred";

    // lastName will be implied global, stepping on the global variable
    lastName = "Flintstone";
    return firstName + " " + lastName;
}

function getBestFriend(name) {
    var friend;
    if(name === "Fred") {
        friend = firstName;
    }

    if(name === 'Wilma') {
        // oops, we just hoisted the firstName and caused undefined above
        var firstName = "Betty";
        friend = firstName;
    }
    return friend;
}


