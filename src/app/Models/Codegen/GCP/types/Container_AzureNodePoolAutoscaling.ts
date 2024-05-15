import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AzureNodePoolAutoscaling {
  // Maximum number of nodes in the node pool. Must be >= min_node_count.
  MaxNodeCount?: number;

  // Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.
  MinNodeCount?: number;
}

export function Container_AzureNodePoolAutoscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxNodeCount",
      "Maximum number of nodes in the node pool. Must be >= min_node_count.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinNodeCount",
      "Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.",
      [],
      true,
      false,
    ),
  ];
}
