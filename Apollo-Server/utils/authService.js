const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

class AuthService {
    constructor({ accessToken }) {
        this.accessToken = accessToken
    }

    async getUser() {
        if (!this.accessToken) {
            return null
        }

        let tokenPayload

        try {
            tokenPayload = jwt.verify(this.accessToken, SECRET)
        }
        catch (error) {
            return null
        }

        return tokenPayload
    }
}

module.exports = AuthService