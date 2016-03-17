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
})