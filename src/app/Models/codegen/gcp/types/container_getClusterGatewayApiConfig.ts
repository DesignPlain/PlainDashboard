import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterGatewayApiConfig {
  // The Gateway API release channel to use for Gateway API.
  channel?: string;
}

export function container_getClusterGatewayApiConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'channel',
      'The Gateway API release channel to use for Gateway API.',
      () => [],
      true,
      false,
    ),
  ];
}
