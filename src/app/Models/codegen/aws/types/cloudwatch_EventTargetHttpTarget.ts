import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_EventTargetHttpTarget {
  // Represents keys/values of query string parameters that are appended to the invoked endpoint.
  queryStringParameters?: Map<string, string>;

  // Enables you to specify HTTP headers to add to the request.
  headerParameters?: Map<string, string>;

  // The list of values that correspond sequentially to any path variables in your endpoint ARN (for example `arn:aws:execute-api:us-east-1:123456:myapi/-/POST/pets/-`).
  pathParameterValues?: Array<string>;
}

export function cloudwatch_EventTargetHttpTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'queryStringParameters',
      'Represents keys/values of query string parameters that are appended to the invoked endpoint.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'headerParameters',
      'Enables you to specify HTTP headers to add to the request.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'pathParameterValues',
      'The list of values that correspond sequentially to any path variables in your endpoint ARN (for example `arn:aws:execute-api:us-east-1:123456:myapi/*/POST/pets/*`).',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
