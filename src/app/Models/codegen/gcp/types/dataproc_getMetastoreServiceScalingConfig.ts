import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_getMetastoreServiceScalingConfig {
  // Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]
  instanceSize?: string;

  // Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.
  scalingFactor?: number;
}

export function dataproc_getMetastoreServiceScalingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'instanceSize',
      'Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'scalingFactor',
      'Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.',
      () => [],
      true,
      false,
    ),
  ];
}
