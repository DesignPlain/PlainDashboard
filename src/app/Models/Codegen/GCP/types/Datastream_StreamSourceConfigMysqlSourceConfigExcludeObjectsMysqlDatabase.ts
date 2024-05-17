import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable,
  Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable_GetTypes,
} from "./Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable";

export interface Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase {
  // Database name.
  Database?: string;

  /*
Tables in the database.
Structure is documented below.
*/
  MysqlTables?: Array<Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable>;
}

export function Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Database",
      "Database name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MysqlTables",
      "Tables in the database.\nStructure is documented below.",
      Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabaseMysqlTable_GetTypes(),
      false,
      false,
    ),
  ];
}
