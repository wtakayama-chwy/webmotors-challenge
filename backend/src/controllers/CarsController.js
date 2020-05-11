const connection = require('../database/connection');

module.exports = {
    
    async listBrands (req, res) {
        const brands = await connection('brands').select('*');

        return res.json(brands);
    },

    async listModels (req, res) {
        const { MakeID } = req.query;
        const models = await connection('models')
            .where('MakeID', MakeID);

        return res.json(models);
    },
    
    async listVersions (req, res) {
        const { ModelID } = req.query;  
        const versions = await connection('versions')
            .where('ModelID', ModelID);
        
        return res.json(versions);
    },

    async listVehicles (req, res) {

        // Total returned
        const [count] = await connection('vehicles').count()

        const { Page = 1 } = req.query;
        const vehicles = await connection('vehicles')
            .limit(10)
            .offset((Page -1) * 10)
            .select('*');

        res.header('X-Total-Count', count['count(*)']);

        return res.json(vehicles);
    }
}