import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema,
  datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema_GetTypes,
} from './datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema';

export interface datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects {
  /*
PostgreSQL schemas on the server
Structure is documented below.
*/
  postgresqlSchemas?: Array<datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema>;
}

export function datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'postgresqlSchemas',
      'PostgreSQL schemas on the server\nStructure is documented below.',
      () =>
        datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjectsPostgresqlSchema_GetTypes(),
      true,
      false,
    ),
  ];
}
