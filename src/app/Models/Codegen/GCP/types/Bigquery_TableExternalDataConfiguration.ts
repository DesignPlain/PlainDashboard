import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bigquery_TableExternalDataConfigurationParquetOptions,
  bigquery_TableExternalDataConfigurationParquetOptions_GetTypes,
} from "./bigquery_TableExternalDataConfigurationParquetOptions";
import {
  bigquery_TableExternalDataConfigurationCsvOptions,
  bigquery_TableExternalDataConfigurationCsvOptions_GetTypes,
} from "./bigquery_TableExternalDataConfigurationCsvOptions";
import {
  bigquery_TableExternalDataConfigurationHivePartitioningOptions,
  bigquery_TableExternalDataConfigurationHivePartitioningOptions_GetTypes,
} from "./bigquery_TableExternalDataConfigurationHivePartitioningOptions";
import {
  bigquery_TableExternalDataConfigurationJsonOptions,
  bigquery_TableExternalDataConfigurationJsonOptions_GetTypes,
} from "./bigquery_TableExternalDataConfigurationJsonOptions";
import {
  bigquery_TableExternalDataConfigurationAvroOptions,
  bigquery_TableExternalDataConfigurationAvroOptions_GetTypes,
} from "./bigquery_TableExternalDataConfigurationAvroOptions";
import {
  bigquery_TableExternalDataConfigurationGoogleSheetsOptions,
  bigquery_TableExternalDataConfigurationGoogleSheetsOptions_GetTypes,
} from "./bigquery_TableExternalDataConfigurationGoogleSheetsOptions";

export interface bigquery_TableExternalDataConfiguration {
  /*
Additional properties to set if
`source_format` is set to "PARQUET". Structure is documented below.
*/
  parquetOptions?: bigquery_TableExternalDataConfigurationParquetOptions;

  /*
Additional properties to set if
`source_format` is set to "CSV". Structure is documented below.
*/
  csvOptions?: bigquery_TableExternalDataConfigurationCsvOptions;

  /*
When set, configures hive partitioning
support. Not all storage formats support hive partitioning -- requesting hive
partitioning on an unsupported format will lead to an error, as will providing
an invalid specification. Structure is documented below.
*/
  hivePartitioningOptions?: bigquery_TableExternalDataConfigurationHivePartitioningOptions;

  // Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. Valid values are `AUTOMATIC` and `MANUAL`.
  metadataCacheMode?: string;

  /*
Additional properties to set if
`source_format` is set to "JSON". Structure is documented below.
*/
  jsonOptions?: bigquery_TableExternalDataConfigurationJsonOptions;

  /*
The maximum number of bad records that
BigQuery can ignore when reading data.
*/
  maxBadRecords?: number;

  // Object Metadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If `object_metadata` is set, `source_format` should be omitted.
  objectMetadata?: string;

  /*
Additional options if `source_format` is set to
"AVRO".  Structure is documented below.
*/
  avroOptions?: bigquery_TableExternalDataConfigurationAvroOptions;

  /*
The connection specifying the credentials to be used to read
external storage, such as Azure Blob, Cloud Storage, or S3. The `connection_id` can have
the form `{{project}}.{{location}}.{{connection_id}}`
or `projects/{{project}}/locations/{{location}}/connections/{{connection_id}}`.

~>--NOTE:-- If you set `external_data_configuration.connection_id`, the
table schema must be specified using the top-level `schema` field
documented above.
*/
  connectionId?: string;

  /*
Specifies how source URIs are interpreted for constructing the file set to load.
By default source URIs are expanded against the underlying storage.
Other options include specifying manifest files. Only applicable to object storage systems. Docs
*/
  fileSetSpecType?: string;

  /*
Indicates if BigQuery should
allow extra values that are not represented in the table schema.
If true, the extra values are ignored. If false, records with
extra columns are treated as bad records, and if there are too
many bad records, an invalid error is returned in the job result.
The default value is false.
*/
  ignoreUnknownValues?: boolean;

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
  schema?: string;

  // When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.
  referenceFileSchemaUri?: string;

  /*
The data format. Please see sourceFormat under
[ExternalDataConfiguration](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration)
in Bigquery's public API documentation for supported formats. To use "GOOGLE_SHEETS"
the `scopes` must include "https://www.googleapis.com/auth/drive.readonly".
*/
  sourceFormat?: string;

  /*
A list of the fully-qualified URIs that point to
your data in Google Cloud.
*/
  sourceUris?: Array<string>;

