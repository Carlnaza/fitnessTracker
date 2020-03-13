module.exports = require('mongoose').connect(MONGODB_URI ? MONGODB_URI : 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})