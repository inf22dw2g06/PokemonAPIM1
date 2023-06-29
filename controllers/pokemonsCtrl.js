const { Pokemon } = require('../database/models');

const getAllPokemons = async (req, res) => {
    const pokemons = await Pokemon.findAll()
    console.log(pokemons)
    res.json(pokemons);
}

const getPokemon = async (req, res) => {
    const pokemonid = req.params.id;
    const pokemon = await Pokemon.findOne({
        where: { id: pokemonid },
    });
    res.json(pokemon);
}

const getPokemonRegion = async (req, res) => {
    const regionid = req.params.RegionId;
    const pokemon = await Pokemon.findOne({
        where: { Regionid: regionid },
    });
    res.json(pokemon);
}

/*
const getPokemonRegion = async (req, res) => {
    const pokemonregionid = req.params.re
    const pokemon = await Pokemon.findAll({
        include: [{
            model: Region,
            as: 'regions'
        }]
        where: (id: )
    });
    res.json(pokemon);
}
*/

const setPokemon = async (req, res) => {
    const pokemon = await Pokemon.create(req.body);
}

const updatePokemon = async (req, res) => {
    const {id} = req.params;
    var {name, state, RegionId } = req.body;
    await Pokemon.update({name: name, state: state, RegionId: RegionId}, {where:{id}})
    res.json({ success: 'Modificado'})
}

const deletePokemon = async (req, res) => { 
    const {id} =req.params;

    await Pokemon.destroy({
        where: { id }
    });
    res.json({ success: 'Borrado'});
}

module.exports = {getAllPokemons, getPokemon, setPokemon, deletePokemon, updatePokemon, getPokemonRegion};