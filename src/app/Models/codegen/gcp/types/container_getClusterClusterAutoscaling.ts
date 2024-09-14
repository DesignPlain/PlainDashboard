import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  container_getClusterClusterAutoscalingAutoProvisioningDefault,
  container_getClusterClusterAutoscalingAutoProvisioningDefault_GetTypes,
} from "./container_getClusterClusterAutoscalingAutoProvisioningDefault";
import {
  container_getClusterClusterAutoscalingResourceLimit,
  container_getClusterClusterAutoscalingResourceLimit_GetTypes,
} from "./container_getClusterClusterAutoscalingResourceLimit";

export interface container_getClusterClusterAutoscaling {
  // Contains defaults for a node pool created by NAP.
  autoProvisioningDefaults?: Array<container_getClusterClusterAutoscalingAutoProvisioningDefault>;

  // Configuration options for the Autoscaling profile feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability when deciding to remove nodes from a cluster. Can be BALANCED or OPTIMIZE_UTILIZATION. Defaults to BALANCED.
  autoscalingProfile?: string;

  // Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning.
  enabled?: boolean;

  // Global constraints for machine resources in the cluster. Configuring the cpu and memory types is required if node auto-provisioning is enabled. These limits will apply to node pool autoscaling in addition to node auto-provisioning.
  resourceLimits?: Array<container_getClusterClusterAutoscalingResourceLimit>;
}

export function container_getClusterClusterAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resourceLimits",
      "Global constraints for machine resources in the cluster. Configuring the cpu and memory types is required if node auto-provisioning is enabled. These limits will apply to node pool autoscaling in addition to node auto-provisioning.",
      () => container_getClusterClusterAutoscalingResourceLimit_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "autoProvisioningDefaults",
      "Contains defaults for a node pool created by NAP.",
      () =>
        container_getClusterClusterAutoscalingAutoProvisioningDefault_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "autoscalingProfile",
      "Configuration options for the Autoscaling profile feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability when deciding to remove nodes from a cluster. Can be BALANCED or OPTIMIZE_UTILIZATION. Defaults to BALANCED.",
      () => [],
      true,
      false,
    ),
  ];
}
