import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterNodePoolNodeConfigSandboxConfig {
  // Type of the sandbox to use for the node (e.g. 'gvisor')
  sandboxType?: string;
}

export function container_getClusterNodePoolNodeConfigSandboxConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sandboxType',
      "Type of the sandbox to use for the node (e.g. 'gvisor')",
      () => [],
      true,
      false,
    ),
  ];
}
