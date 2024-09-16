import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigateway_getRestApiEndpointConfiguration {
  //
  vpcEndpointIds?: Array<string>;

  //
  types?: Array<string>;
}

export function apigateway_getRestApiEndpointConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'vpcEndpointIds',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'types',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
