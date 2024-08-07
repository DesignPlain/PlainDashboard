import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AwsNodePoolMaxPodsConstraint {
  /*
The maximum number of pods to schedule on a single node.

- - -
*/
  maxPodsPerNode?: number;
}

export function container_AwsNodePoolMaxPodsConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxPodsPerNode",
      "The maximum number of pods to schedule on a single node.\n\n- - -",
      [],
      true,
      true,
    ),
  ];
}
