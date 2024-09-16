import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emr_getReleaseLabelsFilters {
  // Optional release label version prefix filter. For example, `emr-5`.
  prefix?: string;

  // Optional release label application filter. For example, `Spark@2.1.0` or `Spark`.
  application?: string;
}

export function emr_getReleaseLabelsFilters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'Optional release label version prefix filter. For example, `emr-5`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'application',
      'Optional release label application filter. For example, `Spark@2.1.0` or `Spark`.',
      () => [],
      false,
      false,
    ),
  ];
}
