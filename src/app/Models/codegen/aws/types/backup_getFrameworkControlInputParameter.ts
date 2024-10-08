import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface backup_getFrameworkControlInputParameter {
  // Backup framework name.
  name?: string;

  // Value of parameter, for example, hourly.
  value?: string;
}

export function backup_getFrameworkControlInputParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Backup framework name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Value of parameter, for example, hourly.',
      () => [],
      true,
      false,
    ),
  ];
}
