import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vertex_AiFeatureOnlineStoreBigtableAutoScaling {
  /*
A percentage of the cluster's CPU capacity. Can be from 10%!!(MISSING)t(MISSING)o 80%!!(MISSING) (MISSING)When a cluster's CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%!!(MISSING)
(MISSING)
*/
  cpuUtilizationTarget?: number;

  // The maximum number of nodes to scale up to. Must be greater than or equal to minNodeCount, and less than or equal to 10 times of 'minNodeCount'.
  maxNodeCount?: number;

  // The minimum number of nodes to scale down to. Must be greater than or equal to 1.
  minNodeCount?: number;
}

export function vertex_AiFeatureOnlineStoreBigtableAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxNodeCount",
      "The maximum number of nodes to scale up to. Must be greater than or equal to minNodeCount, and less than or equal to 10 times of 'minNodeCount'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minNodeCount",
      "The minimum number of nodes to scale down to. Must be greater than or equal to 1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cpuUtilizationTarget",
      "A percentage of the cluster's CPU capacity. Can be from 10%!t(MISSING)o 80%! (MISSING)When a cluster's CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%!\n(MISSING)",
      [],
      false,
      false,
    ),
  ];
}
