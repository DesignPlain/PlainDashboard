import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_ClusterClusterAutoscalingAutoProvisioningDefaults,
  container_ClusterClusterAutoscalingAutoProvisioningDefaults_GetTypes,
} from "./container_ClusterClusterAutoscalingAutoProvisioningDefaults";
import {
  container_ClusterClusterAutoscalingResourceLimit,
  container_ClusterClusterAutoscalingResourceLimit_GetTypes,
} from "./container_ClusterClusterAutoscalingResourceLimit";

export interface container_ClusterClusterAutoscaling {
  /*
Contains defaults for a node pool created by NAP. A subset of fields also apply to
GKE Autopilot clusters.
Structure is documented below.
*/
  autoProvisioningDefaults?: container_ClusterClusterAutoscalingAutoProvisioningDefaults;

  /*
Configuration
options for the [Autoscaling profile](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler#autoscaling_profiles)
feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability
when deciding to remove nodes from a cluster. Can be `BALANCED` or `OPTIMIZE_UTILIZATION`. Defaults to `BALANCED`.
*/
  autoscalingProfile?: string;

  /*
Whether node auto-provisioning is enabled. Must be supplied for GKE Standard clusters, `true` is implied
for autopilot clusters. Resource limits for `cpu` and `memory` must be defined to enable node auto-provisioning for GKE Standard.
*/
  enabled?: boolean;

  /*
Global constraints for machine resources in the
cluster. Configuring the `cpu` and `memory` types is required if node
auto-provisioning is enabled. These limits will apply to node pool autoscaling
in addition to node auto-provisioning. Structure is documented below.
*/
  resourceLimits?: Array<container_ClusterClusterAutoscalingResourceLimit>;
}

export function container_ClusterClusterAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether node auto-provisioning is enabled. Must be supplied for GKE Standard clusters, `true` is implied\nfor autopilot clusters. Resource limits for `cpu` and `memory` must be defined to enable node auto-provisioning for GKE Standard.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resourceLimits",
      "Global constraints for machine resources in the\ncluster. Configuring the `cpu` and `memory` types is required if node\nauto-provisioning is enabled. These limits will apply to node pool autoscaling\nin addition to node auto-provisioning. Structure is documented below.",
      container_ClusterClusterAutoscalingResourceLimit_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "autoProvisioningDefaults",
      "Contains defaults for a node pool created by NAP. A subset of fields also apply to\nGKE Autopilot clusters.\nStructure is documented below.",
      container_ClusterClusterAutoscalingAutoProvisioningDefaults_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "autoscalingProfile",
      "Configuration\noptions for the [Autoscaling profile](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler#autoscaling_profiles)\nfeature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability\nwhen deciding to remove nodes from a cluster. Can be `BALANCED` or `OPTIMIZE_UTILIZATION`. Defaults to `BALANCED`.",
      [],
      false,
      false,
    ),
  ];
}
