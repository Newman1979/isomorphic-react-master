describe("The question list", ()=>{
    beforeEach(()=>{
        console.log('Before Each!');
    });

    beforeAll(()=>{
        console.log('Before All!');
    });

    afterEach(()=>{
        console.log('After Each!');
    });

    afterAll(()=>{
        console.log('After All!');
    });

    it.only("should display a list of items", ()=>{
        expect(40 + 2).toEqual(42);
    });

    it("should display a list of items", ()=>{
        expect(40 + 2).toEqual(43);
    });
});