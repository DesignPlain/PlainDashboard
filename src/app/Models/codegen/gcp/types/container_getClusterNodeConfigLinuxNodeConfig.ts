import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterNodeConfigLinuxNodeConfig {
  // cgroupMode specifies the cgroup mode to be used on the node.
  cgroupMode?: string;

  // The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  sysctls?: Map<string, string>;
}

export function container_getClusterNodeConfigLinuxNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cgroupMode',
      'cgroupMode specifies the cgroup mode to be used on the node.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'sysctls',
      'The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
