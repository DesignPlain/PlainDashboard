import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface m2_EnvironmentHighAvailabilityConfig {
  // Desired number of instances for the Environment.
  desiredCapacity?: number;
}

export function m2_EnvironmentHighAvailabilityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'desiredCapacity',
      'Desired number of instances for the Environment.',
      () => [],
      true,
      false,
    ),
  ];
}
