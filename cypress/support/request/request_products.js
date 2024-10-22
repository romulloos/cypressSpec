class RequestProducts {

    methodPostProducts(
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
    ){
        cy.request({
            method: 'POST',
            url: '/api/v1/products',
            headers: {
                accept: "*/*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: {
                attributes: [
                    {
                        attributeName: `${attributeName}`,
                        attributeValue: `${attributeValue}`
                    }
                ],
                categoryId: categoryId,
                colors: [
                    {
                        code: `${code}`,
                        inStock: inStock,
                        name: `${name}`
                    }
                ],
                description: `${description}`,
                imageUrl: `${imageUrl}`,
                images: [
                    `${images}`
                ],
                price: price,
                productId: productId,
                productName: `${productName}`,
                productStatus: `${productStatus}`
            },
            failOnStatusCode: true,
        }).as("methodPostProducts");
    }
}

export default RequestProducts();