import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_TableExternalDataConfigurationCsvOptions {
  /*
Indicates if BigQuery should accept rows
that are missing trailing optional columns.
*/
  AllowJaggedRows?: boolean;

  /*
Indicates if BigQuery should allow
quoted data sections that contain newline characters in a CSV file.
The default value is false.
*/
  AllowQuotedNewlines?: boolean;

  /*
The character encoding of the data. The supported
values are UTF-8 or ISO-8859-1.
*/
  Encoding?: string;

  // The separator for fields in a CSV file.
  FieldDelimiter?: string;

  /*
The value that is used to quote data sections in a
CSV file. If your data does not contain quoted sections, set the
property value to an empty string. If your data contains quoted newline
characters, you must also set the `allow_quoted_newlines` property to true.
The API-side default is `"`, specified in the provider escaped as `\"`. Due to
limitations with default values, this value is required to be
explicitly set.
*/
  Quote?: string;

  /*
The number of rows at the top of a CSV
file that BigQuery will skip when reading the data.
*/
  SkipLeadingRows?: number;
}

export function Bigquery_TableExternalDataConfigurationCsvOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowQuotedNewlines",
      "Indicates if BigQuery should allow\nquoted data sections that contain newline characters in a CSV file.\nThe default value is false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Encoding",
      "The character encoding of the data. The supported\nvalues are UTF-8 or ISO-8859-1.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FieldDelimiter",
      "The separator for fields in a CSV file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Quote",
      'The value that is used to quote data sections in a\nCSV file. If your data does not contain quoted sections, set the\nproperty value to an empty string. If your data contains quoted newline\ncharacters, you must also set the `allow_quoted_newlines` property to true.\nThe API-side default is `"`, specified in the provider escaped as `\\"`. Due to\nlimitations with default values, this value is required to be\nexplicitly set.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SkipLeadingRows",
      "The number of rows at the top of a CSV\nfile that BigQuery will skip when reading the data.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowJaggedRows",
      "Indicates if BigQuery should accept rows\nthat are missing trailing optional columns.",
      [],
      false,
      false,
    ),
  ];
}
