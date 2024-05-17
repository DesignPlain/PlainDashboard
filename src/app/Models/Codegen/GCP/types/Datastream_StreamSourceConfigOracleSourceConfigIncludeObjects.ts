import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema,
  Datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema_GetTypes,
} from "./Datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema";

export interface Datastream_StreamSourceConfigOracleSourceConfigIncludeObjects {
  /*
Oracle schemas/databases in the database server
Structure is documented below.
*/
  OracleSchemas?: Array<Datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema>;
}

export function Datastream_StreamSourceConfigOracleSourceConfigIncludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "OracleSchemas",
      "Oracle schemas/databases in the database server\nStructure is documented below.",
      Datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
