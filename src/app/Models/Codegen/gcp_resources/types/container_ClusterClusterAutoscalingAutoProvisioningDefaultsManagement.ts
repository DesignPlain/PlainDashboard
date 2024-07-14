import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption,
  container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption_GetTypes,
} from "./container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption";

export interface container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement {
  // Specifies the Auto Upgrade knobs for the node pool.
  upgradeOptions?: Array<container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption>;

  /*
Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.

This block also contains several computed attributes, documented below.
*/
  autoRepair?: boolean;

  // Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.
  autoUpgrade?: boolean;
}

export function container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "autoUpgrade",
      "Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "upgradeOptions",
      "Specifies the Auto Upgrade knobs for the node pool.",
      container_ClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autoRepair",
      "Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.\n\nThis block also contains several computed attributes, documented below.",
      [],
      false,
      false,
    ),
  ];
}
