describe("Scoping Rules", function() {

  it("demonstrate globally scoped variable", function() {
    expect(greetingMessage).toEqual("Hello");
  });

  it("shows local greeting does not corrupt global greeting", function() {
      expect(texasGreeting()).toEqual("Howdy pardner!");
      expect(greetingMessage).toEqual("Hello");
  });

  it("using a variable before declaring it makes it implied global", function() {
    meetTheFlintstones();
    expect(lastName).toEqual("Rubble");
  });

  it("demonstrates no block scope in JavaScript", function() {
     expect(noBlockScope()).not.toBeDefined();
  });

  it("demonstrates variable hoists the firstName", function() {
     expect(getBestFriend("Fred")).toEqual("Barney");
  });
});

