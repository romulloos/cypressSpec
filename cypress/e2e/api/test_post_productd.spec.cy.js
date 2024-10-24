/// <reference types = 'cypress' />
import methodPostProducts from '../../support/request/request_products';
import loginUser from '../../support/request/user_access';
describe("Teste de inclusao e consult de produtos", () => {

    it("teste de inclusao de produto", () => {
        let token = "0";
        let userId = 0;
        let sessionId = "0";
        let attributeName = "Headphone";
        let attributeValue = "Headphone test";
        let categoryId = 0;
        let code = "123";
        let inStock = 0; 
        let name = "Headphone test";
        let description = "Headphone test";
        let imageUrl = "test/Headphone";
        let images = "headphone_test";
        let price = 0;
        let productId = 0;
        let productName = "Headphone test";
        let productStatus = "Test";

        loginUser.loginUser(
            email, 
            loginPassword, 
            loginUser
        );
        cy.get("@loginUser").then((response) => {
            expect(response.status).to.be.equal(200);
            token = response.body.token;
            userId = response.body.userId;
            sessionId = response.body.sessionId;
        });

        methodPostProducts.methodPostProducts(
            token,
            attributeName,
            attributeValue,
            categoryId,
            code,
            inStock,
            name,
            description,
            imageUrl,
            images,
            price,
            productId,
            productName,
            productStatus
        );
        cy.get("@methodPostProducts").then((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body.id).to.be.equal(0);
            expect(response.body.imageColor).to.be.contains("");
            expect(response.body.imageId).to.be.contains("");
            expect(response.body.reason).to.be.contains("");
            expect(response.body.success).to.be.true;
        });
    });
});