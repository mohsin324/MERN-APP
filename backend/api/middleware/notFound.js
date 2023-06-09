const notFound = (req, res, next) => {
    return res.status(404).json({ message: 'failure', response: { responseDescription: `no route found with this ${req.url} URL`}});
}
module.exports = notFound