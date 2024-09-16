import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lakeformation_ResourceLfTagTableWithColumnsColumnWildcard {
  //
  excludedColumnNames?: Array<string>;
}

export function lakeformation_ResourceLfTagTableWithColumnsColumnWildcard_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'excludedColumnNames',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
