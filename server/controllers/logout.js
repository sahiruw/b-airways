
const logout = (req, res) => {
    res.clearCookie('loguser')
    res.send('')
}


module.exports = logout