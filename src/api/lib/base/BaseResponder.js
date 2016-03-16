import Responder from "../http/Responder"
import routerFactory from "../http/routerFactory"
import parserFactory from "../http/parserFactory"


export default class BaseResponder extends Responder {
    constructor() {
        this.router = routerFactory()
        this.parser = parserFactory()
    }
    /*how to map requests to handler?????*/
}