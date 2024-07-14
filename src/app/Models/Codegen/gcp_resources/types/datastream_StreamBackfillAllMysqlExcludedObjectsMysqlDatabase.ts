import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable,
  datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable_GetTypes,
} from "./datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable";

export interface datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase {
  // Database name.
  database?: string;

  /*
Tables in the database.
Structure is documented below.
*/
  mysqlTables?: Array<datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable>;
}

export function datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "mysqlTables",
      "Tables in the database.\nStructure is documented below.",
      datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "database",
      "Database name.",
      [],
      true,
      false,
    ),
  ];
}
