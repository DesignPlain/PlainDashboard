import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cleanrooms_ConfiguredTableTableReference {
  //
  tableName?: string;

  //
  databaseName?: string;
}

export function cleanrooms_ConfiguredTableTableReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'tableName', '', () => [], true, true),
    new DynamicUIProps(
      InputType.String,
      'databaseName',
      '',
      () => [],
      true,
      true,
    ),
  ];
}
