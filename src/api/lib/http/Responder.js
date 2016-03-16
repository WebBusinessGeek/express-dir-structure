import serverCodes from "../constants/serverCodes"
import serverStatuses from "../constants/serverStatuses"

export default class Responder {
    constructor() {

    }

    sendHttpResponse(message, status, code, data) {
        return {
            status_code: code, status: status,
            message: message, payload: {data}
        }
    }

    sendSuccessResponse(message, data, status = serverStatuses.SUCCESS_STATUS, code = serverCodes.SUCCESS_CODE) {
        return this.sendHttpResponse(message, status, code, data)
    }

    sendFailureResponse(message, data, status = serverStatuses.FAILURE_CODE, code = serverCodes.FAILURE_CODE) {
        return this.sendHttpResponse(message, status, code, data)
    }

    sendErrorResponse(message, data, status = serverStatuses.ERROR_STATUS, code = serverCodes.ERROR_CODE) {
        return this.sendErrorResponse(message, status, code, data)
    }
}