import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_NodePoolNodeConfigWorkloadMetadataConfig {
  // Mode is the configuration for how to expose metadata to workloads running on the node.
  mode?: string;
}

export function container_NodePoolNodeConfigWorkloadMetadataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'mode',
      'Mode is the configuration for how to expose metadata to workloads running on the node.',
      () => [],
      true,
      false,
    ),
  ];
}
