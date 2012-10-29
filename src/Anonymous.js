function sayHello() {
    alert("Hello!");
}


setTimeout(sayHello, 2000);


setTimeout(function () {
    alert("Howdy!");
}, 2000);

// these are globally scoped
var firstName = "Barney";

function getBestFriend(name) {
    var friend;
    if (name === "Fred") {
        friend = firstName;
    }

    if (name == 'Wilma') {
        (function () {
            // oops, we just hoisted the firstName and caused undefined above
            var firstName = "Betty";
            friend = firstName;
        })();
    }
    return friend;
}

