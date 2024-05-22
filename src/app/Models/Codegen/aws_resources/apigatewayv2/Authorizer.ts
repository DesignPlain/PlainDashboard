import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apigatewayv2_AuthorizerJwtConfiguration,
  apigatewayv2_AuthorizerJwtConfiguration_GetTypes,
} from "../types/apigatewayv2_AuthorizerJwtConfiguration";

export interface AuthorizerArgs {
  /*
Time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled.
If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Defaults to `300`.
Supported only for HTTP API Lambda authorizers.
*/
  authorizerResultTtlInSeconds?: number;

  /*
Authorizer type. Valid values: `JWT`, `REQUEST`.
Specify `REQUEST` for a Lambda function using incoming request parameters.
For HTTP APIs, specify `JWT` to use JSON Web Tokens.
*/
  authorizerType?: string;

  /*
Whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy.
Supported only for HTTP APIs.
*/
  enableSimpleResponses?: boolean;

  /*
Identity sources for which authorization is requested.
For `REQUEST` authorizers the value is a list of one or more mapping expressions of the specified request parameters.
For `JWT` authorizers the single entry specifies where to extract the JSON Web Token (JWT) from inbound requests.
*/
  identitySources?: Array<string>;

  /*
Configuration of a JWT authorizer. Required for the `JWT` authorizer type.
Supported only for HTTP APIs.
*/
  jwtConfiguration?: apigatewayv2_AuthorizerJwtConfiguration;

  // Name of the authorizer. Must be between 1 and 128 characters in length.
  name?: string;

  // API identifier.
  apiId?: string;

  /*
Format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers.
Valid values: `1.0`, `2.0`.
*/
  authorizerPayloadFormatVersion?: string;

  /*
Authorizer's Uniform Resource Identifier (URI).
For `REQUEST` authorizers this must be a well-formed Lambda function URI, such as the `invoke_arn` attribute of the `aws.lambda.Function` resource.
Supported only for `REQUEST` authorizers. Must be between 1 and 2048 characters in length.
*/
  authorizerUri?: string;

  /*
Required credentials as an IAM role for API Gateway to invoke the authorizer.
Supported only for `REQUEST` authorizers.
*/
  authorizerCredentialsArn?: string;
}
export class Authorizer extends Resource {
  /*
Authorizer's Uniform Resource Identifier (URI).
For `REQUEST` authorizers this must be a well-formed Lambda function URI, such as the `invoke_arn` attribute of the `aws.lambda.Function` resource.
Supported only for `REQUEST` authorizers. Must be between 1 and 2048 characters in length.
*/
  public authorizerUri?: string;

  /*
Whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy.
Supported only for HTTP APIs.
*/
  public enableSimpleResponses?: boolean;

  /*
Identity sources for which authorization is requested.
For `REQUEST` authorizers the value is a list of one or more mapping expressions of the specified request parameters.
For `JWT` authorizers the single entry specifies where to extract the JSON Web Token (JWT) from inbound requests.
*/
  public identitySources?: Array<string>;

  // API identifier.
  public apiId?: string;

  /*
Format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers.
Valid values: `1.0`, `2.0`.
*/
  public authorizerPayloadFormatVersion?: string;

  /*
Time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled.
If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Defaults to `300`.
Supported only for HTTP API Lambda authorizers.
*/
  public authorizerResultTtlInSeconds?: number;

  // Name of the authorizer. Must be between 1 and 128 characters in length.
  public name?: string;

  /*
Required credentials as an IAM role for API Gateway to invoke the authorizer.
Supported only for `REQUEST` authorizers.
*/
  public authorizerCredentialsArn?: string;

  /*
Authorizer type. Valid values: `JWT`, `REQUEST`.
Specify `REQUEST` for a Lambda function using incoming request parameters.
For HTTP APIs, specify `JWT` to use JSON Web Tokens.
*/
  public authorizerType?: string;

  /*
Configuration of a JWT authorizer. Required for the `JWT` authorizer type.
Supported only for HTTP APIs.
*/
  public jwtConfiguration?: apigatewayv2_AuthorizerJwtConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "identitySources",
        "Identity sources for which authorization is requested.\nFor `REQUEST` authorizers the value is a list of one or more mapping expressions of the specified request parameters.\nFor `JWT` authorizers the single entry specifies where to extract the JSON Web Token (JWT) from inbound requests.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "jwtConfiguration",
        "Configuration of a JWT authorizer. Required for the `JWT` authorizer type.\nSupported only for HTTP APIs.",
        apigatewayv2_AuthorizerJwtConfiguration_GetTypes(),
        false,
        false,
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
        "authorizerUri",
        "Authorizer's Uniform Resource Identifier (URI).\nFor `REQUEST` authorizers this must be a well-formed Lambda function URI, such as the `invoke_arn` attribute of the `aws.lambda.Function` resource.\nSupported only for `REQUEST` authorizers. Must be between 1 and 2048 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizerCredentialsArn",
        "Required credentials as an IAM role for API Gateway to invoke the authorizer.\nSupported only for `REQUEST` authorizers.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "authorizerResultTtlInSeconds",
        "Time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled.\nIf it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Defaults to `300`.\nSupported only for HTTP API Lambda authorizers.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizerType",
        "Authorizer type. Valid values: `JWT`, `REQUEST`.\nSpecify `REQUEST` for a Lambda function using incoming request parameters.\nFor HTTP APIs, specify `JWT` to use JSON Web Tokens.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableSimpleResponses",
        "Whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy.\nSupported only for HTTP APIs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the authorizer. Must be between 1 and 128 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizerPayloadFormatVersion",
        "Format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers.\nValid values: `1.0`, `2.0`.",
        [],
        false,
        false,
      ),
    ];
  }
}
