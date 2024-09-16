import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface backup_SelectionSelectionTag {
  // An operation, such as `StringEquals`, that is applied to a key-value pair used to filter resources in a selection.
  type?: string;

  // The value in a key-value pair.
  value?: string;

  // The key in a key-value pair.
  key?: string;
}

export function backup_SelectionSelectionTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'An operation, such as `StringEquals`, that is applied to a key-value pair used to filter resources in a selection.',
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
    new DynamicUIProps(
      InputType.String,
      'key',
      'The key in a key-value pair.',
      () => [],
      true,
      true,
    ),
  ];
}
