import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_TableExternalDataConfigurationCsvOptions,
  Bigquery_TableExternalDataConfigurationCsvOptions_GetTypes,
} from "./Bigquery_TableExternalDataConfigurationCsvOptions";
import {
  Bigquery_TableExternalDataConfigurationGoogleSheetsOptions,
  Bigquery_TableExternalDataConfigurationGoogleSheetsOptions_GetTypes,
} from "./Bigquery_TableExternalDataConfigurationGoogleSheetsOptions";
import {
  Bigquery_TableExternalDataConfigurationAvroOptions,
  Bigquery_TableExternalDataConfigurationAvroOptions_GetTypes,
} from "./Bigquery_TableExternalDataConfigurationAvroOptions";
import {
  Bigquery_TableExternalDataConfigurationJsonOptions,
  Bigquery_TableExternalDataConfigurationJsonOptions_GetTypes,
} from "./Bigquery_TableExternalDataConfigurationJsonOptions";
import {
  Bigquery_TableExternalDataConfigurationHivePartitioningOptions,
  Bigquery_TableExternalDataConfigurationHivePartitioningOptions_GetTypes,
} from "./Bigquery_TableExternalDataConfigurationHivePartitioningOptions";
import {
  Bigquery_TableExternalDataConfigurationParquetOptions,
  Bigquery_TableExternalDataConfigurationParquetOptions_GetTypes,
} from "./Bigquery_TableExternalDataConfigurationParquetOptions";

export interface Bigquery_TableExternalDataConfiguration {
  /*
The data format. Please see sourceFormat under
[ExternalDataConfiguration](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration)
in Bigquery's public API documentation for supported formats. To use "GOOGLE_SHEETS"
the `scopes` must include "https://www.googleapis.com/auth/drive.readonly".
*/
  SourceFormat?: string;

  /*
A list of the fully-qualified URIs that point to
your data in Google Cloud.
*/
  SourceUris?: Array<string>;

  /*
Let BigQuery try to autodetect the schema
and format of the table.
*/
  Autodetect?: boolean;

  /*
The connection specifying the credentials to be used to read
external storage, such as Azure Blob, Cloud Storage, or S3. The `connection_id` can have
the form `{{project}}.{{location}}.{{connection_id}}`
or `projects/{{project}}/locations/{{location}}/connections/{{connection_id}}`.

~>--NOTE:-- If you set `external_data_configuration.connection_id`, the
table schema must be specified using the top-level `schema` field
documented above.
*/
  ConnectionId?: string;

  /*
Specifies how source URIs are interpreted for constructing the file set to load.
By default source URIs are expanded against the underlying storage.
Other options include specifying manifest files. Only applicable to object storage systems. Docs
*/
  FileSetSpecType?: string;

  // Object Metadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If `object_metadata` is set, `source_format` should be omitted.
  ObjectMetadata?: string;

  /*
Additional properties to set if
`source_format` is set to "CSV". Structure is documented below.
*/
  CsvOptions?: Bigquery_TableExternalDataConfigurationCsvOptions;

  /*
Additional options if
`source_format` is set to "GOOGLE_SHEETS". Structure is
documented below.
*/
  GoogleSheetsOptions?: Bigquery_TableExternalDataConfigurationGoogleSheetsOptions;

  /*
Indicates if BigQuery should
allow extra values that are not represented in the table schema.
If true, the extra values are ignored. If false, records with
extra columns are treated as bad records, and if there are too
many bad records, an invalid error is returned in the job result.
The default value is false.
*/
  IgnoreUnknownValues?: boolean;

  /*
Additional options if `source_format` is set to
"AVRO".  Structure is documented below.
*/
  AvroOptions?: Bigquery_TableExternalDataConfigurationAvroOptions;

  /*
The compression type of the data source.
Valid values are "NONE" or "GZIP".
*/
  Compression?: string;

  /*
Additional properties to set if
`source_format` is set to "JSON". Structure is documented below.
*/
  JsonOptions?: Bigquery_TableExternalDataConfigurationJsonOptions;

  // When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.
  ReferenceFileSchemaUri?: string;

  /*
A JSON schema for the external table. Schema is required
for CSV and JSON formats if autodetect is not on. Schema is disallowed
for Google Cloud Bigtable, Cloud Datastore backups, Avro, Iceberg, ORC and Parquet formats.
~>--NOTE:-- Because this field expects a JSON string, any changes to the
string will create a diff, even if the JSON itself hasn't changed.
Furthermore drift for this field cannot not be detected because BigQuery
only uses this schema to compute the effective schema for the table, therefore
any changes on the configured value will force the table to be recreated.
This schema is effectively only applied when creating a table from an external
datasource, after creation the computed schema will be stored in
`google_bigquery_table.schema`

~>--NOTE:-- If you set `external_data_configuration.connection_id`, the
table schema must be specified using the top-level `schema` field
documented above.
*/
  Schema?: string;

