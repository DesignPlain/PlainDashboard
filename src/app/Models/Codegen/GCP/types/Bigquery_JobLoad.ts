import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_JobLoadParquetOptions,
  Bigquery_JobLoadParquetOptions_GetTypes,
} from "./Bigquery_JobLoadParquetOptions";
import {
  Bigquery_JobLoadTimePartitioning,
  Bigquery_JobLoadTimePartitioning_GetTypes,
} from "./Bigquery_JobLoadTimePartitioning";
import {
  Bigquery_JobLoadDestinationEncryptionConfiguration,
  Bigquery_JobLoadDestinationEncryptionConfiguration_GetTypes,
} from "./Bigquery_JobLoadDestinationEncryptionConfiguration";
import {
  Bigquery_JobLoadDestinationTable,
  Bigquery_JobLoadDestinationTable_GetTypes,
} from "./Bigquery_JobLoadDestinationTable";

export interface Bigquery_JobLoad {
  /*
The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding,
and then uses the first byte of the encoded string to split the data in its raw, binary state.
The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string.
If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
*/
  Quote?: string;

  /*
Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion.
Default value is `WRITE_EMPTY`.
Possible values are: `WRITE_TRUNCATE`, `WRITE_APPEND`, `WRITE_EMPTY`.
*/
  WriteDisposition?: string;

  /*
Accept rows that are missing trailing optional columns. The missing values are treated as nulls.
If false, records with missing trailing columns are treated as bad records, and if there are too many bad records,
an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
*/
  AllowJaggedRows?: boolean;

  // Indicates if we should automatically infer the options and schema for CSV and JSON sources.
  Autodetect?: boolean;

  /*
Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion
Default value is `CREATE_IF_NEEDED`.
Possible values are: `CREATE_IF_NEEDED`, `CREATE_NEVER`.
*/
  CreateDisposition?: string;

  /*
The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character.
To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts
the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the
data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator.
The default value is a comma (',').
*/
  FieldDelimiter?: string;

  /*
The number of rows at the top of a CSV file that BigQuery will skip when loading the data.
The default value is 0. This property is useful if you have header rows in the file that should be skipped.
When autodetect is on, the behavior is the following:
skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,
the row is read as data. Otherwise data is read starting from the second row.
skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.
skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,
row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
*/
  SkipLeadingRows?: number;

  /*
Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.
The default value is false.
*/
  AllowQuotedNewlines?: boolean;

  /*
The destination table to load the data into.
Structure is documented below.
*/
  DestinationTable?: Bigquery_JobLoadDestinationTable;

  /*
The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value,
an invalid error is returned in the job result. The default value is 0, which requires that all records are valid.
*/
  MaxBadRecords?: number;

  /*
Specifies a string that represents a null value in a CSV file. The default value is the empty string. If you set this
property to a custom value, BigQuery throws an error if an
empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as
an empty value.
*/
  NullMarker?: string;

  /*
The fully-qualified URIs that point to your data in Google Cloud.
For Google Cloud Storage URIs: Each URI can contain one '\-' wildcard character
and it must come after the 'bucket' name. Size limits related to load jobs apply
to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be
specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.
For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '\-' wildcard character is not allowed.
*/
  SourceUris?: Array<string>;

  /*
The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
The default value is UTF-8. BigQuery decodes the data after the raw, binary data
has been split using the values of the quote and fieldDelimiter properties.
*/
  Encoding?: string;

  /*
If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.
For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited
GeoJSON: set to GEOJSON.
*/
  JsonExtension?: string;

  /*
Parquet Options for load and make external tables.
Structure is documented below.
*/
  ParquetOptions?: Bigquery_JobLoadParquetOptions;

  /*
The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".
For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".
For orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".
The default value is CSV.
*/
  SourceFormat?: string;

  /*
Time-based partitioning specification for the destination table.
Structure is documented below.
*/
  TimePartitioning?: Bigquery_JobLoadTimePartitioning;

  /*
Custom encryption configuration (e.g., Cloud KMS keys)
Structure is documented below.
*/
  DestinationEncryptionConfiguration?: Bigquery_JobLoadDestinationEncryptionConfiguration;

  /*
Indicates if BigQuery should allow extra values that are not represented in the table schema.
If true, the extra values are ignored. If false, records with extra columns are treated as bad records,
and if there are too many bad records, an invalid error is returned in the job result.
The default value is false. The sourceFormat property determines what BigQuery treats as an extra value:
CSV: Trailing columns
JSON: Named values that don't match any column names
*/
  IgnoreUnknownValues?: boolean;

  /*
If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.
Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.
If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.
*/
  ProjectionFields?: Array<string>;

