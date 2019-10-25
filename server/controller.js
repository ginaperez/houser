module.exports = {
    getAllHouses: (req, res, next) => {
        const { house } = req.body;
        res.status(200).send('all good');
    },
    deleteHouse: (req, res, next) => {
        const { house } = req.params;
        res.status(200).send('all good');
    },
    addHouse: (req, res, next) => {
        const { house } = req.query;
        res.status(200).send('all good');
    }
};