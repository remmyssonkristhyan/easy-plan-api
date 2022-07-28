const CompanyRepository = require('../database/repositories/companyRepository.js');

class CompanyService {

    constructor(){
        this.repository = new CompanyRepository();
    }

    async getAllCompanies(){
        return this.repository.findAll();
    };

    async getCompanyById(id){
        return this.repository.findById(id);
    };

    async createCompany(company){
        return this.repository.create(company);
    };
};

module.exports = CompanyService;