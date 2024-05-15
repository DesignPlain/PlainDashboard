import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_AutoscalingPolicySecondaryWorkerConfig {
  // Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.
  MinInstances?: number;

  /*
Weight for the instance group, which is used to determine the fraction of total workers
in the cluster from this instance group. For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.
The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.
If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.
*/
  Weight?: number;

  /*
Maximum number of instances for this group. Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.
*/
  MaxInstances?: number;
}

export function Dataproc_AutoscalingPolicySecondaryWorkerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MinInstances",
      "Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Weight",
      "Weight for the instance group, which is used to determine the fraction of total workers\nin the cluster from this instance group. For example, if primary workers have weight 2,\nand secondary workers have weight 1, the cluster will have approximately 2 primary workers\nfor each secondary worker.\nThe cluster may not reach the specified balance if constrained by min/max bounds or other\nautoscaling settings. For example, if maxInstances for secondary workers is 0, then only\nprimary workers will be added. The cluster can also be out of balance when created.\nIf weight is not set on any instance group, the cluster will default to equal weight for\nall groups: the cluster will attempt to maintain an equal number of workers in each group\nwithin the configured size bounds for each group. If weight is set for one group only,\nthe cluster will default to zero weight on the unset group. For example if weight is set\nonly on primary workers, the cluster will use primary workers only and no secondary workers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxInstances",
      "Maximum number of instances for this group. Note that by default, clusters will not use\nsecondary workers. Required for secondary workers if the minimum secondary instances is set.\nBounds: [minInstances, ). Defaults to 0.",
      [],
      false,
      false,
    ),
  ];
}
