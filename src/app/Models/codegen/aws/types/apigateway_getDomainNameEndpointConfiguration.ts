import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigateway_getDomainNameEndpointConfiguration {
  // List of endpoint types.
  types?: Array<string>;
}

export function apigateway_getDomainNameEndpointConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'types',
      'List of endpoint types.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
