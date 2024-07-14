import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema,
  datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema_GetTypes,
} from "./datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema";

export interface datastream_StreamSourceConfigOracleSourceConfigIncludeObjects {
  /*
Oracle schemas/databases in the database server
Structure is documented below.
*/
  oracleSchemas?: Array<datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema>;
}

export function datastream_StreamSourceConfigOracleSourceConfigIncludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "oracleSchemas",
      "Oracle schemas/databases in the database server\nStructure is documented below.",
      datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
