import express from "express"

module.exports = {
    newRouter : () => { return express.Router() }
}