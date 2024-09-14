import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecs_TaskSetCapacityProviderStrategy {
  // The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.
  base?: number;

  // The short name or full Amazon Resource Name (ARN) of the capacity provider.
  capacityProvider?: string;

  // The relative percentage of the total number of launched tasks that should use the specified capacity provider.
  weight?: number;
}

export function ecs_TaskSetCapacityProviderStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "base",
      "The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "capacityProvider",
      "The short name or full Amazon Resource Name (ARN) of the capacity provider.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "The relative percentage of the total number of launched tasks that should use the specified capacity provider.",
      () => [],
      true,
      true,
    ),
  ];
}
