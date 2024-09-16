import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface backup_SelectionConditionStringEqual {
  // The key in a key-value pair.
  key?: string;

  // The value in a key-value pair.
  value?: string;
}

export function backup_SelectionConditionStringEqual_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'The key in a key-value pair.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value in a key-value pair.',
      () => [],
      true,
      true,
    ),
  ];
}
