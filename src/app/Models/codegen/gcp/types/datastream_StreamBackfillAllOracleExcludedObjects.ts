import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema,
  datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema_GetTypes,
} from "./datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema";

export interface datastream_StreamBackfillAllOracleExcludedObjects {
  /*
Oracle schemas/databases in the database server
Structure is documented below.
*/
  oracleSchemas?: Array<datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema>;
}

export function datastream_StreamBackfillAllOracleExcludedObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "oracleSchemas",
      "Oracle schemas/databases in the database server\nStructure is documented below.",
      () =>
        datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
