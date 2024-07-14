import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase,
  datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase_GetTypes,
} from "./datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase";

export interface datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects {
  /*
MySQL databases on the server
Structure is documented below.
*/
  mysqlDatabases?: Array<datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase>;
}

export function datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "mysqlDatabases",
      "MySQL databases on the server\nStructure is documented below.",
      datastream_StreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabase_GetTypes(),
      true,
      false,
    ),
  ];
}
