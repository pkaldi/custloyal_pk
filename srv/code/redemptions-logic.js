/**
 * 
 * @On(event = { "CREATE" }, entity = "custloyal_pkSrv.Redemptions")
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(request) {
    // Get the related customer
    const customer = await SELECT.one.from('custloyal_pkSrv.Customers').where({ ID: request.data.customer_ID });

    // Check if the customer has enough reward points
    if (customer && customer.totalRewardPoints >= request.data.redeemedAmount) {
        // Deduct the redemption amount from the customer's total reward points
        customer.totalRewardPoints -= request.data.redeemedAmount;
        // Add the redeemed amount to the customer's total redeemed reward points
        customer.totalRedeemedRewardPoints += request.data.redeemedAmount;

        // Update the customer's total reward points and total redeemed reward points
        await UPDATE('custloyal_pkSrv.Customers')
            .set({
                totalRewardPoints: customer.totalRewardPoints,
                totalRedeemedRewardPoints: customer.totalRedeemedRewardPoints
            })
            .where({ ID: customer.ID });
    } else {
        // Throw an error if the customer does not have enough reward points
        throw new Error('The customer does not have enough reward points for this redemption.');
    }
}