import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase,
  datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase_GetTypes,
} from "./datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase";

export interface datastream_StreamBackfillAllMysqlExcludedObjects {
  /*
MySQL databases on the server
Structure is documented below.
*/
  mysqlDatabases?: Array<datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase>;
}

export function datastream_StreamBackfillAllMysqlExcludedObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "mysqlDatabases",
      "MySQL databases on the server\nStructure is documented below.",
      datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase_GetTypes(),
      true,
      false,
    ),
  ];
}
