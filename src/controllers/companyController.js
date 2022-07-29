const CompanyService = require('../services/companyService');

exports.get = async (req, res, next) => {
    const payLoad = await new CompanyService().getAllCompanies();
    res.status(200).send(payLoad);
}

exports.getById = async (req, res, next) => {
    const payLoad = await new CompanyService().getCompanyById(req.params.id);
    res.status(200).send(payLoad);
}

exports.post = async (req, res, next) => {
    try {
        const payLoad = await new CompanyService().createCompany(req.body);
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

        const payLoad = await new CompanyService().updateCompany(id, body);
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

        const oldCompany = await new CompanyService().getCompanyById(id);

        if (!oldCompany || oldCompany.length === 0) {
            throw new Error(`Company with id ${id} not found`);
        }

        const payLoad = await new CompanyService().deleteCompany(id);
        res.status(204).send(payLoad);
    } catch (error) {
        res.status(404).send({
            message: error.message
        });
    }
}