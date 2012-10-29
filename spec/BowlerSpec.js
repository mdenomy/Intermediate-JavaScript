describe("Bowler", function() {

    it("has an average score", function() {
        var bowler = new Bowler("Jeffrey", "Lebowski");
        expect(bowler.averageScore).toEqual(0);
    });

    it("has a fullName", function() {
        var bowler = new Bowler("Walter", "Sobchak");
        expect(bowler.fullName()).toEqual("Walter Sobchak");
    });

});