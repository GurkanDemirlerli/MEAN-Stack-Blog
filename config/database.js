const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost/' + this.db,
    secret: crypto,
    db: 'mean-blog'
}