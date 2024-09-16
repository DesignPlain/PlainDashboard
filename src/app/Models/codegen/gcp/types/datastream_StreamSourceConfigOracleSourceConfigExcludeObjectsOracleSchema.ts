import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable,
  datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable_GetTypes,
} from './datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable';

export interface datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema {
  // Schema name.
  schema?: string;

  /*
Tables in the database.
Structure is documented below.
*/
  oracleTables?: Array<datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable>;
}

export function datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'schema',
      'Schema name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'oracleTables',
      'Tables in the database.\nStructure is documented below.',
      () =>
        datastream_StreamSourceConfigOracleSourceConfigExcludeObjectsOracleSchemaOracleTable_GetTypes(),
      false,
      false,
    ),
  ];
}
