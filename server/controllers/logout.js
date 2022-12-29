
const logout = (req, res) => {
    res.clearCookie('loguser')

    return res.json({
        status: 1,
        message: "USer has been logged out! ",
      });
}


module.exports = logout