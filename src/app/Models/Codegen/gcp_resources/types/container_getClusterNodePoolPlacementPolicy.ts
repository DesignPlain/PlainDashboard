import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterNodePoolPlacementPolicy {
  // If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  policyName?: string;

  // TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies
  tpuTopology?: string;

  // Type defines the type of placement policy
  type?: string;
}

export function container_getClusterNodePoolPlacementPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type defines the type of placement policy",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policyName",
      "If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tpuTopology",
      "TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies",
      [],
      true,
      false,
    ),
  ];
}
