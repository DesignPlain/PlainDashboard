import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase,
  Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase_GetTypes,
} from "./Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase";

export interface Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects {
  /*
MySQL databases on the server
Structure is documented below.
*/
  MysqlDatabases?: Array<Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase>;
}

export function Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "MysqlDatabases",
      "MySQL databases on the server\nStructure is documented below.",
      Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase_GetTypes(),
      true,
      false,
    ),
  ];
}
