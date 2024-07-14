import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ecs_ServiceCapacityProviderStrategy {
  // Short name of the capacity provider.
  capacityProvider?: string;

  // Relative percentage of the total number of launched tasks that should use the specified capacity provider.
  weight?: number;

  // Number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.
  base?: number;
}

export function ecs_ServiceCapacityProviderStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "base",
      "Number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.",
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
      "Relative percentage of the total number of launched tasks that should use the specified capacity provider.",
      [],
      false,
      false,
    ),
  ];
}
