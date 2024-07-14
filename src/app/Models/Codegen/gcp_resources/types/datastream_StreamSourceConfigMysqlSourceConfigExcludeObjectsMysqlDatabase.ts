import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable,
  datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable_GetTypes,
} from "./datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable";

export interface datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase {
  // Database name.
  database?: string;

  /*
Tables in the database.
Structure is documented below.
*/
  mysqlTables?: Array<datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable>;
}

export function datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "database",
      "Database name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "mysqlTables",
      "Tables in the database.\nStructure is documented below.",
      datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable_GetTypes(),
      false,
      false,
    ),
  ];
}
