import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecs_ClusterCapacityProvidersDefaultCapacityProviderStrategy {
  // The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. Defaults to `0`.
  base?: number;

  // Name of the capacity provider.
  capacityProvider?: string;

  // The relative percentage of the total number of launched tasks that should use the specified capacity provider. The `weight` value is taken into consideration after the `base` count of tasks has been satisfied. Defaults to `0`.
  weight?: number;
}

export function ecs_ClusterCapacityProvidersDefaultCapacityProviderStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "base",
      "The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. Defaults to `0`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "capacityProvider",
      "Name of the capacity provider.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "The relative percentage of the total number of launched tasks that should use the specified capacity provider. The `weight` value is taken into consideration after the `base` count of tasks has been satisfied. Defaults to `0`.",
      () => [],
      false,
      false,
    ),
  ];
}
