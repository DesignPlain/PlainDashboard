import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterClusterAutoscalingResourceLimit,
  Container_getClusterClusterAutoscalingResourceLimit_GetTypes,
} from "./Container_getClusterClusterAutoscalingResourceLimit";
import {
  Container_getClusterClusterAutoscalingAutoProvisioningDefault,
  Container_getClusterClusterAutoscalingAutoProvisioningDefault_GetTypes,
} from "./Container_getClusterClusterAutoscalingAutoProvisioningDefault";

export interface Container_getClusterClusterAutoscaling {
  // Configuration options for the Autoscaling profile feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability when deciding to remove nodes from a cluster. Can be BALANCED or OPTIMIZE_UTILIZATION. Defaults to BALANCED.
  AutoscalingProfile?: string;

  // Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning.
  Enabled?: boolean;

  // Global constraints for machine resources in the cluster. Configuring the cpu and memory types is required if node auto-provisioning is enabled. These limits will apply to node pool autoscaling in addition to node auto-provisioning.
  ResourceLimits?: Array<Container_getClusterClusterAutoscalingResourceLimit>;

  // Contains defaults for a node pool created by NAP.
  AutoProvisioningDefaults?: Array<Container_getClusterClusterAutoscalingAutoProvisioningDefault>;
}

export function Container_getClusterClusterAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ResourceLimits",
      "Global constraints for machine resources in the cluster. Configuring the cpu and memory types is required if node auto-provisioning is enabled. These limits will apply to node pool autoscaling in addition to node auto-provisioning.",
      Container_getClusterClusterAutoscalingResourceLimit_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AutoProvisioningDefaults",
      "Contains defaults for a node pool created by NAP.",
      Container_getClusterClusterAutoscalingAutoProvisioningDefault_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AutoscalingProfile",
      "Configuration options for the Autoscaling profile feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability when deciding to remove nodes from a cluster. Can be BALANCED or OPTIMIZE_UTILIZATION. Defaults to BALANCED.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning.",
      [],
      true,
      false,
    ),
  ];
}
