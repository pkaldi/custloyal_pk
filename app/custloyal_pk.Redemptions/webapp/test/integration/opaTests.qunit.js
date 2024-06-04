sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'custloyalpk/Redemptions/test/integration/FirstJourney',
		'custloyalpk/Redemptions/test/integration/pages/RedemptionsList',
		'custloyalpk/Redemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('custloyalpk/Redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);