const { Berrie } = require("../database/models");

const getAllBerries = async (req, res) => {
    const berries = await Berrie.findAll()
    console.log(berries)
    res.json(berries);
}

const getBerrie = async (req, res) => {
    const berrieid = req.params.id;
    const berrie = await Berrie.findOne({
        where: { id: berrieid },
    });
    res.json(berrie);
}

const setBerrie = async (req, res) => {
    const berrie = await Berrie.create(req.body);
}

module.exports = {getAllBerries, getBerrie, setBerrie}
