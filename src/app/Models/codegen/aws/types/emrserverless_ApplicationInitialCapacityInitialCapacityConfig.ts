import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  emrserverless_ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration,
  emrserverless_ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration_GetTypes,
} from './emrserverless_ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration';

export interface emrserverless_ApplicationInitialCapacityInitialCapacityConfig {
  // The resource configuration of the initial capacity configuration.
  workerConfiguration?: emrserverless_ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration;

  // The number of workers in the initial capacity configuration.
  workerCount?: number;
}

export function emrserverless_ApplicationInitialCapacityInitialCapacityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'workerConfiguration',
      'The resource configuration of the initial capacity configuration.',
      () =>
        emrserverless_ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'workerCount',
      'The number of workers in the initial capacity configuration.',
      () => [],
      true,
      false,
    ),
  ];
}
