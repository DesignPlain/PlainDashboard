import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_DataSetPhysicalTableMapCustomSqlColumn,
  quicksight_DataSetPhysicalTableMapCustomSqlColumn_GetTypes,
} from "./quicksight_DataSetPhysicalTableMapCustomSqlColumn";

export interface quicksight_DataSetPhysicalTableMapCustomSql {
  // SQL query.
  sqlQuery?: string;

  // Column schema from the SQL query result set. See columns.
  columns?: Array<quicksight_DataSetPhysicalTableMapCustomSqlColumn>;

  // ARN of the data source.
  dataSourceArn?: string;

  // Display name for the SQL query result.
  name?: string;
}

export function quicksight_DataSetPhysicalTableMapCustomSql_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataSourceArn",
      "ARN of the data source.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Display name for the SQL query result.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sqlQuery",
      "SQL query.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "Column schema from the SQL query result set. See columns.",
      quicksight_DataSetPhysicalTableMapCustomSqlColumn_GetTypes(),
      false,
      false,
    ),
  ];
}
