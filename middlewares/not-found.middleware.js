class NotFoundMiddleware {
    static handler(req, res) {
        res.status(404).json({
            error: 'Not Found',
            message: `The requested resource ${req.originalUrl} was not found on this server.`,
            stack: process.env.NODE_ENV === 'development'
                ? new Error().stack
                : null
        });
    }
}

module.exports = NotFoundMiddleware;