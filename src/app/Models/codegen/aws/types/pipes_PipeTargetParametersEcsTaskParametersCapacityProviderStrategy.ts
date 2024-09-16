import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pipes_PipeTargetParametersEcsTaskParametersCapacityProviderStrategy {
  // The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied. Maximum value of 1,000.
  weight?: number;

  // The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used. Maximum value of 100,000.
  base?: number;

  // The short name of the capacity provider. Maximum value of 255.
  capacityProvider?: string;
}

export function pipes_PipeTargetParametersEcsTaskParametersCapacityProviderStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'weight',
      'The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied. Maximum value of 1,000.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'base',
      'The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used. Maximum value of 100,000.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'capacityProvider',
      'The short name of the capacity provider. Maximum value of 255.',
      () => [],
      true,
      false,
    ),
  ];
}
