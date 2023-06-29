const { Region } = require("../database/models");

const getAllRegions = async (req, res) => {
    const regions = await Region.findAll()
    console.log(regions)
    res.json(regions);
}

const getRegion = async (req, res) => {
    const regionid = req.params.id;
    const region = await Region.findOne({
        where: { id: regionid },
    });
    res.json(region);
}
/*
const getCardinalPoint = async (req, res) => {
    const {id} = req.params;
    const region = await Region.findOne({
        where: { id: req.params.regionId}
    });
    res.json(region);
}
*/ 

const setRegion = async (req, res) => {
    const region = await Region.create(req.body);
}

module.exports = {getAllRegions, setRegion, getRegion};