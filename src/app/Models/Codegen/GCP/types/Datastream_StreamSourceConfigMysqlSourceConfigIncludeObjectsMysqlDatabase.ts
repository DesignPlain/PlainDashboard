import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable,
  Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable_GetTypes,
} from "./Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable";

export interface Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase {
  /*
Tables in the database.
Structure is documented below.
*/
  MysqlTables?: Array<Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable>;

  // Database name.
  Database?: string;
}

export function Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase_GetTypes(): DynamicUIProps[] {
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
      Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabaseMysqlTable_GetTypes(),
      false,
      false,
    ),
  ];
}
