module.exports = {    
    displayHouses: async (req, res, next) => {
        const { house_id } = req.params;
        const db = req.app.get('db');
        const getHouses = await db.display_houses(house_id)
        res.status(200).send(getHouses);
    },
    addHouse: (req, res, next) => {
        const { house } = req.query;
        res.status(200).send('all good');
    },
     
    deleteHouse: (req, res, next) => {
        const { house } = req.params;
        res.status(200).send('all good');
    },
}