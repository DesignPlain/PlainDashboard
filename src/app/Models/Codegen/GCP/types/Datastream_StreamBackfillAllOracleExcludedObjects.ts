import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema,
  Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema_GetTypes,
} from "./Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema";

export interface Datastream_StreamBackfillAllOracleExcludedObjects {
  /*
Oracle schemas/databases in the database server
Structure is documented below.
*/
  OracleSchemas?: Array<Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema>;
}

export function Datastream_StreamBackfillAllOracleExcludedObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "OracleSchemas",
      "Oracle schemas/databases in the database server\nStructure is documented below.",
      Datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
