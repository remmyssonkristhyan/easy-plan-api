const db = require("../index.js");
class CompanyRepository {
    async findAll() {
        const conn = await db.connectToMysql();
        const query = "SELECT * FROM company";
        const [companies] = await conn.query(query);

        return companies;
    }

    async findById(id) {
        const conn = await db.connectToMysql();
        const query = "SELECT * FROM company WHERE id = ?";
        const [company] = await conn.query(query, [id]);

        return company;
    }

    async create(companyData) {
        const conn = await db.connectToMysql();
        const query = "INSERT INTO company (companyName, entrepreneurName, document, businessDescription, businessSegment, customers, customerWhere, customerFrequency, customerFactor, competitors, suppliers, productDescription, businessDifferential, mainAdvertising, averagePrice, salesPeriod, salesTotal, initialFunding, hasCapital, fundingWay, averageCost, collaboratorCost, rentCost, otherCosts) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const company = await conn.query(query, [
            companyData.companyName, 
            companyData.entrepreneurName,
            companyData.document,
            companyData.businessDescription,
            companyData.businessSegment,
            companyData.customers,
            companyData.customerWhere,
            companyData.customerFrequency,
            companyData.customerFactor,
            companyData.competitors,
            companyData.suppliers,
            companyData.productDescription,
            companyData.businessDifferential,
            companyData.mainAdvertising,
            companyData.averagePrice,
            companyData.salesPeriod,
            companyData.salesTotal,
            companyData.initialFunding,
            companyData.hasCapital,
            companyData.fundingWay,
            companyData.averageCost,
            companyData.collaboratorCost,
            companyData.rentCost,
            companyData.otherCosts
        ]);

        return company;
    }

    async update(id, companyData) {
        const conn = await db.connectToMysql();
        const query = "UPDATE company SET companyName = ?, entrepreneurName = ?, document = ?, businessDescription = ?, businessSegment = ?, customers = ?, customerWhere = ?, customerFrequency = ?, customerFactor = ?, competitors = ?, suppliers = ?, productDescription = ?, businessDifferential = ?, mainAdvertising = ?, averagePrice = ?, salesPeriod = ?, salesTotal = ?, initialFunding = ?, hasCapital = ?, fundingWay = ?, averageCost = ?, collaboratorCost = ?, rentCost = ?, otherCosts = ? WHERE id = ?";
        const company = await conn.query(query, [
            companyData.companyName, 
            companyData.entrepreneurName,
            companyData.document,
            companyData.businessDescription,
            companyData.businessSegment,
            companyData.customers,
            companyData.customerWhere,
            companyData.customerFrequency,
            companyData.customerFactor,
            companyData.competitors,
            companyData.suppliers,
            companyData.productDescription,
            companyData.businessDifferential,
            companyData.mainAdvertising,
            companyData.averagePrice,
            companyData.salesPeriod,
            companyData.salesTotal,
            companyData.initialFunding,
            companyData.hasCapital,
            companyData.fundingWay,
            companyData.averageCost,
            companyData.collaboratorCost,
            companyData.rentCost,
            companyData.otherCosts,
            id
        ]);

        return company;
    }

    async delete(id) {
        const conn = await db.connectToMysql();
        const query = "DELETE FROM company WHERE id = ?";
        await conn.query(query, [id]);
    }
}

module.exports = CompanyRepository;