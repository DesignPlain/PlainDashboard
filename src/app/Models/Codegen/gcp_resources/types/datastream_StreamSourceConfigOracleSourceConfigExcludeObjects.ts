import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema,
  datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema_GetTypes,
} from "./datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema";

export interface datastream_StreamSourceConfigOracleSourceConfigExcludeObjects {
  /*
Oracle schemas/databases in the database server
Structure is documented below.
*/
  oracleSchemas?: Array<datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema>;
}

export function datastream_StreamSourceConfigOracleSourceConfigExcludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "oracleSchemas",
      "Oracle schemas/databases in the database server\nStructure is documented below.",
      datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
