import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  quicksight_getDataSetPhysicalTableMapCustomSqlColumn,
  quicksight_getDataSetPhysicalTableMapCustomSqlColumn_GetTypes,
} from "./quicksight_getDataSetPhysicalTableMapCustomSqlColumn";

export interface quicksight_getDataSetPhysicalTableMapCustomSql {
  //
  sqlQuery?: string;

  //
  columns?: Array<quicksight_getDataSetPhysicalTableMapCustomSqlColumn>;

  //
  dataSourceArn?: string;

  //
  name?: string;
}

export function quicksight_getDataSetPhysicalTableMapCustomSql_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "sqlQuery", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "",
      quicksight_getDataSetPhysicalTableMapCustomSqlColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "dataSourceArn", "", [], true, false),
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
  ];
}
