describe('Hello', function () {
    it("Should return same with JavaScript", function () {
        
        const names: string[] = ["Fathur", "Awal", "Madara"];
        const values: number[] = [1, 2, 3];

        console.info(names);
        console.info(values);
        
        names[2] = "Obito";
        console.info(names);

    })

    it("Should support readonly array", function () {

        const hobbies: ReadonlyArray<string> = ["Membaca", "Ngoding", "Berak"]; 
        console.info(hobbies);

    });
});