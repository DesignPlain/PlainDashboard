import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema,
  Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema_GetTypes,
} from "./Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema";

export interface Datastream_StreamSourceConfigOracleSourceConfigExcludeObjects {
  /*
Oracle schemas/databases in the database server
Structure is documented below.
*/
  OracleSchemas?: Array<Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema>;
}

export function Datastream_StreamSourceConfigOracleSourceConfigExcludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "OracleSchemas",
      "Oracle schemas/databases in the database server\nStructure is documented below.",
      Datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
