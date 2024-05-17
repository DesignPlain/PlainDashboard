import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase,
  Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase_GetTypes,
} from "./Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase";

export interface Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects {
  /*
MySQL databases on the server
Structure is documented below.
*/
  MysqlDatabases?: Array<Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase>;
}

export function Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "MysqlDatabases",
      "MySQL databases on the server\nStructure is documented below.",
      Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase_GetTypes(),
      true,
      false,
    ),
  ];
}
