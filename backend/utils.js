import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
    return jwt.sign(user,'abcd1234',{
        expiresIn:'30d',
    })
}