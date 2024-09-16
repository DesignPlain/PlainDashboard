import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sql_getDatabaseInstanceSettingDatabaseFlag {
  // The name of the instance.
  name?: string;

  // Value of the flag.
  value?: string;
}

export function sql_getDatabaseInstanceSettingDatabaseFlag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the instance.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Value of the flag.',
      () => [],
      true,
      false,
    ),
  ];
}
