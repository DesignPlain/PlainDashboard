import { ClusterClusterAutoscalingResourceLimit } from "./ClusterClusterAutoscalingResourceLimit";
import { ClusterClusterAutoscalingAutoProvisioningDefaults } from "./ClusterClusterAutoscalingAutoProvisioningDefaults";

export interface ClusterClusterAutoscaling {
  /*
Whether node auto-provisioning is enabled. Must be supplied for GKE Standard clusters, `true` is implied
for autopilot clusters. Resource limits for `cpu` and `memory` must be defined to enable node auto-provisioning for GKE Standard.
*/
  Enabled?: boolean;

  /*
Global constraints for machine resources in the
cluster. Configuring the `cpu` and `memory` types is required if node
auto-provisioning is enabled. These limits will apply to node pool autoscaling
in addition to node auto-provisioning. Structure is documented below.
*/
  ResourceLimits?: Array<ClusterClusterAutoscalingResourceLimit>;

  /*
Contains defaults for a node pool created by NAP. A subset of fields also apply to
GKE Autopilot clusters.
Structure is documented below.
*/
  AutoProvisioningDefaults?: ClusterClusterAutoscalingAutoProvisioningDefaults;

  /*
Configuration
options for the [Autoscaling profile](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler#autoscaling_profiles)
feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability
when deciding to remove nodes from a cluster. Can be `BALANCED` or `OPTIMIZE_UTILIZATION`. Defaults to `BALANCED`.
*/
  AutoscalingProfile?: string;
}
