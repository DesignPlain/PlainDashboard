import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface MethodArgs {
  // API resource ID
  resourceId?: string;

  // Specify if the method requires an API key
  apiKeyRequired?: boolean;

  // Type of authorization used for the method (`NONE`, `CUSTOM`, `AWS_IAM`, `COGNITO_USER_POOLS`)
  authorization?: string;

  // HTTP Method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`)
  httpMethod?: string;

  /*
Map of the API models used for the request's content type
where key is the content type (e.g., `application/json`)
and value is either `Error`, `Empty` (built-in models) or `aws.apigateway.Model`'s `name`.
*/
  requestModels?: Map<string, string>;

  // ID of a `aws.apigateway.RequestValidator`
  requestValidatorId?: string;

  // ID of the associated REST API
  restApi?: string;

  // Authorization scopes used when the authorization is `COGNITO_USER_POOLS`
  authorizationScopes?: Array<string>;

  // Authorizer id to be used when the authorization is `CUSTOM` or `COGNITO_USER_POOLS`
  authorizerId?: string;

  // Function name that will be given to the method when generating an SDK through API Gateway. If omitted, API Gateway will generate a function name based on the resource path and HTTP verb.
  operationName?: string;

  /*
Map of request parameters (from the path, query string and headers) that should be passed to the integration. The boolean value indicates whether the parameter is required (`true`) or optional (`false`).
For example: `request_parameters = {"method.request.header.X-Some-Header" = true "method.request.querystring.some-query-param" = true}` would define that the header `X-Some-Header` and the query string `some-query-param` must be provided in the request.
*/
  requestParameters?: Map<string, boolean>;
}
export class Method extends DS_Resource {
  /*
Map of the API models used for the request's content type
where key is the content type (e.g., `application/json`)
and value is either `Error`, `Empty` (built-in models) or `aws.apigateway.Model`'s `name`.
*/
  public requestModels?: Map<string, string>;

  // ID of a `aws.apigateway.RequestValidator`
  public requestValidatorId?: string;

  // API resource ID
  public resourceId?: string;

  // ID of the associated REST API
  public restApi?: string;

  // Type of authorization used for the method (`NONE`, `CUSTOM`, `AWS_IAM`, `COGNITO_USER_POOLS`)
  public authorization?: string;

  // Authorization scopes used when the authorization is `COGNITO_USER_POOLS`
  public authorizationScopes?: Array<string>;

  // HTTP Method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`)
  public httpMethod?: string;

  // Function name that will be given to the method when generating an SDK through API Gateway. If omitted, API Gateway will generate a function name based on the resource path and HTTP verb.
  public operationName?: string;

  // Specify if the method requires an API key
  public apiKeyRequired?: boolean;

  // Authorizer id to be used when the authorization is `CUSTOM` or `COGNITO_USER_POOLS`
  public authorizerId?: string;

  /*
Map of request parameters (from the path, query string and headers) that should be passed to the integration. The boolean value indicates whether the parameter is required (`true`) or optional (`false`).
For example: `request_parameters = {"method.request.header.X-Some-Header" = true "method.request.querystring.some-query-param" = true}` would define that the header `X-Some-Header` and the query string `some-query-param` must be provided in the request.
*/
  public requestParameters?: Map<string, boolean>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceId",
        "API resource ID",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "apiKeyRequired",
        "Specify if the method requires an API key",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "restApi",
        "ID of the associated REST API",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "authorizationScopes",
        "Authorization scopes used when the authorization is `COGNITO_USER_POOLS`",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizerId",
        "Authorizer id to be used when the authorization is `CUSTOM` or `COGNITO_USER_POOLS`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "requestParameters",
        'Map of request parameters (from the path, query string and headers) that should be passed to the integration. The boolean value indicates whether the parameter is required (`true`) or optional (`false`).\nFor example: `request_parameters = {"method.request.header.X-Some-Header" = true "method.request.querystring.some-query-param" = true}` would define that the header `X-Some-Header` and the query string `some-query-param` must be provided in the request.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorization",
        "Type of authorization used for the method (`NONE`, `CUSTOM`, `AWS_IAM`, `COGNITO_USER_POOLS`)",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "httpMethod",
        "HTTP Method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`)",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "requestModels",
        "Map of the API models used for the request's content type\nwhere key is the content type (e.g., `application/json`)\nand value is either `Error`, `Empty` (built-in models) or `aws.apigateway.Model`'s `name`.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "requestValidatorId",
        "ID of a `aws.apigateway.RequestValidator`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "operationName",
        "Function name that will be given to the method when generating an SDK through API Gateway. If omitted, API Gateway will generate a function name based on the resource path and HTTP verb.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
