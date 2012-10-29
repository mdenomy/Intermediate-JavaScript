describe("GreetingModule", function() {

    it("supports Japanese", function() {
        expect(greeting.hello("Japan")).toEqual("Konichiwa");
        expect(greeting.goodbye("Japan")).toEqual("Sayonara");
    });

    it("supports Australian", function() {
        expect(greeting.hello("Australia")).toEqual("G'day, mate");
        expect(greeting.goodbye("Australia")).toEqual("Cheers, mate");
    });

    it("provides default greeting", function() {
        expect(greeting.hello()).toEqual("Hello");
        expect(greeting.goodbye()).toEqual("Goodbye");
     });

});
