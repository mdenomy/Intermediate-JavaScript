var greeting = (function () {

    function sayHello(locale) {
        switch (locale) {
            case 'Australia':
                return "G'day, mate";
            case 'Japan':
                return "Konichiwa";
            default:
                return "Hello";
        }
    }

    function sayGoodbye(locale) {
        switch (locale) {
            case 'Australia':
                return "Cheers, mate";
            case 'Japan':
                return "Sayonara";
            default:
                return "Goodbye";
        }
    }

    return {
        hello:sayHello,
        goodbye:sayGoodbye
    };
})();
