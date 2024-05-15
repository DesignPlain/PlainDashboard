import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterClusterAutoscalingResourceLimit,
  Container_ClusterClusterAutoscalingResourceLimit_GetTypes,
} from "./Container_ClusterClusterAutoscalingResourceLimit";
import {
  Container_ClusterClusterAutoscalingAutoProvisioningDefaults,
  Container_ClusterClusterAutoscalingAutoProvisioningDefaults_GetTypes,
} from "./Container_ClusterClusterAutoscalingAutoProvisioningDefaults";

export interface Container_ClusterClusterAutoscaling {
  /*
Global constraints for machine resources in the
cluster. Configuring the `cpu` and `memory` types is required if node
auto-provisioning is enabled. These limits will apply to node pool autoscaling
in addition to node auto-provisioning. Structure is documented below.
*/
  ResourceLimits?: Array<Container_ClusterClusterAutoscalingResourceLimit>;

  /*
Contains defaults for a node pool created by NAP. A subset of fields also apply to
GKE Autopilot clusters.
Structure is documented below.
*/
  AutoProvisioningDefaults?: Container_ClusterClusterAutoscalingAutoProvisioningDefaults;

  /*
Configuration
options for the [Autoscaling profile](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler#autoscaling_profiles)
feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability
when deciding to remove nodes from a cluster. Can be `BALANCED` or `OPTIMIZE_UTILIZATION`. Defaults to `BALANCED`.
*/
  AutoscalingProfile?: string;

  /*
Whether node auto-provisioning is enabled. Must be supplied for GKE Standard clusters, `true` is implied
for autopilot clusters. Resource limits for `cpu` and `memory` must be defined to enable node auto-provisioning for GKE Standard.
*/
  Enabled?: boolean;
}

export function Container_ClusterClusterAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AutoProvisioningDefaults",
      "Contains defaults for a node pool created by NAP. A subset of fields also apply to\nGKE Autopilot clusters.\nStructure is documented below.",
      Container_ClusterClusterAutoscalingAutoProvisioningDefaults_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AutoscalingProfile",
      "Configuration\noptions for the [Autoscaling profile](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler#autoscaling_profiles)\nfeature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability\nwhen deciding to remove nodes from a cluster. Can be `BALANCED` or `OPTIMIZE_UTILIZATION`. Defaults to `BALANCED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether node auto-provisioning is enabled. Must be supplied for GKE Standard clusters, `true` is implied\nfor autopilot clusters. Resource limits for `cpu` and `memory` must be defined to enable node auto-provisioning for GKE Standard.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResourceLimits",
      "Global constraints for machine resources in the\ncluster. Configuring the `cpu` and `memory` types is required if node\nauto-provisioning is enabled. These limits will apply to node pool autoscaling\nin addition to node auto-provisioning. Structure is documented below.",
      Container_ClusterClusterAutoscalingResourceLimit_GetTypes(),
      false,
      false,
    ),
  ];
}
