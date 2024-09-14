import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface scheduler_ScheduleTargetEcsParametersCapacityProviderStrategy {
  // Designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied. Ranges from from `0` to `1000`.
  weight?: number;

  // How many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. Ranges from `0` (default) to `100000`.
  base?: number;

  // Short name of the capacity provider.
  capacityProvider?: string;
}

export function scheduler_ScheduleTargetEcsParametersCapacityProviderStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "Designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied. Ranges from from `0` to `1000`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "base",
      "How many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. Ranges from `0` (default) to `100000`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "capacityProvider",
      "Short name of the capacity provider.",
      () => [],
      true,
      false,
    ),
  ];
}
