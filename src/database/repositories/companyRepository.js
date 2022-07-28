const db = require("../index.js");
class CompanyRepository {
    async findAll() {
        const companies = [
            {
                companyName: 'Microsoft',
                entrepreneurName: 'Bill Gates',
                document: '12345678910',
                businessDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat.',
                businessSegment: 'Tecnologia',
                customers: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat.',
                customerWhere: 'outros países',
                customerFrequency: 'sempre',
                customerFactor: 'marca',
                competitors: 'Apple, Google',
                suppliers: 'Chineses',
                productDescription: 'rWindows: o sistema operacional nº 1 em travamentos no mundo',
                businessDifferential: 'nxjanxjnskxnasjxnknx',
                mainAdvertising: 'shxabsxiuasbxiusabxuiabsi',
                averagePrice: 500.00,
                salesPeriod: 480000.00,
                salesTotal: 10000000000.00,
                initialFunding: 4545418485.00,
                hasCapital: true,
                fundingWay: 'outros',
                averageCost: 30.00,
                collaboratorCost: 5000.00,
                rentCost: 0,
                otherCosts: 1212222.00
            }
        ];
        return companies;
    }
}

module.exports = CompanyRepository;