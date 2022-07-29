const db = require("../index.js");
class businessRepository {
    async findAll() {
        const conn = await db.connectToMysql();
        const query = "SELECT * FROM business";
        const [businesses] = await conn.query(query);

        return businesses;
    }

    async findById(id) {
        const conn = await db.connectToMysql();
        const query = "SELECT * FROM business WHERE id = ?";
        const [business] = await conn.query(query, [id]);

        return business;
    }

    async create(businessData) {
        const conn = await db.connectToMysql();
        const query = "INSERT INTO business (businessName, entrepreneurName, businessDocument, businessDescription, businessSegment, customerDescription, customerWhere, customerFrequency, customerFactor, competitorDescription, hasSupplier, productDescription, businessDifferential, mainAdvertising, averageUnitPrice, salesPeriod, salesTotal, initialFunding, hasCapital, fundingWay, averageUnitCost, collaboratorCost, rentCost, otherCost) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const business = await conn.query(query, [
            businessData.businessName, 
            businessData.entrepreneurName,
            businessData.businessDocument,
            businessData.businessDescription,
            businessData.businessSegment,
            businessData.customerDescription,
            businessData.customerWhere,
            businessData.customerFrequency,
            businessData.customerFactor,
            businessData.competitorDescription,
            businessData.hasSupplier,
            businessData.productDescription,
            businessData.businessDifferential,
            businessData.mainAdvertising,
            businessData.averageUnitPrice,
            businessData.salesPeriod,
            businessData.salesTotal,
            businessData.initialFunding,
            businessData.hasCapital,
            businessData.fundingWay,
            businessData.averageUnitCost,
            businessData.collaboratorCost,
            businessData.rentCost,
            businessData.otherCost
        ]);

        return business;
    }

    async update(id, businessData) {
        const conn = await db.connectToMysql();
        const query = "UPDATE business SET businessName = ?, entrepreneurName = ?, bussinessDocument = ?, businessDescription = ?, businessSegment = ?, customerDescription = ?, customerWhere = ?, customerFrequency = ?, customerFactor = ?, competitorDescription = ?, hasSupplier = ?, productDescription = ?, businessDifferential = ?, mainAdvertising = ?, averageUnitPrice = ?, salesPeriod = ?, salesTotal = ?, initialFunding = ?, hasCapital = ?, fundingWay = ?, averageUnitCost = ?, collaboratorCost = ?, rentCost = ?, otherCost = ? WHERE id = ?";
        const business = await conn.query(query, [
            businessData.businessName, 
            businessData.entrepreneurName,
            businessData.businessDocument,
            businessData.businessDescription,
            businessData.businessSegment,
            businessData.customerDescription,
            businessData.customerWhere,
            businessData.customerFrequency,
            businessData.customerFactor,
            businessData.competitorDescription,
            businessData.hasSupplier,
            businessData.productDescription,
            businessData.businessDifferential,
            businessData.mainAdvertising,
            businessData.averageUnitPrice,
            businessData.salesPeriod,
            businessData.salesTotal,
            businessData.initialFunding,
            businessData.hasCapital,
            businessData.fundingWay,
            businessData.averageUnitCost,
            businessData.collaboratorCost,
            businessData.rentCost,
            businessData.otherCost,
            id
        ]);

        return business;
    }

    async delete(id) {
        const conn = await db.connectToMysql();
        const query = "DELETE FROM business WHERE id = ?";
        await conn.query(query, [id]);
    }
}

module.exports = businessRepository;