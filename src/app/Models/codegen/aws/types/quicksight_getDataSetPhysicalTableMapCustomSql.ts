import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_getDataSetPhysicalTableMapCustomSqlColumn,
  quicksight_getDataSetPhysicalTableMapCustomSqlColumn_GetTypes,
} from './quicksight_getDataSetPhysicalTableMapCustomSqlColumn';

export interface quicksight_getDataSetPhysicalTableMapCustomSql {
  //
  columns?: Array<quicksight_getDataSetPhysicalTableMapCustomSqlColumn>;

  //
  dataSourceArn?: string;

  //
  name?: string;

  //
  sqlQuery?: string;
}

export function quicksight_getDataSetPhysicalTableMapCustomSql_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'columns',
      '',
      () => quicksight_getDataSetPhysicalTableMapCustomSqlColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dataSourceArn',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'name', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'sqlQuery', '', () => [], true, false),
  ];
}
