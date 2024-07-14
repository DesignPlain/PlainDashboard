import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase,
  datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase_GetTypes,
} from "./datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase";

export interface datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects {
  /*
MySQL databases on the server
Structure is documented below.
*/
  mysqlDatabases?: Array<datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase>;
}

export function datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "mysqlDatabases",
      "MySQL databases on the server\nStructure is documented below.",
      datastream_StreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabase_GetTypes(),
      true,
      false,
    ),
  ];
}
