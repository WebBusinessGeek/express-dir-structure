import multer from "multer"

module.exports = {
    newParser : () => { return multer() }
}