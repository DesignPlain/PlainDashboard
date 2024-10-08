import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface composer_EnvironmentConfigWorkloadsConfigTriggerer {
  // The number of triggerers.
  count?: number;

  // CPU request and limit for a single Airflow triggerer replica.
  cpu?: number;

  // Memory (GB) request and limit for a single Airflow triggerer replica.
  memoryGb?: number;
}

export function composer_EnvironmentConfigWorkloadsConfigTriggerer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'count',
      'The number of triggerers.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'cpu',
      'CPU request and limit for a single Airflow triggerer replica.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'memoryGb',
      'Memory (GB) request and limit for a single Airflow triggerer replica.',
      () => [],
      true,
      false,
    ),
  ];
}
