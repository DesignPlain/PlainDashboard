import { getClusterClusterAutoscalingAutoProvisioningDefault } from "./getClusterClusterAutoscalingAutoProvisioningDefault";
import { getClusterClusterAutoscalingResourceLimit } from "./getClusterClusterAutoscalingResourceLimit";

export interface getClusterClusterAutoscaling {
  // Configuration options for the Autoscaling profile feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability when deciding to remove nodes from a cluster. Can be BALANCED or OPTIMIZE_UTILIZATION. Defaults to BALANCED.
  AutoscalingProfile?: string;

  // Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning.
  Enabled?: boolean;

  // Global constraints for machine resources in the cluster. Configuring the cpu and memory types is required if node auto-provisioning is enabled. These limits will apply to node pool autoscaling in addition to node auto-provisioning.
  ResourceLimits?: Array<getClusterClusterAutoscalingResourceLimit>;

  // Contains defaults for a node pool created by NAP.
  AutoProvisioningDefaults?: Array<getClusterClusterAutoscalingAutoProvisioningDefault>;
}
