import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface endpoints_ServiceApiMethod {
  // The simple name of the endpoint as described in the config.
  name?: string;

  // The type URL for the request to this API.
  requestType?: string;

  // The type URL for the response from this API.
  responseType?: string;

  // `SYNTAX_PROTO2` or `SYNTAX_PROTO3`.
  syntax?: string;
}

export function endpoints_ServiceApiMethod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The simple name of the endpoint as described in the config.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'requestType',
      'The type URL for the request to this API.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'responseType',
      'The type URL for the response from this API.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'syntax',
      '`SYNTAX_PROTO2` or `SYNTAX_PROTO3`.',
      () => [],
      false,
      false,
    ),
  ];
}
