import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apigatewayv2_IntegrationResponseParameter,
  apigatewayv2_IntegrationResponseParameter_GetTypes,
} from "../types/apigatewayv2_IntegrationResponseParameter";
import {
  apigatewayv2_IntegrationTlsConfig,
  apigatewayv2_IntegrationTlsConfig_GetTypes,
} from "../types/apigatewayv2_IntegrationTlsConfig";

export interface IntegrationArgs {
  // API identifier.
  apiId?: string;

  // How to handle response payload content type conversions. Valid values: `CONVERT_TO_BINARY`, `CONVERT_TO_TEXT`. Supported only for WebSocket APIs.
  contentHandlingStrategy?: string;

  // Credentials required for the integration, if any.
  credentialsArn?: string;

  // AWS service action to invoke. Supported only for HTTP APIs when `integration_type` is `AWS_PROXY`. See the [AWS service integration reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html) documentation for supported values. Must be between 1 and 128 characters in length.
  integrationSubtype?: string;

  /*
Pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the `request_templates` attribute.
Valid values: `WHEN_NO_MATCH`, `WHEN_NO_TEMPLATES`, `NEVER`. Default is `WHEN_NO_MATCH`. Supported only for WebSocket APIs.
*/
  passthroughBehavior?: string;

  // Mappings to transform the HTTP response from a backend integration before returning the response to clients. Supported only for HTTP APIs.
  responseParameters?: Array<apigatewayv2_IntegrationResponseParameter>;

  // The [template selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-template-selection-expressions) for the integration.
  templateSelectionExpression?: string;

  // ID of the VPC link for a private integration. Supported only for HTTP APIs. Must be between 1 and 1024 characters in length.
  connectionId?: string;

  // Type of the network connection to the integration endpoint. Valid values: `INTERNET`, `VPC_LINK`. Default is `INTERNET`.
  connectionType?: string;

  /*
URI of the Lambda function for a Lambda proxy integration, when `integration_type` is `AWS_PROXY`.
For an `HTTP` integration, specify a fully-qualified URL. For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service.
*/
  integrationUri?: string;

  // The [format of the payload](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html#http-api-develop-integrations-lambda.proxy-format) sent to an integration. Valid values: `1.0`, `2.0`. Default is `1.0`.
  payloadFormatVersion?: string;

  /*
For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend.
For HTTP APIs with a specified `integration_subtype`, a key-value map specifying parameters that are passed to `AWS_PROXY` integrations.
For HTTP APIs without a specified `integration_subtype`, a key-value map specifying how to transform HTTP requests before sending them to the backend.
See the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html) for details.
*/
  requestParameters?: Map<string, string>;

  // Map of [Velocity](https://velocity.apache.org/) templates that are applied on the request payload based on the value of the Content-Type header sent by the client. Supported only for WebSocket APIs.
  requestTemplates?: Map<string, string>;

  // TLS configuration for a private integration. Supported only for HTTP APIs.
  tlsConfig?: apigatewayv2_IntegrationTlsConfig;

  // Integration's HTTP method. Must be specified if `integration_type` is not `MOCK`.
  integrationMethod?: string;

  /*
Integration type of an integration.
Valid values: `AWS` (supported only for WebSocket APIs), `AWS_PROXY`, `HTTP` (supported only for WebSocket APIs), `HTTP_PROXY`, `MOCK` (supported only for WebSocket APIs). For an HTTP API private integration, use `HTTP_PROXY`.
*/
  integrationType?: string;

  /*
Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs.
The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
this provider will only perform drift detection of its value when present in a configuration.
*/
  timeoutMilliseconds?: number;

  // Description of the integration.
  description?: string;
}
export class Integration extends Resource {
  // Credentials required for the integration, if any.
  public credentialsArn?: string;

  // The [integration response selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions) for the integration.
  public integrationResponseSelectionExpression?: string;

  // Mappings to transform the HTTP response from a backend integration before returning the response to clients. Supported only for HTTP APIs.
  public responseParameters?: Array<apigatewayv2_IntegrationResponseParameter>;

  /*
Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs.
The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
this provider will only perform drift detection of its value when present in a configuration.
*/
  public timeoutMilliseconds?: number;

  // API identifier.
  public apiId?: string;

  /*
Pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the `request_templates` attribute.
Valid values: `WHEN_NO_MATCH`, `WHEN_NO_TEMPLATES`, `NEVER`. Default is `WHEN_NO_MATCH`. Supported only for WebSocket APIs.
*/
  public passthroughBehavior?: string;

  // Map of [Velocity](https://velocity.apache.org/) templates that are applied on the request payload based on the value of the Content-Type header sent by the client. Supported only for WebSocket APIs.
  public requestTemplates?: Map<string, string>;

  // The [template selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-template-selection-expressions) for the integration.
  public templateSelectionExpression?: string;

  // AWS service action to invoke. Supported only for HTTP APIs when `integration_type` is `AWS_PROXY`. See the [AWS service integration reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html) documentation for supported values. Must be between 1 and 128 characters in length.
  public integrationSubtype?: string;

