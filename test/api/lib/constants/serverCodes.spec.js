import serverCodes from "constants/serverCodes"
import chai from "chai"

let assert = chai.assert

describe("serverCodes", () => {
    describe("SUCCESS_CODE", () => {
        it("should return 200", () => {
            let expected = 200
            let actual = serverCodes.SUCCESS_CODE
            assert.equal(actual, expected, "success code should equal 200")
        })
    })
    describe("FAILURE_CODE", () => {
        it("should return 400", () => {
            let expected = 400
            let actual = serverCodes.FAILURE_CODE
            assert.equal(actual, expected, "failure code should equal 400")
        })
    })
    describe("ERROR_CODE", () => {
        it("should return 500", () => {
            let expected = 500
            let actual = serverCodes.ERROR_CODE
            assert.equal(actual, expected, "error code should equal 500")
        })
    })
})