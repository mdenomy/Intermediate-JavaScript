function Person(firstName, lastName, catchPhrase) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.catchPhrase = catchPhrase;
}

Person.prototype.speak = function() {
    return this.firstName + ' says "' + this.catchPhrase + '"';
};

Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};





