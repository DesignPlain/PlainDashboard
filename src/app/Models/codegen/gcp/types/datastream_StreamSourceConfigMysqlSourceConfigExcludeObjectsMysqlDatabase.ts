import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable,
  datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable_GetTypes,
} from "./datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable";

export interface datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase {
  /*
Tables in the database.
Structure is documented below.
*/
  mysqlTables?: Array<datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable>;

  // Database name.
  database?: string;
}

export function datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "mysqlTables",
      "Tables in the database.\nStructure is documented below.",
      () =>
        datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "database",
      "Database name.",
      () => [],
      true,
      false,
    ),
  ];
}
