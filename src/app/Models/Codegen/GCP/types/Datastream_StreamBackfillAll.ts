import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamBackfillAllOracleExcludedObjects,
  Datastream_StreamBackfillAllOracleExcludedObjects_GetTypes,
} from "./Datastream_StreamBackfillAllOracleExcludedObjects";
import {
  Datastream_StreamBackfillAllPostgresqlExcludedObjects,
  Datastream_StreamBackfillAllPostgresqlExcludedObjects_GetTypes,
} from "./Datastream_StreamBackfillAllPostgresqlExcludedObjects";
import {
  Datastream_StreamBackfillAllMysqlExcludedObjects,
  Datastream_StreamBackfillAllMysqlExcludedObjects_GetTypes,
} from "./Datastream_StreamBackfillAllMysqlExcludedObjects";

export interface Datastream_StreamBackfillAll {
  /*
MySQL data source objects to avoid backfilling.
Structure is documented below.
*/
  MysqlExcludedObjects?: Datastream_StreamBackfillAllMysqlExcludedObjects;

  /*
PostgreSQL data source objects to avoid backfilling.
Structure is documented below.
*/
  OracleExcludedObjects?: Datastream_StreamBackfillAllOracleExcludedObjects;

  /*
PostgreSQL data source objects to avoid backfilling.
Structure is documented below.
*/
  PostgresqlExcludedObjects?: Datastream_StreamBackfillAllPostgresqlExcludedObjects;
}

export function Datastream_StreamBackfillAll_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "MysqlExcludedObjects",
      "MySQL data source objects to avoid backfilling.\nStructure is documented below.",
      Datastream_StreamBackfillAllMysqlExcludedObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "OracleExcludedObjects",
      "PostgreSQL data source objects to avoid backfilling.\nStructure is documented below.",
      Datastream_StreamBackfillAllOracleExcludedObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PostgresqlExcludedObjects",
      "PostgreSQL data source objects to avoid backfilling.\nStructure is documented below.",
      Datastream_StreamBackfillAllPostgresqlExcludedObjects_GetTypes(),
      false,
      false,
    ),
  ];
}
