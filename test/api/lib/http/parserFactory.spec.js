import parserFactory from "http/parserFactory"
import chai from "chai"
let assert = chai.assert

describe("parserFactory", () => {
    const PARSER = parserFactory.newParser()
    it("should have a method named array", () => {
        assert.isFunction(PARSER.array, "array should be a method")
    })
    it("should not have a method name bad", () => {
        assert.isNotFunction(PARSER.bad, "bad should not be a method")
    })
})