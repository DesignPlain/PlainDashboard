import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions {
  // The maximum value that can be specified, if applicable.
  maxValue?: string;

  // The minimum value that can be specified, if applicable.
  minValue?: string;
}

export function alloydb_getSupportedDatabaseFlagsSupportedDatabaseFlagIntegerRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'maxValue',
      'The maximum value that can be specified, if applicable.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'minValue',
      'The minimum value that can be specified, if applicable.',
      () => [],
      true,
      false,
    ),
  ];
}