  /*
Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or
supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;
when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.
For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:
ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.
ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
*/
  SchemaUpdateOptions?: Array<string>;
}

export function Bigquery_JobLoad_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Encoding",
      "The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.\nThe default value is UTF-8. BigQuery decodes the data after the raw, binary data\nhas been split using the values of the quote and fieldDelimiter properties.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceFormat",
      'The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP".\nFor newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET".\nFor orc, specify "ORC". [Beta] For Bigtable, specify "BIGTABLE".\nThe default value is CSV.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IgnoreUnknownValues",
      "Indicates if BigQuery should allow extra values that are not represented in the table schema.\nIf true, the extra values are ignored. If false, records with extra columns are treated as bad records,\nand if there are too many bad records, an invalid error is returned in the job result.\nThe default value is false. The sourceFormat property determines what BigQuery treats as an extra value:\nCSV: Trailing columns\nJSON: Named values that don't match any column names",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Autodetect",
      "Indicates if we should automatically infer the options and schema for CSV and JSON sources.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SkipLeadingRows",
      "The number of rows at the top of a CSV file that BigQuery will skip when loading the data.\nThe default value is 0. This property is useful if you have header rows in the file that should be skipped.\nWhen autodetect is on, the behavior is the following:\nskipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected,\nthe row is read as data. Otherwise data is read starting from the second row.\nskipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row.\nskipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected,\nrow N is just skipped. Otherwise row N is used to extract column names for the detected schema.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TimePartitioning",
      "Time-based partitioning specification for the destination table.\nStructure is documented below.",
      Bigquery_JobLoadTimePartitioning_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "FieldDelimiter",
      "The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character.\nTo use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts\nthe string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the\ndata in its raw, binary state. BigQuery also supports the escape sequence \"\\t\" to specify a tab separator.\nThe default value is a comma (',').",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SourceUris",
      "The fully-qualified URIs that point to your data in Google Cloud.\nFor Google Cloud Storage URIs: Each URI can contain one '\\*' wildcard character\nand it must come after the 'bucket' name. Size limits related to load jobs apply\nto external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be\nspecified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table.\nFor Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '\\*' wildcard character is not allowed.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "JsonExtension",
      "If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON.\nFor a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited\nGeoJSON: set to GEOJSON.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ParquetOptions",
      "Parquet Options for load and make external tables.\nStructure is documented below.",
      Bigquery_JobLoadParquetOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowJaggedRows",
      "Accept rows that are missing trailing optional columns. The missing values are treated as nulls.\nIf false, records with missing trailing columns are treated as bad records, and if there are too many bad records,\nan invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateDisposition",
      "Specifies whether the job is allowed to create new tables. The following values are supported:\nCREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.\nCREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.\nCreation, truncation and append actions occur as one atomic update upon job completion\nDefault value is `CREATE_IF_NEEDED`.\nPossible values are: `CREATE_IF_NEEDED`, `CREATE_NEVER`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowQuotedNewlines",
      "Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file.\nThe default value is false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DestinationTable",
      "The destination table to load the data into.\nStructure is documented below.",
      Bigquery_JobLoadDestinationTable_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxBadRecords",
      "The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value,\nan invalid error is returned in the job result. The default value is 0, which requires that all records are valid.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NullMarker",
      "Specifies a string that represents a null value in a CSV file. The default value is the empty string. If you set this\nproperty to a custom value, BigQuery throws an error if an\nempty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as\nan empty value.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DestinationEncryptionConfiguration",
      "Custom encryption configuration (e.g., Cloud KMS keys)\nStructure is documented below.",
      Bigquery_JobLoadDestinationEncryptionConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ProjectionFields",
      'If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup.\nProperty names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties.\nIf any named property isn\'t found in the Cloud Datastore backup, an invalid error is returned in the job result.',
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Quote",
      "The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding,\nand then uses the first byte of the encoded string to split the data in its raw, binary state.\nThe default value is a double-quote ('\"'). If your data does not contain quoted sections, set the property value to an empty string.\nIf your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "WriteDisposition",
      "Specifies the action that occurs if the destination table already exists. The following values are supported:\nWRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.\nWRITE_APPEND: If the table already exists, BigQuery appends the data to the table.\nWRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.\nEach action is atomic and only occurs if BigQuery is able to complete the job successfully.\nCreation, truncation and append actions occur as one atomic update upon job completion.\nDefault value is `WRITE_EMPTY`.\nPossible values are: `WRITE_TRUNCATE`, `WRITE_APPEND`, `WRITE_EMPTY`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SchemaUpdateOptions",
      "Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or\nsupplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND;\nwhen writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators.\nFor normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified:\nALLOW_FIELD_ADDITION: allow adding a nullable field to the schema.\nALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
