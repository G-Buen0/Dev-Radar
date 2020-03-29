const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {

    //Listar devs
    async index(request, response){
        const devs = await Dev.find()
        return response.json(devs)
    },

    //Armazenar um dev
    async store(request, response){ 
        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({github_username})

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`) //Aguadar isso ocorrer
        
            const { name = login, avatar_url, bio } = apiResponse.data //Se o nome nao existir, ele cadastra com o login

            const techsArray = parseStringAsArray(techs)
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username, //Short sintax. Propriedade com mesmo nome da variavel
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
 
        }

               return response.json(dev)
    },

}