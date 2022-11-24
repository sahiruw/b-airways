
const logout = (req, res) => {
    res.clearCookie('loguser')
    // res.cookie('loguser', null, options) // options is optional
    res.send('')
}


module.exports = logout