import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable,
  datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable_GetTypes,
} from './datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable';

export interface datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase {
  /*
Tables in the database.
Structure is documented below.
*/
  mysqlTables?: Array<datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable>;

  // Database name.
  database?: string;
}

export function datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'mysqlTables',
      'Tables in the database.\nStructure is documented below.',
      () =>
        datastream_StreamBackfillAllMysqlExcludedObjectsMysqlDatabaseMysqlTable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'database',
      'Database name.',
      () => [],
      true,
      false,
    ),
  ];
}
