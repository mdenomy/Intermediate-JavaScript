describe("Person", function () {

    var guy;

    beforeEach(function () {
        guy = new Person("John", "Doe", "Hey now!")
    });

    it("has a firstName", function () {
        expect(guy.firstName).toEqual("John");
    });

    it("has a lastName", function () {
        expect(guy.lastName).toEqual("Doe");
    });

    it("has a fullName", function () {
        expect(guy.fullName()).toEqual("John Doe");
    });

    it("speaks his or her catchphrase", function() {
        expect(guy.speak()).toContain("Hey now!");
    });

});
