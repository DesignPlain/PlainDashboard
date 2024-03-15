import { TableExternalDataConfigurationGoogleSheetsOptions } from "./TableExternalDataConfigurationGoogleSheetsOptions";
import { TableExternalDataConfigurationJsonOptions } from "./TableExternalDataConfigurationJsonOptions";
import { TableExternalDataConfigurationParquetOptions } from "./TableExternalDataConfigurationParquetOptions";
import { TableExternalDataConfigurationHivePartitioningOptions } from "./TableExternalDataConfigurationHivePartitioningOptions";
import { TableExternalDataConfigurationCsvOptions } from "./TableExternalDataConfigurationCsvOptions";
import { TableExternalDataConfigurationAvroOptions } from "./TableExternalDataConfigurationAvroOptions";

export interface TableExternalDataConfiguration {
  /*
Additional properties to set if
`source_format` is set to "CSV". Structure is documented below.
*/
  CsvOptions?: TableExternalDataConfigurationCsvOptions;

  /*
The maximum number of bad records that
BigQuery can ignore when reading data.
*/
  MaxBadRecords?: number;

  // Object Metadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If `object_metadata` is set, `source_format` should be omitted.
  ObjectMetadata?: string;

  /*
Additional options if `source_format` is set to
"AVRO".  Structure is documented below.
*/
  AvroOptions?: TableExternalDataConfigurationAvroOptions;

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

  /*
Additional options if
`source_format` is set to "GOOGLE_SHEETS". Structure is
documented below.
*/
  GoogleSheetsOptions?: TableExternalDataConfigurationGoogleSheetsOptions;

  /*
Additional properties to set if
`source_format` is set to "JSON". Structure is documented below.
*/
  JsonOptions?: TableExternalDataConfigurationJsonOptions;

  /*
The data format. Please see sourceFormat under
[ExternalDataConfiguration](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration)
in Bigquery's public API documentation for supported formats. To use "GOOGLE_SHEETS"
the `scopes` must include "https://www.googleapis.com/auth/drive.readonly".
*/
  SourceFormat?: string;

  /*
Let BigQuery try to autodetect the schema
and format of the table.
*/
  Autodetect?: boolean;

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
Additional properties to set if
`source_format` is set to "PARQUET". Structure is documented below.
*/
  ParquetOptions?: TableExternalDataConfigurationParquetOptions;

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
The compression type of the data source.
Valid values are "NONE" or "GZIP".
*/
  Compression?: string;

  /*
When set, configures hive partitioning
support. Not all storage formats support hive partitioning -- requesting hive
partitioning on an unsupported format will lead to an error, as will providing
an invalid specification. Structure is documented below.
*/
  HivePartitioningOptions?: TableExternalDataConfigurationHivePartitioningOptions;

  // Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. Valid values are `AUTOMATIC` and `MANUAL`.
  MetadataCacheMode?: string;

  /*
A list of the fully-qualified URIs that point to
your data in Google Cloud.
*/
  SourceUris?: Array<string>;
}
