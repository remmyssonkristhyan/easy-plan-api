const businessService = require('../services/businessService');

exports.get = async (req, res, next) => {
    const payLoad = await new businessService().getAllbusinesses();
    res.status(200).send(payLoad);
}

exports.getById = async (req, res, next) => {
    const payLoad = await new businessService().getbusinessById(req.params.id);
    res.status(200).send(payLoad);
}

exports.post = async (req, res, next) => {
    try {
        const payLoad = await new businessService().createbusiness(req.body);
        res.status(201).send(payLoad);
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}

exports.put = async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const payLoad = await new businessService().updatebusiness(id, body);
        res.status(200).send(payLoad);
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id;

        const oldbusiness = await new businessService().getbusinessById(id);

        if (!oldbusiness || oldbusiness.length === 0) {
            throw new Error(`business with id ${id} not found`);
        }

        const payLoad = await new businessService().deletebusiness(id);
        res.status(204).send(payLoad);
    } catch (error) {
        res.status(404).send({
            message: error.message
        });
    }
}