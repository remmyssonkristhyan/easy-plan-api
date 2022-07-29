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

    async updateCompany(id, company){
        return this.repository.update(id, company);
    };

    async deleteCompany(id){
        return this.repository.delete(id);
    };
};

module.exports = CompanyService;