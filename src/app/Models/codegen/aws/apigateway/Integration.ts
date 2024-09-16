import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  apigateway_IntegrationTlsConfig,
  apigateway_IntegrationTlsConfig_GetTypes,
} from '../types/apigateway_IntegrationTlsConfig';

export interface IntegrationArgs {
  // How to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`. If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the passthroughBehaviors is configured to support payload pass-through.
  contentHandling?: string;

  // ID of the VpcLink used for the integration. --Required-- if `connection_type` is `VPC_LINK`
  connectionId?: string;

  // Integration input's [connectionType](https://docs.aws.amazon.com/apigateway/api-reference/resource/integration/#connectionType). Valid values are `INTERNET` (default for connections through the public routable internet), and `VPC_LINK` (for private connections between API Gateway and a network load balancer in a VPC).
  connectionType?: string;

  /*
HTTP method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTION`, `ANY`)
when calling the associated resource.
*/
  httpMethod?: string;

  /*
Map of request query string parameters and headers that should be passed to the backend responder.
For example: `request_parameters = { "integration.request.header.X-Some-Other-Header" = "method.request.header.X-Some-Header" }`
*/
  requestParameters?: Map<string, string>;

  // API resource ID.
  resourceId?: string;

  // ID of the associated REST API.
  restApi?: string;

  // Custom timeout between 50 and 300,000 milliseconds. The default value is 29,000 milliseconds. You need to raise a [Service Quota Ticket](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) to increase time beyond 29,000 milliseconds.
  timeoutMilliseconds?: number;

  // Integration's cache namespace.
  cacheNamespace?: string;

  // Integration passthrough behavior (`WHEN_NO_MATCH`, `WHEN_NO_TEMPLATES`, `NEVER`).  --Required-- if `request_templates` is used.
  passthroughBehavior?: string;

  // Map of the integration's request templates.
  requestTemplates?: Map<string, string>;

  /*
Input's URI. --Required-- if `type` is `AWS`, `AWS_PROXY`, `HTTP` or `HTTP_PROXY`.
For HTTP integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification . For AWS integrations, the URI should be of the form `arn:aws:apigateway:{region}:{subdomain.service|service}:{path|action}/{service_api}`. `region`, `subdomain` and `service` are used to determine the right endpoint.
e.g., `arn:aws:apigateway:eu-west-1:lambda:path/2015-03-31/functions/arn:aws:lambda:eu-west-1:012345678901:function:my-func/invocations`. For private integrations, the URI parameter is not used for routing requests to your endpoint, but is used for setting the Host header and for certificate validation.
*/
  uri?: string;

  // Credentials required for the integration. For `AWS` integrations, 2 options are available. To specify an IAM Role for Amazon API Gateway to assume, use the role's ARN. To require that the caller's identity be passed through from the request, specify the string `arn:aws:iam::\-:user/\-`.
  credentials?: string;

  /*
Integration HTTP method
(`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONs`, `ANY`, `PATCH`) specifying how API Gateway will interact with the back end.
--Required-- if `type` is `AWS`, `AWS_PROXY`, `HTTP` or `HTTP_PROXY`.
Not all methods are compatible with all `AWS` integrations.
e.g., Lambda function [can only be invoked](https://github.com/awslabs/aws-apigateway-importer/issues/9#issuecomment-129651005) via `POST`.
*/
  integrationHttpMethod?: string;

  // TLS configuration. See below.
  tlsConfig?: apigateway_IntegrationTlsConfig;

  // Integration input's [type](https://docs.aws.amazon.com/apigateway/api-reference/resource/integration/). Valid values are `HTTP` (for HTTP backends), `MOCK` (not calling any real backend), `AWS` (for AWS services), `AWS_PROXY` (for Lambda proxy integration) and `HTTP_PROXY` (for HTTP proxy integration). An `HTTP` or `HTTP_PROXY` integration with a `connection_type` of `VPC_LINK` is referred to as a private integration and uses a VpcLink to connect API Gateway to a network load balancer of a VPC.
  type?: string;

  // List of cache key parameters for the integration.
  cacheKeyParameters?: Array<string>;
}
export class Integration extends DS_Resource {
  /*
HTTP method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTION`, `ANY`)
when calling the associated resource.
*/
  public httpMethod?: string;

  // API resource ID.
  public resourceId?: string;

  // ID of the associated REST API.
  public restApi?: string;

  // Integration's cache namespace.
  public cacheNamespace?: string;

  // Integration input's [connectionType](https://docs.aws.amazon.com/apigateway/api-reference/resource/integration/#connectionType). Valid values are `INTERNET` (default for connections through the public routable internet), and `VPC_LINK` (for private connections between API Gateway and a network load balancer in a VPC).
  public connectionType?: string;

  // Map of the integration's request templates.
  public requestTemplates?: Map<string, string>;

  // TLS configuration. See below.
  public tlsConfig?: apigateway_IntegrationTlsConfig;

  // List of cache key parameters for the integration.
  public cacheKeyParameters?: Array<string>;

  // Integration passthrough behavior (`WHEN_NO_MATCH`, `WHEN_NO_TEMPLATES`, `NEVER`).  --Required-- if `request_templates` is used.
  public passthroughBehavior?: string;

  // Custom timeout between 50 and 300,000 milliseconds. The default value is 29,000 milliseconds. You need to raise a [Service Quota Ticket](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) to increase time beyond 29,000 milliseconds.
  public timeoutMilliseconds?: number;

  // Integration input's [type](https://docs.aws.amazon.com/apigateway/api-reference/resource/integration/). Valid values are `HTTP` (for HTTP backends), `MOCK` (not calling any real backend), `AWS` (for AWS services), `AWS_PROXY` (for Lambda proxy integration) and `HTTP_PROXY` (for HTTP proxy integration). An `HTTP` or `HTTP_PROXY` integration with a `connection_type` of `VPC_LINK` is referred to as a private integration and uses a VpcLink to connect API Gateway to a network load balancer of a VPC.
  public type?: string;

