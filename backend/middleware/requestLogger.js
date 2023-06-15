const requestLogger = (request, response, next) => {
    console.log('!NEW HTTP MESSAGE!')
    console.log('METHOD: ', request.method)
    console.log('PATH: ', request.path)
    console.log('BODY: ', request.body)
    console.log('                  ')
    next()
}

module.exports = requestLogger