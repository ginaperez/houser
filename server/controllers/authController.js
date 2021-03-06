const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const { username, email, password } = req.body;
        const db = req.app.get('db');
        const foundUser = await db.find_user_by_email(email);
        if(foundUser.length) {
            return res.status(400).send("User already exists! Please log in.")
        } else {
            const saltRounds = 12;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt);
            const [ newUser ] = await db.create_user([username, email, hashedPassword]);
            req.session.user = newUser;
            res.status(200).send(req.session.user);
        }
    },
    login: (req, res, next) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        db.find_user_by_email(email).then(([foundUser]) => {
            if(!foundUser) {
                res.status(400).send("User not found.");
            } else {
                bcrypt.compare(password, foundUser.password).then(isAuthenticated => {
                    if(isAuthenticated) {
                        req.session.user = {
                            user_id: foundUser.user_id,
                            username: foundUser.username,
                            password: foundUser.password,
                            email: foundUser.email,
                            image: foundUser.image
                        };
                        res.status(200).send(req.session.user);
                    } else {
                        res.status(400).send("Login failed.")
                    }
                });
            }
        }).catch(err => console.log(err));
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send('See you next time!')
    },
    userSession: (req, res, next) => {
        res.status(200).send(req.session.user);
    }
}