  /*
Input's URI. --Required-- if `type` is `AWS`, `AWS_PROXY`, `HTTP` or `HTTP_PROXY`.
For HTTP integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification . For AWS integrations, the URI should be of the form `arn:aws:apigateway:{region}:{subdomain.service|service}:{path|action}/{service_api}`. `region`, `subdomain` and `service` are used to determine the right endpoint.
e.g., `arn:aws:apigateway:eu-west-1:lambda:path/2015-03-31/functions/arn:aws:lambda:eu-west-1:012345678901:function:my-func/invocations`. For private integrations, the URI parameter is not used for routing requests to your endpoint, but is used for setting the Host header and for certificate validation.
*/
  public uri?: string;

  // ID of the VpcLink used for the integration. --Required-- if `connection_type` is `VPC_LINK`
  public connectionId?: string;

  /*
Integration HTTP method
(`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONs`, `ANY`, `PATCH`) specifying how API Gateway will interact with the back end.
--Required-- if `type` is `AWS`, `AWS_PROXY`, `HTTP` or `HTTP_PROXY`.
Not all methods are compatible with all `AWS` integrations.
e.g., Lambda function [can only be invoked](https://github.com/awslabs/aws-apigateway-importer/issues/9#issuecomment-129651005) via `POST`.
*/
  public integrationHttpMethod?: string;

  /*
Map of request query string parameters and headers that should be passed to the backend responder.
For example: `request_parameters = { "integration.request.header.X-Some-Other-Header" = "method.request.header.X-Some-Header" }`
*/
  public requestParameters?: Map<string, string>;

  // How to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`. If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the passthroughBehaviors is configured to support payload pass-through.
  public contentHandling?: string;

  // Credentials required for the integration. For `AWS` integrations, 2 options are available. To specify an IAM Role for Amazon API Gateway to assume, use the role's ARN. To require that the caller's identity be passed through from the request, specify the string `arn:aws:iam::\-:user/\-`.
  public credentials?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'tlsConfig',
        'TLS configuration. See below.',
        () => apigateway_IntegrationTlsConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        "Integration input's [type](https://docs.aws.amazon.com/apigateway/api-reference/resource/integration/). Valid values are `HTTP` (for HTTP backends), `MOCK` (not calling any real backend), `AWS` (for AWS services), `AWS_PROXY` (for Lambda proxy integration) and `HTTP_PROXY` (for HTTP proxy integration). An `HTTP` or `HTTP_PROXY` integration with a `connection_type` of `VPC_LINK` is referred to as a private integration and uses a VpcLink to connect API Gateway to a network load balancer of a VPC.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'contentHandling',
        'How to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`. If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the passthroughBehaviors is configured to support payload pass-through.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'timeoutMilliseconds',
        'Custom timeout between 50 and 300,000 milliseconds. The default value is 29,000 milliseconds. You need to raise a [Service Quota Ticket](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) to increase time beyond 29,000 milliseconds.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'credentials',
        "Credentials required for the integration. For `AWS` integrations, 2 options are available. To specify an IAM Role for Amazon API Gateway to assume, use the role's ARN. To require that the caller's identity be passed through from the request, specify the string `arn:aws:iam::\\*:user/\\*`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'cacheNamespace',
        "Integration's cache namespace.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'requestParameters',
        'Map of request query string parameters and headers that should be passed to the backend responder.\nFor example: `request_parameters = { "integration.request.header.X-Some-Other-Header" = "method.request.header.X-Some-Header" }`',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'restApi',
        'ID of the associated REST API.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'passthroughBehavior',
        'Integration passthrough behavior (`WHEN_NO_MATCH`, `WHEN_NO_TEMPLATES`, `NEVER`).  **Required** if `request_templates` is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'requestTemplates',
        "Map of the integration's request templates.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'cacheKeyParameters',
        'List of cache key parameters for the integration.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'connectionId',
        'ID of the VpcLink used for the integration. **Required** if `connection_type` is `VPC_LINK`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'connectionType',
        "Integration input's [connectionType](https://docs.aws.amazon.com/apigateway/api-reference/resource/integration/#connectionType). Valid values are `INTERNET` (default for connections through the public routable internet), and `VPC_LINK` (for private connections between API Gateway and a network load balancer in a VPC).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'httpMethod',
        'HTTP method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTION`, `ANY`)\nwhen calling the associated resource.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceId',
        'API resource ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'uri',
        "Input's URI. **Required** if `type` is `AWS`, `AWS_PROXY`, `HTTP` or `HTTP_PROXY`.\nFor HTTP integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification . For AWS integrations, the URI should be of the form `arn:aws:apigateway:{region}:{subdomain.service|service}:{path|action}/{service_api}`. `region`, `subdomain` and `service` are used to determine the right endpoint.\ne.g., `arn:aws:apigateway:eu-west-1:lambda:path/2015-03-31/functions/arn:aws:lambda:eu-west-1:012345678901:function:my-func/invocations`. For private integrations, the URI parameter is not used for routing requests to your endpoint, but is used for setting the Host header and for certificate validation.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'integrationHttpMethod',
        'Integration HTTP method\n(`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONs`, `ANY`, `PATCH`) specifying how API Gateway will interact with the back end.\n**Required** if `type` is `AWS`, `AWS_PROXY`, `HTTP` or `HTTP_PROXY`.\nNot all methods are compatible with all `AWS` integrations.\ne.g., Lambda function [can only be invoked](https://github.com/awslabs/aws-apigateway-importer/issues/9#issuecomment-129651005) via `POST`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
