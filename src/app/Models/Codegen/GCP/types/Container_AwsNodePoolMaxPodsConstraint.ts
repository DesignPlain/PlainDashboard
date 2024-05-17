import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsNodePoolMaxPodsConstraint {
  /*
The maximum number of pods to schedule on a single node.

- - -
*/
  MaxPodsPerNode?: number;
}

export function Container_AwsNodePoolMaxPodsConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxPodsPerNode",
      "The maximum number of pods to schedule on a single node.\n\n- - -",
      [],
      true,
      true,
    ),
  ];
}
