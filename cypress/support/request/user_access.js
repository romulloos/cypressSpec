class UserAccess {

    accountCreateRequest() {
        cy.request({
            method: 'POST',
            url: '/accountservice/accountrest/api/v1/register',
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: {
                accountType: 'USER',
                address: `${address}`,
                allowOffersPromotion: true,
                aobUser: true,
                cityName: `${cityName}`,
                country: `${country}`,
                email: `${email}`,
                firstName: `${firstName}`,
                lastName: `${lastName}`,
                loginName: `${loginName}`,
                password: `${password}`,
                phoneNumber: `${phoneNumber}`,
                stateProvince: `${stateProvince}`,
                zipcode: `${zipcode}`,
            },
        }).as('accountCreateRequest');
    }
    loginUser(email, loginPassword, loginUser) {
        cy.request({
            method: 'POST',
            url: '/accountservice/accountrest/api/v1/login',
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
            body: {
                email: `${email}`,
                loginPassword: `${loginPassword}`,
                loginUser: `${loginUser}`,
            }
        }).as('loginUser');
    }
    logoutUser(accountId, token) {
        cy.request({
            method: 'POST',
            url: '/accountservice/accountrest/api/v1/logout',
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json'
            },
            body: {
                accountId: `${accountId}`,
                token: `${token}`
            },
        }).as('logoutUser');
    }
}
export default UserAccess();