const CompanyRepository = require('../database/repositories/companyRepository.js');

class CompanyService {

    constructor(){
        this.repository = new CompanyRepository();
    }

    async getAllCompanies(){
        return this.repository.findAll();
    };
};

module.exports = CompanyService;