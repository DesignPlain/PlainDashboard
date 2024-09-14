import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecs_getTaskExecutionPlacementStrategy {
  // The field to apply the placement strategy against.
  field?: string;

  /*
The type of placement strategy. Valid values are `random`, `spread`, and `binpack`.

For more information, see the [Placement Strategy](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PlacementStrategy.html) documentation.
*/
  type?: string;
}

export function ecs_getTaskExecutionPlacementStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of placement strategy. Valid values are `random`, `spread`, and `binpack`.\n\nFor more information, see the [Placement Strategy](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PlacementStrategy.html) documentation.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "field",
      "The field to apply the placement strategy against.",
      () => [],
      false,
      false,
    ),
  ];
}
