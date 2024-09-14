import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_ClusterClusterConfigAutoscalingConfig {
  /*
The autoscaling policy used by the cluster.

Only resource names including projectid and location (region) are valid. Examples:

`https://www.googleapis.com/compute/v1/projects/[projectId]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]`
`projects/[projectId]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]`
Note that the policy must be in the same project and Cloud Dataproc region.

- - -
*/
  policyUri?: string;
}

export function dataproc_ClusterClusterConfigAutoscalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "policyUri",
      "The autoscaling policy used by the cluster.\n\nOnly resource names including projectid and location (region) are valid. Examples:\n\n`https://www.googleapis.com/compute/v1/projects/[projectId]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]`\n`projects/[projectId]/locations/[dataproc_region]/autoscalingPolicies/[policy_id]`\nNote that the policy must be in the same project and Cloud Dataproc region.\n\n- - -",
      () => [],
      true,
      false,
    ),
  ];
}
