import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects,
  Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects_GetTypes,
} from "./Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects";
import {
  Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects,
  Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects_GetTypes,
} from "./Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects";

export interface Datastream_StreamSourceConfigPostgresqlSourceConfig {
  /*
PostgreSQL objects to retrieve from the source.
Structure is documented below.
*/
  IncludeObjects?: Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects;

  /*
Maximum number of concurrent backfill tasks. The number should be non
negative. If not set (or set to 0), the system's default value will be used.
*/
  MaxConcurrentBackfillTasks?: number;

  /*
The name of the publication that includes the set of all tables
that are defined in the stream's include_objects.
*/
  Publication?: string;

  /*
The name of the logical replication slot that's configured with
the pgoutput plugin.
*/
  ReplicationSlot?: string;

  /*
PostgreSQL objects to exclude from the stream.
Structure is documented below.
*/
  ExcludeObjects?: Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects;
}

export function Datastream_StreamSourceConfigPostgresqlSourceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "IncludeObjects",
      "PostgreSQL objects to retrieve from the source.\nStructure is documented below.",
      Datastream_StreamSourceConfigPostgresqlSourceConfigIncludeObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxConcurrentBackfillTasks",
      "Maximum number of concurrent backfill tasks. The number should be non\nnegative. If not set (or set to 0), the system's default value will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Publication",
      "The name of the publication that includes the set of all tables\nthat are defined in the stream's include_objects.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ReplicationSlot",
      "The name of the logical replication slot that's configured with\nthe pgoutput plugin.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExcludeObjects",
      "PostgreSQL objects to exclude from the stream.\nStructure is documented below.",
      Datastream_StreamSourceConfigPostgresqlSourceConfigExcludeObjects_GetTypes(),
      false,
      false,
    ),
  ];
}
