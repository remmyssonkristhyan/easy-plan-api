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
    const payLoad = await new CompanyService().createCompany(req.body);
    res.status(200).send(payLoad);
}