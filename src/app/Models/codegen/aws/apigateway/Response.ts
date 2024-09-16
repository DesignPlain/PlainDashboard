import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ResponseArgs {
  // Map of parameters (paths, query strings and headers) of the Gateway Response.
  responseParameters?: Map<string, string>;

  // Map of templates used to transform the response body.
  responseTemplates?: Map<string, string>;

  // Response type of the associated GatewayResponse.
  responseType?: string;

  // String identifier of the associated REST API.
  restApiId?: string;

  // HTTP status code of the Gateway Response.
  statusCode?: string;
}
export class Response extends DS_Resource {
  // Map of parameters (paths, query strings and headers) of the Gateway Response.
  public responseParameters?: Map<string, string>;

  // Map of templates used to transform the response body.
  public responseTemplates?: Map<string, string>;

  // Response type of the associated GatewayResponse.
  public responseType?: string;

  // String identifier of the associated REST API.
  public restApiId?: string;

  // HTTP status code of the Gateway Response.
  public statusCode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'responseTemplates',
        'Map of templates used to transform the response body.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'responseType',
        'Response type of the associated GatewayResponse.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'restApiId',
        'String identifier of the associated REST API.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'statusCode',
        'HTTP status code of the Gateway Response.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'responseParameters',
        'Map of parameters (paths, query strings and headers) of the Gateway Response.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
