const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs} = request.query;
        //Buscar todos devs num raio 10km
        //Filtar por tecnologias
        const techArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techArray,    
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },    
            },
        })


        return response.json({ devs })
    }
}