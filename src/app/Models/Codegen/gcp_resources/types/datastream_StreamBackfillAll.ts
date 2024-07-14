import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datastream_StreamBackfillAllOracleExcludedObjects,
  datastream_StreamBackfillAllOracleExcludedObjects_GetTypes,
} from "./datastream_StreamBackfillAllOracleExcludedObjects";
import {
  datastream_StreamBackfillAllPostgresqlExcludedObjects,
  datastream_StreamBackfillAllPostgresqlExcludedObjects_GetTypes,
} from "./datastream_StreamBackfillAllPostgresqlExcludedObjects";
import {
  datastream_StreamBackfillAllMysqlExcludedObjects,
  datastream_StreamBackfillAllMysqlExcludedObjects_GetTypes,
} from "./datastream_StreamBackfillAllMysqlExcludedObjects";

export interface datastream_StreamBackfillAll {
  /*
MySQL data source objects to avoid backfilling.
Structure is documented below.
*/
  mysqlExcludedObjects?: datastream_StreamBackfillAllMysqlExcludedObjects;

  /*
PostgreSQL data source objects to avoid backfilling.
Structure is documented below.
*/
  oracleExcludedObjects?: datastream_StreamBackfillAllOracleExcludedObjects;

  /*
PostgreSQL data source objects to avoid backfilling.
Structure is documented below.
*/
  postgresqlExcludedObjects?: datastream_StreamBackfillAllPostgresqlExcludedObjects;
}

export function datastream_StreamBackfillAll_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "postgresqlExcludedObjects",
      "PostgreSQL data source objects to avoid backfilling.\nStructure is documented below.",
      datastream_StreamBackfillAllPostgresqlExcludedObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "mysqlExcludedObjects",
      "MySQL data source objects to avoid backfilling.\nStructure is documented below.",
      datastream_StreamBackfillAllMysqlExcludedObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oracleExcludedObjects",
      "PostgreSQL data source objects to avoid backfilling.\nStructure is documented below.",
      datastream_StreamBackfillAllOracleExcludedObjects_GetTypes(),
      false,
      false,
    ),
  ];
}
