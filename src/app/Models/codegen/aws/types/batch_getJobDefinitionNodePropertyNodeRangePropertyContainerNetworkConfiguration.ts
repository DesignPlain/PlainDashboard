import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration {
  // Indicates whether the job has a public IP address.
  assignPublicIp?: boolean;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerNetworkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'assignPublicIp',
      'Indicates whether the job has a public IP address.',
      () => [],
      true,
      false,
    ),
  ];
}
