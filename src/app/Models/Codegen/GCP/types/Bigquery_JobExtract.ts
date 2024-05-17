import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_JobExtractSourceModel,
  Bigquery_JobExtractSourceModel_GetTypes,
} from "./Bigquery_JobExtractSourceModel";
import {
  Bigquery_JobExtractSourceTable,
  Bigquery_JobExtractSourceTable_GetTypes,
} from "./Bigquery_JobExtractSourceTable";

export interface Bigquery_JobExtract {
  // Whether to print out a header row in the results. Default is true.
  PrintHeader?: boolean;

  /*
A reference to the model being exported.
Structure is documented below.
*/
  SourceModel?: Bigquery_JobExtractSourceModel;

  /*
A reference to the table being exported.
Structure is documented below.
*/
  SourceTable?: Bigquery_JobExtractSourceTable;

  // Whether to use logical types when extracting to AVRO format.
  UseAvroLogicalTypes?: boolean;

  /*
The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE.
The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.
*/
  Compression?: string;

  /*
The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.
The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.
The default value for models is SAVED_MODEL.
*/
  DestinationFormat?: string;

  // A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
  DestinationUris?: Array<string>;

  /*
When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.
Default is ','
*/
  FieldDelimiter?: string;
}

export function Bigquery_JobExtract_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "PrintHeader",
      "Whether to print out a header row in the results. Default is true.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SourceModel",
      "A reference to the model being exported.\nStructure is documented below.",
      Bigquery_JobExtractSourceModel_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SourceTable",
      "A reference to the table being exported.\nStructure is documented below.",
      Bigquery_JobExtractSourceTable_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "UseAvroLogicalTypes",
      "Whether to use logical types when extracting to AVRO format.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Compression",
      "The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE.\nThe default value is NONE. DEFLATE and SNAPPY are only supported for Avro.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DestinationFormat",
      "The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO for tables and SAVED_MODEL for models.\nThe default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV.\nThe default value for models is SAVED_MODEL.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DestinationUris",
      "A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "FieldDelimiter",
      "When extracting data in CSV format, this defines the delimiter to use between fields in the exported data.\nDefault is ','",
      [],
      false,
      true,
    ),
  ];
}