  /*
When set, configures hive partitioning
support. Not all storage formats support hive partitioning -- requesting hive
partitioning on an unsupported format will lead to an error, as will providing
an invalid specification. Structure is documented below.
*/
  HivePartitioningOptions?: Bigquery_TableExternalDataConfigurationHivePartitioningOptions;

  /*
The maximum number of bad records that
BigQuery can ignore when reading data.
*/
  MaxBadRecords?: number;

  // Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. Valid values are `AUTOMATIC` and `MANUAL`.
  MetadataCacheMode?: string;

  /*
Additional properties to set if
`source_format` is set to "PARQUET". Structure is documented below.
*/
  ParquetOptions?: Bigquery_TableExternalDataConfigurationParquetOptions;
}

export function Bigquery_TableExternalDataConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "JsonOptions",
      'Additional properties to set if\n`source_format` is set to "JSON". Structure is documented below.',
      Bigquery_TableExternalDataConfigurationJsonOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ParquetOptions",
      'Additional properties to set if\n`source_format` is set to "PARQUET". Structure is documented below.',
      Bigquery_TableExternalDataConfigurationParquetOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Autodetect",
      "Let BigQuery try to autodetect the schema\nand format of the table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConnectionId",
      "The connection specifying the credentials to be used to read\nexternal storage, such as Azure Blob, Cloud Storage, or S3. The `connection_id` can have\nthe form `{{project}}.{{location}}.{{connection_id}}`\nor `projects/{{project}}/locations/{{location}}/connections/{{connection_id}}`.\n\n~>**NOTE:** If you set `external_data_configuration.connection_id`, the\ntable schema must be specified using the top-level `schema` field\ndocumented above.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FileSetSpecType",
      "Specifies how source URIs are interpreted for constructing the file set to load.\nBy default source URIs are expanded against the underlying storage.\nOther options include specifying manifest files. Only applicable to object storage systems. Docs",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IgnoreUnknownValues",
      "Indicates if BigQuery should\nallow extra values that are not represented in the table schema.\nIf true, the extra values are ignored. If false, records with\nextra columns are treated as bad records, and if there are too\nmany bad records, an invalid error is returned in the job result.\nThe default value is false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Compression",
      'The compression type of the data source.\nValid values are "NONE" or "GZIP".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ReferenceFileSchemaUri",
      "When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxBadRecords",
      "The maximum number of bad records that\nBigQuery can ignore when reading data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceFormat",
      'The data format. Please see sourceFormat under\n[ExternalDataConfiguration](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration)\nin Bigquery\'s public API documentation for supported formats. To use "GOOGLE_SHEETS"\nthe `scopes` must include "https://www.googleapis.com/auth/drive.readonly".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AvroOptions",
      'Additional options if `source_format` is set to\n"AVRO".  Structure is documented below.',
      Bigquery_TableExternalDataConfigurationAvroOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Schema",
      "A JSON schema for the external table. Schema is required\nfor CSV and JSON formats if autodetect is not on. Schema is disallowed\nfor Google Cloud Bigtable, Cloud Datastore backups, Avro, Iceberg, ORC and Parquet formats.\n~>**NOTE:** Because this field expects a JSON string, any changes to the\nstring will create a diff, even if the JSON itself hasn't changed.\nFurthermore drift for this field cannot not be detected because BigQuery\nonly uses this schema to compute the effective schema for the table, therefore\nany changes on the configured value will force the table to be recreated.\nThis schema is effectively only applied when creating a table from an external\ndatasource, after creation the computed schema will be stored in\n`google_bigquery_table.schema`\n\n~>**NOTE:** If you set `external_data_configuration.connection_id`, the\ntable schema must be specified using the top-level `schema` field\ndocumented above.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GoogleSheetsOptions",
      'Additional options if\n`source_format` is set to "GOOGLE_SHEETS". Structure is\ndocumented below.',
      Bigquery_TableExternalDataConfigurationGoogleSheetsOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HivePartitioningOptions",
      "When set, configures hive partitioning\nsupport. Not all storage formats support hive partitioning -- requesting hive\npartitioning on an unsupported format will lead to an error, as will providing\nan invalid specification. Structure is documented below.",
      Bigquery_TableExternalDataConfigurationHivePartitioningOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MetadataCacheMode",
      "Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. Valid values are `AUTOMATIC` and `MANUAL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SourceUris",
      "A list of the fully-qualified URIs that point to\nyour data in Google Cloud.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ObjectMetadata",
      "Object Metadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If `object_metadata` is set, `source_format` should be omitted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CsvOptions",
      'Additional properties to set if\n`source_format` is set to "CSV". Structure is documented below.',
      Bigquery_TableExternalDataConfigurationCsvOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
