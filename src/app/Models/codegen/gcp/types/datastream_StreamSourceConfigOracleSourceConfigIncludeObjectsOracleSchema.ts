import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable,
  datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable_GetTypes,
} from './datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable';

export interface datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema {
  /*
Tables in the database.
Structure is documented below.
*/
  oracleTables?: Array<datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable>;

  // Schema name.
  schema?: string;
}

export function datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'oracleTables',
      'Tables in the database.\nStructure is documented below.',
      () =>
        datastream_StreamSourceConfigOracleSourceConfigIncludeObjectsOracleSchemaOracleTable_GetTypes(),
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
