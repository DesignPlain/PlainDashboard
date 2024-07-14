import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  emr_ManagedScalingPolicyComputeLimit,
  emr_ManagedScalingPolicyComputeLimit_GetTypes,
} from "../types/emr_ManagedScalingPolicyComputeLimit";

export interface ManagedScalingPolicyArgs {
  // ID of the EMR cluster
  clusterId?: string;

  // Configuration block with compute limit settings. Described below.
  computeLimits?: Array<emr_ManagedScalingPolicyComputeLimit>;
}
export class ManagedScalingPolicy extends Resource {
  // ID of the EMR cluster
  public clusterId?: string;

  // Configuration block with compute limit settings. Described below.
  public computeLimits?: Array<emr_ManagedScalingPolicyComputeLimit>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clusterId",
        "ID of the EMR cluster",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "computeLimits",
        "Configuration block with compute limit settings. Described below.",
        emr_ManagedScalingPolicyComputeLimit_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
