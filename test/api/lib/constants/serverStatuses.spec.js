import serverStatuses from "constants/serverStatuses"
import chai from "chai"
let assert = chai.assert

describe("serverStatuses", () => {
    describe("SUCCESS_STATUS", () => {
        it("should return correct success string", () => {
            let expected = "success"
            let actual = serverStatuses.SUCCESS_STATUS
            assert.equal(actual, expected, "should return correct success string")
        })
    })
    describe("FAILURE_STATUS", () => {
        it("should return correct failure string", () => {
            let expected = "fail"
            let actual = serverStatuses.FAILURE_STATUS
            assert.equal(actual, expected, "should return correct failure string")
        })
    })
    describe("ERROR_STATUS", () => {
        it("should return correct error string", () => {
            let expected = "server error"
            let actual = serverStatuses.ERROR_STATUS
            assert.equal(actual, expected, "should return correct error string")
        })
    })
})