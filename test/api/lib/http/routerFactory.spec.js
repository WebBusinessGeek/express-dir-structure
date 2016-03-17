import routerFactory from "http/routerFactory"

import chai from "chai"
let assert = chai.assert

describe("routerFactory", () => {
    const ROUTER = routerFactory.newRouter()

    it("should have a function named all", () => {
        assert.isFunction(ROUTER.all, "all should be a function")
    })
    it("should have a function name get", () => {
        assert.isFunction(ROUTER.get, "get should be a function")
    })
    it("should have a function name post", () => {
        assert.isFunction(ROUTER.post, "post should be a function")
    })
    it("should have a function name use", () => {
        assert.isFunction(ROUTER.use, "use should be a function")
    })
    it("should not have a bad function", () => {
        assert.isNotFunction(ROUTER.bad, "bad should not be a function")
    })
})
