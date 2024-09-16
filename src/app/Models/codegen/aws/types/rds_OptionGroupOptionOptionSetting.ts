import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rds_OptionGroupOptionOptionSetting {
  // Value of the setting.
  value?: string;

  // Name of the setting.
  name?: string;
}

export function rds_OptionGroupOptionOptionSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'value',
      'Value of the setting.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the setting.',
      () => [],
      true,
      false,
    ),
  ];
}
