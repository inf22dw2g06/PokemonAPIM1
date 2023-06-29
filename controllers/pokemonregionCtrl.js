const {Pokemon, Region} = require('../database/models')

const getPokemonRegion = async (req, res) => {
    try {
      const { id } = req.params;
  
      const region = await Region.findByPk(id);
  
      if (!region) {
        return res.status(404).json({ error: 'Region no encontrada' });
      }
  
      const pokemons = await Pokemon.findAll({
        where: {RegionId: id},
        attributes: ['id', 'name', 'state'],
      });
  
      return res.json(pokemons);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error' });
    }
  };

module.exports = {getPokemonRegion}