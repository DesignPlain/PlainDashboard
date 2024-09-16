import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable,
  datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable_GetTypes,
} from './datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable';

export interface datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema {
  /*
Tables in the database.
Structure is documented below.
*/
  oracleTables?: Array<datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable>;

  // Schema name.
  schema?: string;
}

export function datastream_StreamBackfillAllOracleExcludedObjectsOracleSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'oracleTables',
      'Tables in the database.\nStructure is documented below.',
      () =>
        datastream_StreamBackfillAllOracleExcludedObjectsOracleSchemaOracleTable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'schema',
      'Schema name.',
      () => [],
      true,
      false,
    ),
  ];
}
