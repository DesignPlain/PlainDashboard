import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase,
  Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase_GetTypes,
} from "./Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase";

export interface Datastream_StreamBackfillAllMysqlExcludedObjects {
  /*
MySQL databases on the server
Structure is documented below.
*/
  MysqlDatabases?: Array<Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase>;
}

export function Datastream_StreamBackfillAllMysqlExcludedObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "MysqlDatabases",
      "MySQL databases on the server\nStructure is documented below.",
      Datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase_GetTypes(),
      true,
      false,
    ),
  ];
}
