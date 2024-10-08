import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkconnectivity_HubRoutingVpc {
  // The URI of the VPC network.
  uri?: string;
}

export function networkconnectivity_HubRoutingVpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'uri',
      'The URI of the VPC network.',
      () => [],
      false,
      false,
    ),
  ];
}
