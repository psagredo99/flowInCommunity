
/**
 * Author: Pablo Sagredo - pablo.sagredo@pkf-attest.es
 * Date: 25/10/2023
 *
 * Description: This JavaScript code is a function that initializes a component.
 * It retrieves URL parameters, to call a flow with the parameters map
 */
({
    init : function (component) {
        console.log('TEST');
        var sPageURL = decodeURIComponent(window.location.search.substring(1)); //You get the whole decoded URL of the page.
        var sURLVariables = sPageURL.split('&'); //Split by & so that you get the key value pairs separately in a list
        var sParameterName;
        var i;
        var urlVar1;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('='); //to split the key from the value.

            if (sParameterName[0] === 'urlVar1') { //this is the name of var passed on URL: http://***.com/site/?urlVar1=123&urlVar2=345
                sParameterName[1] === undefined ? 'Not found' : sParameterName[1];
            }
        }
        urlVar1=sParameterName[1];
        console.log('Param value --> '+urlVar1);
        var flow = component.find("flowData");
        
        var inputVariables = [
            {
                name : 'flowVar',
                type : 'String',
                value : urlVar1
            }
        ];

        flow.startFlow("flow_api_name",inputVariables);		
    }
})
