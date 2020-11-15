const mongoose = require('mongoose')

mongoose.connect('process.env.MONGOGB_URL', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})