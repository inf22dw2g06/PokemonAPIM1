const { Pokeball } = require("../database/models");

const getAllPokeballs = async (req, res) => {
    const pokeballs = await Pokeball.findAll()
    console.log(pokeballs)
    res.json(pokeballs);
}

const getPokeball = async (req, res) => {
    const pokeballid = req.params.id;
    const pokeball = await Pokeball.findOne({
        where: { id: pokeballid },
    });
    res.json(pokeball);
}

const setPokeball = async (req, res) => {
    const pokeball = await Pokeball.create(req.body);
}

module.exports = {getAllPokeballs, getPokeball, setPokeball}
