const code = {
    success: 200, // GET SUCCESS
    badRequest: 400, // BAD REQUEST
    unauthorized: 401, // UNAUTHORIZED
    forbidden: 403, // FORBIDDEN
    notFound: 404, // FORBIDDEN
    tokenRequired: 405, // TOKEN REQUIRED
    forceLogout: 406, // FORCE LOGOUT
    requestTimeout: 408, // REQUEST_TIMEOUT
    validateCode: 422, // VALIDATE ERROR
    serverError: 500, // SERVER ERROR
    servicesUnavailable: 503, // SERVICES UNAVAILABLE
}

export default code;