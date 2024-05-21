import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable,
  datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable_GetTypes,
} from "./datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable";

export interface datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase {
  // Database name.
  database?: string;

  /*
Tables in the database.
Structure is documented below.
*/
  mysqlTables?: Array<datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable>;
}

export function datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase_GetTypes(): DynamicUIProps[] {
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
      datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable_GetTypes(),
      false,
      false,
    ),
  ];
}
