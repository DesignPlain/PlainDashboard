import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_EventTargetEcsTargetCapacityProviderStrategy {
  // The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. Defaults to `0`.
  base?: number;

  // Short name of the capacity provider.
  capacityProvider?: string;

  // The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
  weight?: number;
}

export function cloudwatch_EventTargetEcsTargetCapacityProviderStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "base",
      "The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. Defaults to `0`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "capacityProvider",
      "Short name of the capacity provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.",
      [],
      false,
      false,
    ),
  ];
}
