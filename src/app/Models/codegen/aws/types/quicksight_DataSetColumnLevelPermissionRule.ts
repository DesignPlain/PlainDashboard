import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSetColumnLevelPermissionRule {
  // An array of column names.
  columnNames?: Array<string>;

  // An array of ARNs for Amazon QuickSight users or groups.
  principals?: Array<string>;
}

export function quicksight_DataSetColumnLevelPermissionRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'columnNames',
      'An array of column names.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'principals',
      'An array of ARNs for Amazon QuickSight users or groups.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
