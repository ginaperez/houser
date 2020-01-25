module.exports = {
    search: (req, res) => {
        const { query } = req.query;
        const db = req.app.get('db');
        dbQuery = 'SELECT * FROM houses';
        if(query) {
            dbQuery += `WHERE desired_rent ILIKE '%${query}%'`;
        }
        db.query(dbQuery).then(houses => {
            if(!houses) {
                res.status(200).send(houses);
            } else {
                res.status(200).send(houses);
            }
        })
    }
};