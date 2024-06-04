sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'custloyalpk/Purchases/test/integration/FirstJourney',
		'custloyalpk/Purchases/test/integration/pages/CustomersList',
		'custloyalpk/Purchases/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('custloyalpk/Purchases') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);