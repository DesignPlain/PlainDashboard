import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn,
  datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn_GetTypes,
} from "./datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn";

export interface datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable {
  /*
MySQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  mysqlColumns?: Array<datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn>;

  // Table name.
  table?: string;
}

export function datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "mysqlColumns",
      "MySQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.\nStructure is documented below.",
      datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "table",
      "Table name.",
      [],
      true,
      false,
    ),
  ];
}
