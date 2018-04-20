module.exports = {

    login: (req, res) => {
        const dbInstance = req.app.get('db')
        const {username, password} = req.body;

        dbInstance.addLogin([username, password]).then(user=>res.status(200).send(user))

    }

}