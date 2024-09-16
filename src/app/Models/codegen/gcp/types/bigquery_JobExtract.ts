import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bigquery_JobExtractSourceTable,
  bigquery_JobExtractSourceTable_GetTypes,
} from './bigquery_JobExtractSourceTable';
import {
  bigquery_JobExtractSourceModel,
  bigquery_JobExtractSourceModel_GetTypes,
} from './bigquery_JobExtractSourceModel';

export interface bigquery_JobExtract {
  /*
The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.
*/
  destinationFormat?: string;

  // A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
  destinationUris?: Array<string>;

  /*
When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.
Default is ','
*/
  fieldDelimiter?: string;

  // Whether to print out a header row in the results. Default is true.
  printHeader?: boolean;

  /*
A reference to the model being exported.
Structure is documented below.
*/
  sourceModel?: bigquery_JobExtractSourceModel;

  /*
A reference to the table being exported.
Structure is documented below.
*/
  sourceTable?: bigquery_JobExtractSourceTable;

  // Whether to use logical types when extracting to AVRO format.
  useAvroLogicalTypes?: boolean;

  /*
The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.
*/
  compression?: string;
}

export function bigquery_JobExtract_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'sourceTable',
      'A reference to the table being exported.\nStructure is documented below.',
      () => bigquery_JobExtractSourceTable_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useAvroLogicalTypes',
      'Whether to use logical types when extracting to AVRO format.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'compression',
      'The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE.\nThe default value is NONE. DEFLATE and SNAPPY are only supported for Avro.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'destinationFormat',
      'The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.\nThe default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.\nThe default value for models is SAVED_MODEL.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'destinationUris',
      'A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'fieldDelimiter',
      "When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.\nDefault is ','",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'printHeader',
      'Whether to print out a header row in the results. Default is true.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sourceModel',
      'A reference to the model being exported.\nStructure is documented below.',
      () => bigquery_JobExtractSourceModel_GetTypes(),
      false,
      true,
    ),
  ];
}
