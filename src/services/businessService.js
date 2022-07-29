const businessRepository = require('../database/repositories/businessRepository.js');

class businessService {

    constructor(){
        this.repository = new businessRepository();
    }

    async getAllbusinesses(){
        return this.repository.findAll();
    };

    async getbusinessById(id){
        return this.repository.findById(id);
    };

    async createbusiness(business){
        return this.repository.create(business);
    };

    async updatebusiness(id, business){
        return this.repository.update(id, business);
    };

    async deletebusiness(id){
        return this.repository.delete(id);
    };
};

module.exports = businessService;