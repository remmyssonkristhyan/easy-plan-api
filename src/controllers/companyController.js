const CompanyService = require('../services/companyService');

exports.get = async (req, res, next) => {
    const payLoad = await new CompanyService().getAllCompanies();
    res.status(200).send(payLoad);
}