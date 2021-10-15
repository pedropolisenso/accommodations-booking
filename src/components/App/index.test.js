const index = require("./index")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Michael", "Jean-Philippe"], ["Michael", "Anas", "Pierre Edouard"], ["Anas", "George", "Michael"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleChange", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Edmond", "Anas"], ["Jean-Philippe", "Michael", "Edmond"], ["Anas", "Anas", "Edmond"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChange("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChange("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChange("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleChange("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleChange("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleAdd", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Jean-Philippe", "Edmond"], ["George", "Anas", "Anas"], ["George", "Anas", "Edmond"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleAdd()
        }
    
        expect(callFunction).not.toThrow()
    })
})
