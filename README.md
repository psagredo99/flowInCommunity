# TestVisualizar Lightning Component

## Description

This Salesforce Lightning Component is designed to initialize and call a Flow using URL parameters. The component extracts URL parameters, retrieves specific values, and passes them to a Flow using the Lightning Component framework. It is designed to be used in a Salesforce Lightning environment and can be added to various page types, including record pages and community pages.

## Prerequisites

To use this component, you must have:

- Access to a Salesforce org.
- A Flow with the necessary variables and logic.
- Basic knowledge of Salesforce Lightning components and development.

## Installation

To use this component in your Salesforce org, follow these steps:

1. Clone this repository to your local machine or download the code.

2. Deploy the component to your Salesforce org using your preferred deployment method, such as the Salesforce CLI, Salesforce DX, or the Salesforce Setup UI.

3. Ensure that the necessary Flow is available in your Salesforce org and note its API name.

4. Add the "TestVisualizar" Lightning Component to the desired Lightning page or component container within your Salesforce org.

5. Make sure the component is configured with the necessary API name of the Flow you want to call.

## Usage

Once the "TestVisualizar" component is added to a Lightning page, it will initialize and extract URL parameters. These parameters are used to set variables in the specified Flow, triggering its execution. The primary use case is to dynamically pass information to a Flow for custom processing.

## Configuration

### Component Configuration

The component itself doesn't require extensive configuration. Ensure that it's set up with the correct API name of the Flow you want to call.

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
