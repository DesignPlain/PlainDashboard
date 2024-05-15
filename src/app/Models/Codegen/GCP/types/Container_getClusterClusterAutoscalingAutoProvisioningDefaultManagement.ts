import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption,
  Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption_GetTypes,
} from "./Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption";

export interface Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement {
  // Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.
  AutoRepair?: boolean;

  // Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.
  AutoUpgrade?: boolean;

  // Specifies the Auto Upgrade knobs for the node pool.
  UpgradeOptions?: Array<Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption>;
}

export function Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AutoRepair",
      "Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutoUpgrade",
      "Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UpgradeOptions",
      "Specifies the Auto Upgrade knobs for the node pool.",
      Container_getClusterClusterAutoscalingAutoProvisioningDefaultManagementUpgradeOption_GetTypes(),
      true,
      false,
    ),
  ];
}
