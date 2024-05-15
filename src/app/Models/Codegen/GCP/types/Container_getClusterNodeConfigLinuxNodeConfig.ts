import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodeConfigLinuxNodeConfig {
  // cgroupMode specifies the cgroup mode to be used on the node.
  CgroupMode?: string;

  // The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  Sysctls?: Map<string, string>;
}

export function Container_getClusterNodeConfigLinuxNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CgroupMode",
      "cgroupMode specifies the cgroup mode to be used on the node.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Sysctls",
      "The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
