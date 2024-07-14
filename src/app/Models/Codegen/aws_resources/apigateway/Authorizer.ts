import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AuthorizerArgs {
  // Name of the authorizer
  name?: string;

  // List of the Amazon Cognito user pool ARNs. Each element is of this format: `arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}`.
  providerArns?: Array<string>;

  // ID of the associated REST API
  restApi?: string;

  // Type of the authorizer. Possible values are `TOKEN` for a Lambda function using a single authorization token submitted in a custom header, `REQUEST` for a Lambda function using incoming request parameters, or `COGNITO_USER_POOLS` for using an Amazon Cognito user pool. Defaults to `TOKEN`.
  type?: string;

  // TTL of cached authorizer results in seconds. Defaults to `300`.
  authorizerResultTtlInSeconds?: number;

  /*
Authorizer's Uniform Resource Identifier (URI). This must be a well-formed Lambda function URI in the form of `arn:aws:apigateway:{region}:lambda:path/{service_api}`,
e.g., `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:012345678912:function:my-function/invocations`
*/
  authorizerUri?: string;

  // Validation expression for the incoming identity. For `TOKEN` type, this value should be a regular expression. The incoming token from the client is matched against this expression, and will proceed if the token matches. If the token doesn't match, the client receives a 401 Unauthorized response.
  identityValidationExpression?: string;

  // Credentials required for the authorizer. To specify an IAM Role for API Gateway to assume, use the IAM Role ARN.
  authorizerCredentials?: string;

  // Source of the identity in an incoming request. Defaults to `method.request.header.Authorization`. For `REQUEST` type, this may be a comma-separated list of values, including headers, query string parameters and stage variables - e.g., `"method.request.header.SomeHeaderName,method.request.querystring.SomeQueryStringName,stageVariables.SomeStageVariableName"`
  identitySource?: string;
}
export class Authorizer extends Resource {
  // TTL of cached authorizer results in seconds. Defaults to `300`.
  public authorizerResultTtlInSeconds?: number;

  /*
Authorizer's Uniform Resource Identifier (URI). This must be a well-formed Lambda function URI in the form of `arn:aws:apigateway:{region}:lambda:path/{service_api}`,
e.g., `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:012345678912:function:my-function/invocations`
*/
  public authorizerUri?: string;

  // Validation expression for the incoming identity. For `TOKEN` type, this value should be a regular expression. The incoming token from the client is matched against this expression, and will proceed if the token matches. If the token doesn't match, the client receives a 401 Unauthorized response.
  public identityValidationExpression?: string;

  // ID of the associated REST API
  public restApi?: string;

  // List of the Amazon Cognito user pool ARNs. Each element is of this format: `arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}`.
  public providerArns?: Array<string>;

  // Type of the authorizer. Possible values are `TOKEN` for a Lambda function using a single authorization token submitted in a custom header, `REQUEST` for a Lambda function using incoming request parameters, or `COGNITO_USER_POOLS` for using an Amazon Cognito user pool. Defaults to `TOKEN`.
  public type?: string;

  // ARN of the API Gateway Authorizer
  public arn?: string;

  // Credentials required for the authorizer. To specify an IAM Role for API Gateway to assume, use the IAM Role ARN.
  public authorizerCredentials?: string;

  // Source of the identity in an incoming request. Defaults to `method.request.header.Authorization`. For `REQUEST` type, this may be a comma-separated list of values, including headers, query string parameters and stage variables - e.g., `"method.request.header.SomeHeaderName,method.request.querystring.SomeQueryStringName,stageVariables.SomeStageVariableName"`
  public identitySource?: string;

  // Name of the authorizer
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "restApi",
        "ID of the associated REST API",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of the authorizer. Possible values are `TOKEN` for a Lambda function using a single authorization token submitted in a custom header, `REQUEST` for a Lambda function using incoming request parameters, or `COGNITO_USER_POOLS` for using an Amazon Cognito user pool. Defaults to `TOKEN`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizerUri",
        "Authorizer's Uniform Resource Identifier (URI). This must be a well-formed Lambda function URI in the form of `arn:aws:apigateway:{region}:lambda:path/{service_api}`,\ne.g., `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:012345678912:function:my-function/invocations`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizerCredentials",
        "Credentials required for the authorizer. To specify an IAM Role for API Gateway to assume, use the IAM Role ARN.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the authorizer",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "providerArns",
        "List of the Amazon Cognito user pool ARNs. Each element is of this format: `arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "authorizerResultTtlInSeconds",
        "TTL of cached authorizer results in seconds. Defaults to `300`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityValidationExpression",
        "Validation expression for the incoming identity. For `TOKEN` type, this value should be a regular expression. The incoming token from the client is matched against this expression, and will proceed if the token matches. If the token doesn't match, the client receives a 401 Unauthorized response.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identitySource",
        'Source of the identity in an incoming request. Defaults to `method.request.header.Authorization`. For `REQUEST` type, this may be a comma-separated list of values, including headers, query string parameters and stage variables - e.g., `"method.request.header.SomeHeaderName,method.request.querystring.SomeQueryStringName,stageVariables.SomeStageVariableName"`',
        [],
        false,
        false,
      ),
    ];
  }
}
