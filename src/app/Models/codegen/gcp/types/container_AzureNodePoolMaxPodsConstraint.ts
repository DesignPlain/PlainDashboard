import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_AzureNodePoolMaxPodsConstraint {
  /*
The maximum number of pods to schedule on a single node.

- - -
*/
  maxPodsPerNode?: number;
}

export function container_AzureNodePoolMaxPodsConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxPodsPerNode",
      "The maximum number of pods to schedule on a single node.\n\n- - -",
      () => [],
      true,
      true,
    ),
  ];
}