  /*
Integration type of an integration.
Valid values: `AWS` (supported only for WebSocket APIs), `AWS_PROXY`, `HTTP` (supported only for WebSocket APIs), `HTTP_PROXY`, `MOCK` (supported only for WebSocket APIs). For an HTTP API private integration, use `HTTP_PROXY`.
*/
  public integrationType?: string;

  /*
URI of the Lambda function for a Lambda proxy integration, when `integration_type` is `AWS_PROXY`.
For an `HTTP` integration, specify a fully-qualified URL. For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service.
*/
  public integrationUri?: string;

  // TLS configuration for a private integration. Supported only for HTTP APIs.
  public tlsConfig?: apigatewayv2_IntegrationTlsConfig;

  // Integration's HTTP method. Must be specified if `integration_type` is not `MOCK`.
  public integrationMethod?: string;

  // The [format of the payload](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html#http-api-develop-integrations-lambda.proxy-format) sent to an integration. Valid values: `1.0`, `2.0`. Default is `1.0`.
  public payloadFormatVersion?: string;

  /*
For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend.
For HTTP APIs with a specified `integration_subtype`, a key-value map specifying parameters that are passed to `AWS_PROXY` integrations.
For HTTP APIs without a specified `integration_subtype`, a key-value map specifying how to transform HTTP requests before sending them to the backend.
See the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html) for details.
*/
  public requestParameters?: Map<string, string>;

  // ID of the VPC link for a private integration. Supported only for HTTP APIs. Must be between 1 and 1024 characters in length.
  public connectionId?: string;

  // Type of the network connection to the integration endpoint. Valid values: `INTERNET`, `VPC_LINK`. Default is `INTERNET`.
  public connectionType?: string;

  // How to handle response payload content type conversions. Valid values: `CONVERT_TO_BINARY`, `CONVERT_TO_TEXT`. Supported only for WebSocket APIs.
  public contentHandlingStrategy?: string;

  // Description of the integration.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "templateSelectionExpression",
        "The [template selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-template-selection-expressions) for the integration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionId",
        "ID of the VPC link for a private integration. Supported only for HTTP APIs. Must be between 1 and 1024 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "tlsConfig",
        "TLS configuration for a private integration. Supported only for HTTP APIs.",
        apigatewayv2_IntegrationTlsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the integration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "passthroughBehavior",
        "Pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the `request_templates` attribute.\nValid values: `WHEN_NO_MATCH`, `WHEN_NO_TEMPLATES`, `NEVER`. Default is `WHEN_NO_MATCH`. Supported only for WebSocket APIs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "responseParameters",
        "Mappings to transform the HTTP response from a backend integration before returning the response to clients. Supported only for HTTP APIs.",
        apigatewayv2_IntegrationResponseParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "payloadFormatVersion",
        "The [format of the payload](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html#http-api-develop-integrations-lambda.proxy-format) sent to an integration. Valid values: `1.0`, `2.0`. Default is `1.0`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "integrationMethod",
        "Integration's HTTP method. Must be specified if `integration_type` is not `MOCK`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "credentialsArn",
        "Credentials required for the integration, if any.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "integrationSubtype",
        "AWS service action to invoke. Supported only for HTTP APIs when `integration_type` is `AWS_PROXY`. See the [AWS service integration reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html) documentation for supported values. Must be between 1 and 128 characters in length.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "integrationUri",
        "URI of the Lambda function for a Lambda proxy integration, when `integration_type` is `AWS_PROXY`.\nFor an `HTTP` integration, specify a fully-qualified URL. For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "requestParameters",
        "For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend.\nFor HTTP APIs with a specified `integration_subtype`, a key-value map specifying parameters that are passed to `AWS_PROXY` integrations.\nFor HTTP APIs without a specified `integration_subtype`, a key-value map specifying how to transform HTTP requests before sending them to the backend.\nSee the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html) for details.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "requestTemplates",
        "Map of [Velocity](https://velocity.apache.org/) templates that are applied on the request payload based on the value of the Content-Type header sent by the client. Supported only for WebSocket APIs.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "integrationType",
        "Integration type of an integration.\nValid values: `AWS` (supported only for WebSocket APIs), `AWS_PROXY`, `HTTP` (supported only for WebSocket APIs), `HTTP_PROXY`, `MOCK` (supported only for WebSocket APIs). For an HTTP API private integration, use `HTTP_PROXY`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiId",
        "API identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionType",
        "Type of the network connection to the integration endpoint. Valid values: `INTERNET`, `VPC_LINK`. Default is `INTERNET`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "timeoutMilliseconds",
        "Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs.\nThe default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.\nthis provider will only perform drift detection of its value when present in a configuration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentHandlingStrategy",
        "How to handle response payload content type conversions. Valid values: `CONVERT_TO_BINARY`, `CONVERT_TO_TEXT`. Supported only for WebSocket APIs.",
        [],
        false,
        false,
      ),
    ];
  }
}