  /*
Let BigQuery try to autodetect the schema
and format of the table.
*/
  autodetect?: boolean;

  /*
The compression type of the data source.
Valid values are "NONE" or "GZIP".
*/
  compression?: string;

  /*
Additional options if
`source_format` is set to "GOOGLE_SHEETS". Structure is
documented below.
*/
  googleSheetsOptions?: bigquery_TableExternalDataConfigurationGoogleSheetsOptions;
}

export function bigquery_TableExternalDataConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fileSetSpecType",
      "Specifies how source URIs are interpreted for constructing the file set to load.\nBy default source URIs are expanded against the underlying storage.\nOther options include specifying manifest files. Only applicable to object storage systems. Docs",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ignoreUnknownValues",
      "Indicates if BigQuery should\nallow extra values that are not represented in the table schema.\nIf true, the extra values are ignored. If false, records with\nextra columns are treated as bad records, and if there are too\nmany bad records, an invalid error is returned in the job result.\nThe default value is false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "parquetOptions",
      'Additional properties to set if\n`source_format` is set to "PARQUET". Structure is documented below.',
      bigquery_TableExternalDataConfigurationParquetOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jsonOptions",
      'Additional properties to set if\n`source_format` is set to "JSON". Structure is documented below.',
      bigquery_TableExternalDataConfigurationJsonOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "objectMetadata",
      "Object Metadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If `object_metadata` is set, `source_format` should be omitted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "avroOptions",
      'Additional options if `source_format` is set to\n"AVRO".  Structure is documented below.',
      bigquery_TableExternalDataConfigurationAvroOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "compression",
      'The compression type of the data source.\nValid values are "NONE" or "GZIP".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "csvOptions",
      'Additional properties to set if\n`source_format` is set to "CSV". Structure is documented below.',
      bigquery_TableExternalDataConfigurationCsvOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "referenceFileSchemaUri",
      "When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceUris",
      "A list of the fully-qualified URIs that point to\nyour data in Google Cloud.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "autodetect",
      "Let BigQuery try to autodetect the schema\nand format of the table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "googleSheetsOptions",
      'Additional options if\n`source_format` is set to "GOOGLE_SHEETS". Structure is\ndocumented below.',
      bigquery_TableExternalDataConfigurationGoogleSheetsOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "hivePartitioningOptions",
      "When set, configures hive partitioning\nsupport. Not all storage formats support hive partitioning -- requesting hive\npartitioning on an unsupported format will lead to an error, as will providing\nan invalid specification. Structure is documented below.",
      bigquery_TableExternalDataConfigurationHivePartitioningOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxBadRecords",
      "The maximum number of bad records that\nBigQuery can ignore when reading data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectionId",
      "The connection specifying the credentials to be used to read\nexternal storage, such as Azure Blob, Cloud Storage, or S3. The `connection_id` can have\nthe form `{{project}}.{{location}}.{{connection_id}}`\nor `projects/{{project}}/locations/{{location}}/connections/{{connection_id}}`.\n\n~>**NOTE:** If you set `external_data_configuration.connection_id`, the\ntable schema must be specified using the top-level `schema` field\ndocumented above.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schema",
      "A JSON schema for the external table. Schema is required\nfor CSV and JSON formats if autodetect is not on. Schema is disallowed\nfor Google Cloud Bigtable, Cloud Datastore backups, Avro, Iceberg, ORC and Parquet formats.\n~>**NOTE:** Because this field expects a JSON string, any changes to the\nstring will create a diff, even if the JSON itself hasn't changed.\nFurthermore drift for this field cannot not be detected because BigQuery\nonly uses this schema to compute the effective schema for the table, therefore\nany changes on the configured value will force the table to be recreated.\nThis schema is effectively only applied when creating a table from an external\ndatasource, after creation the computed schema will be stored in\n`google_bigquery_table.schema`\n\n~>**NOTE:** If you set `external_data_configuration.connection_id`, the\ntable schema must be specified using the top-level `schema` field\ndocumented above.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "metadataCacheMode",
      "Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. Valid values are `AUTOMATIC` and `MANUAL`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceFormat",
      'The data format. Please see sourceFormat under\n[ExternalDataConfiguration](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration)\nin Bigquery\'s public API documentation for supported formats. To use "GOOGLE_SHEETS"\nthe `scopes` must include "https://www.googleapis.com/auth/drive.readonly".',
      [],
      false,
      false,
    ),
  ];
}
