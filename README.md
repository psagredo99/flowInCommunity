# TestVisualizar Lightning Component

## Description

This Salesforce Lightning Component is designed to initialize and call a Flow using URL parameters. The component extracts URL parameters, retrieves specific values, and passes them to a Flow using the Lightning Component framework. It is designed to be used in a Salesforce Lightning environment and can be added to various page types, including record pages and community pages.

## Prerequisites

To use this component, you must have:

- Grant permission to object, fields and flow on comunity profile
- A Flow with the necessary input variables

## Usage

Drag and drop component into comunity page and configure variables in code.

### URL Parameters

URL parameters are passed in the format `key=value`. To use this component effectively, append the desired URL parameters to the page URL. For example:

In this example, `urlVar1` and `urlVar2` are the parameters you want to extract and pass to the Flow.

## Sample Code

The JavaScript code in this repository initializes the component, extracts URL parameters, and passes them to the Flow. Ensure that the API name of the Flow is correctly specified in the code.

```javascript
init: function (component) {
    // Extract URL parameters and pass them to the Flow.
    // ...
    var flow = component.find("flowData");
    
    var inputVariables = [        {            name: 'flowVar',            type: 'String',            value: urlVar1        }    ];

    flow.startFlow("flow_api_name", inputVariables);
}
