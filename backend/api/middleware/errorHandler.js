const errorHandler = (err, req, res, next) => {
    return res.status(500).json({ message: 'failure', response: { responseDescription: err.message}});
}
module.exports = errorHandler