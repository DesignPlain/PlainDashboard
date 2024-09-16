import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_getDataSetColumnLevelPermissionRule {
  //
  columnNames?: Array<string>;

  //
  principals?: Array<string>;
}

export function quicksight_getDataSetColumnLevelPermissionRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'columnNames',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'principals',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
