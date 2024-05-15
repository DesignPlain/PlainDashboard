import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption,
  Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption_GetTypes,
} from "./Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption";

export interface Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement {
  // Specifies the Auto Upgrade knobs for the node pool.
  UpgradeOptions?: Array<Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption>;

  /*
Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.

This block also contains several computed attributes, documented below.
*/
  AutoRepair?: boolean;

  // Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.
  AutoUpgrade?: boolean;
}

export function Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AutoUpgrade",
      "Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UpgradeOptions",
      "Specifies the Auto Upgrade knobs for the node pool.",
      Container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AutoRepair",
      "Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.\n\nThis block also contains several computed attributes, documented below.",
      [],
      false,
      false,
    ),
  ];
}
