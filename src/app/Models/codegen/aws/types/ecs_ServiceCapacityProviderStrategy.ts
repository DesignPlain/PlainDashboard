import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecs_ServiceCapacityProviderStrategy {
  // Relative percentage of the total number of launched tasks that should use the specified capacity provider.
  weight?: number;

  // Number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.
  base?: number;

  // Short name of the capacity provider.
  capacityProvider?: string;
}

export function ecs_ServiceCapacityProviderStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'weight',
      'Relative percentage of the total number of launched tasks that should use the specified capacity provider.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'base',
      'Number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'capacityProvider',
      'Short name of the capacity provider.',
      () => [],
      true,
      false,
    ),
  ];
}
