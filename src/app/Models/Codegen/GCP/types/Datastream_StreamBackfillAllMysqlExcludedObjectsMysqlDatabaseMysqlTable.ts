import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn,
  Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn_GetTypes,
} from "./Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn";

export interface Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable {
  // Table name.
  Table?: string;

  /*
MySQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
Structure is documented below.
*/
  MysqlColumns?: Array<Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn>;
}

export function Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "MysqlColumns",
      "MySQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.\nStructure is documented below.",
      Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTableMysqlColumn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Table",
      "Table name.",
      [],
      true,
      false,
    ),
  ];
}
