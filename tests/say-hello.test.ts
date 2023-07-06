import { sayHello } from "../src/say-hello";

describe('sayHello', function (): void {
    it("Should return say Hello Fathur", function (): void {
        expect(sayHello('Fathur')).toBe("Hello Fathur");
    })
});