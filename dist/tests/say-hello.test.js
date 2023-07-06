import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it("Should return say Hello Fathur", function () {
        expect(sayHello('Fathur')).toBe("Hello Fathur");
    });
});
