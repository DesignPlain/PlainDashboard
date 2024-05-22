import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_EndpointPostgresSettings {
  // When set to `true`, this value causes a task to fail if the actual size of a LOB column is greater than the specified `LobMaxSize`. Default is `false`.
  failTasksOnLobTruncation?: boolean;

  // Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL. Default is `32,768 KB`.
  maxFileSize?: number;

  // Sets the schema in which the operational DDL database artifacts are created. Default is `public`.
  ddlArtifactsSchema?: string;

  // Sets the client statement timeout for the PostgreSQL instance, in seconds. Default value is `60`.
  executeTimeout?: number;

  // Sets the WAL heartbeat frequency (in minutes). Default value is `5`.
  heartbeatFrequency?: number;

  // Sets the name of a previously created logical replication slot for a CDC load of the PostgreSQL source instance.
  slotName?: string;

  // For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.
  afterConnectScript?: string;

  // To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts.
  captureDdls?: boolean;

  // Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.
  databaseMode?: string;

  // Sets the schema in which the heartbeat artifacts are created. Default value is `public`.
  heartbeatSchema?: string;

  // You can use PostgreSQL endpoint settings to map a boolean as a boolean from your PostgreSQL source to a Amazon Redshift target. Default value is `false`.
  mapBooleanAsBoolean?: boolean;

  // Optional When true, DMS migrates JSONB values as CLOB.
  mapJsonbAsClob?: boolean;

  // The Babelfish for Aurora PostgreSQL database name for the endpoint.
  babelfishDatabaseName?: string;

  // The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. By doing this, it prevents idle logical replication slots from holding onto old WAL logs, which can result in storage full situations on the source.
  heartbeatEnable?: boolean;

  // Optional When true, DMS migrates LONG values as VARCHAR.
  mapLongVarcharAs?: string;

  // Specifies the plugin to use to create a replication slot. Valid values: `pglogical`, `test_decoding`.
  pluginName?: string;
}

export function dms_EndpointPostgresSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "heartbeatFrequency",
      "Sets the WAL heartbeat frequency (in minutes). Default value is `5`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseMode",
      "Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "babelfishDatabaseName",
      "The Babelfish for Aurora PostgreSQL database name for the endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pluginName",
      "Specifies the plugin to use to create a replication slot. Valid values: `pglogical`, `test_decoding`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ddlArtifactsSchema",
      "Sets the schema in which the operational DDL database artifacts are created. Default is `public`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mapLongVarcharAs",
      "Optional When true, DMS migrates LONG values as VARCHAR.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "heartbeatSchema",
      "Sets the schema in which the heartbeat artifacts are created. Default value is `public`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "slotName",
      "Sets the name of a previously created logical replication slot for a CDC load of the PostgreSQL source instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "heartbeatEnable",
      "The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. By doing this, it prevents idle logical replication slots from holding onto old WAL logs, which can result in storage full situations on the source.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "executeTimeout",
      "Sets the client statement timeout for the PostgreSQL instance, in seconds. Default value is `60`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxFileSize",
      "Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL. Default is `32,768 KB`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "afterConnectScript",
      "For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "captureDdls",
      "To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "mapBooleanAsBoolean",
      "You can use PostgreSQL endpoint settings to map a boolean as a boolean from your PostgreSQL source to a Amazon Redshift target. Default value is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "mapJsonbAsClob",
      "Optional When true, DMS migrates JSONB values as CLOB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "failTasksOnLobTruncation",
      "When set to `true`, this value causes a task to fail if the actual size of a LOB column is greater than the specified `LobMaxSize`. Default is `false`.",
      [],
      false,
      false,
    ),
  ];
}
