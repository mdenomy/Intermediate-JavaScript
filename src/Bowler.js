var Bowler = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.averageScore = 0;
};

Bowler.prototype = new Person();
