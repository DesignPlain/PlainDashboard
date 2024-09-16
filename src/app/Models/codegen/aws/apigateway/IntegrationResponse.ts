import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface IntegrationResponseArgs {
  // API resource ID.
  resourceId?: string;

  // Map of response parameters that can be read from the backend response. For example: `response_parameters = { "method.response.header.X-Some-Header" = "integration.response.header.X-Some-Other-Header" }`.
  responseParameters?: Map<string, string>;

  // Map of templates used to transform the integration response body.
  responseTemplates?: Map<string, string>;

  // ID of the associated REST API.
  restApi?: string;

  // Regular expression pattern used to choose an integration response based on the response from the backend. Omit configuring this to make the integration the default one. If the backend is an `AWS` Lambda function, the AWS Lambda function error header is matched. For all other `HTTP` and `AWS` backends, the HTTP status code is matched.
  selectionPattern?: string;

  /*
HTTP status code.

The following arguments are optional:
*/
  statusCode?: string;

  // How to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`. If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.
  contentHandling?: string;

  // HTTP method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`).
  httpMethod?: string;
}
export class IntegrationResponse extends DS_Resource {
  // API resource ID.
  public resourceId?: string;

  // Map of response parameters that can be read from the backend response. For example: `response_parameters = { "method.response.header.X-Some-Header" = "integration.response.header.X-Some-Other-Header" }`.
  public responseParameters?: Map<string, string>;

  // Map of templates used to transform the integration response body.
  public responseTemplates?: Map<string, string>;

  // ID of the associated REST API.
  public restApi?: string;

  // Regular expression pattern used to choose an integration response based on the response from the backend. Omit configuring this to make the integration the default one. If the backend is an `AWS` Lambda function, the AWS Lambda function error header is matched. For all other `HTTP` and `AWS` backends, the HTTP status code is matched.
  public selectionPattern?: string;

  /*
HTTP status code.

The following arguments are optional:
*/
  public statusCode?: string;

  // How to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`. If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.
  public contentHandling?: string;

  // HTTP method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`).
  public httpMethod?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'responseTemplates',
        'Map of templates used to transform the integration response body.',
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
        'selectionPattern',
        'Regular expression pattern used to choose an integration response based on the response from the backend. Omit configuring this to make the integration the default one. If the backend is an `AWS` Lambda function, the AWS Lambda function error header is matched. For all other `HTTP` and `AWS` backends, the HTTP status code is matched.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'statusCode',
        'HTTP status code.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'contentHandling',
        'How to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`. If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'httpMethod',
        'HTTP method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`).',
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
        InputType.Map,
        'responseParameters',
        'Map of response parameters that can be read from the backend response. For example: `response_parameters = { "method.response.header.X-Some-Header" = "integration.response.header.X-Some-Other-Header" }`.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
