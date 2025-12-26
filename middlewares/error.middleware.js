class ErrorMiddleware {
    static handler(err, req, res, next) {
        const statusCode = err.status || 500;
        res.status(statusCode).json({
            error: statusCode === 500 ? 'Internal Server Error' : 'Error',
            message: err.message,
            stack: process.env.NODE_ENV === 'development'
                ? err.stack
                : null
        })
    }
}

module.exports = ErrorMiddleware;