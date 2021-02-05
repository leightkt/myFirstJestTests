const { evenOrOdd } = require('../evenOrOdd')

describe("evenOrOdd", () => {
    it("evenOrOdd(1) => odd", () => {
        expect(evenOrOdd(1)).toBe('odd')
    })
})

describe("evenOrOdd", () => {
    it("evenOrOdd(2) => even", () => {
        expect(evenOrOdd(2)).toBe('even')
    })
})


// it("1 is 1", () => { 
//     expect(1).toBe(1)
// })