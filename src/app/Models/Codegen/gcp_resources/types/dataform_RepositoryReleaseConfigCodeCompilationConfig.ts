import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataform_RepositoryReleaseConfigCodeCompilationConfig {
  // Optional. The suffix that should be appended to all database (Google Cloud project ID) names.
  databaseSuffix?: string;

  // Optional. The default database (Google Cloud project ID).
  defaultDatabase?: string;

  /*
Optional. The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.
*/
  defaultLocation?: string;

  // Optional. The default schema (BigQuery dataset ID).
  defaultSchema?: string;

  // Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.
  schemaSuffix?: string;

  // Optional. The prefix that should be prepended to all table names.
  tablePrefix?: string;

  /*
Optional. User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  vars?: Map<string, string>;

  // Optional. The default schema (BigQuery dataset ID) for assertions.
  assertionSchema?: string;
}

export function dataform_RepositoryReleaseConfigCodeCompilationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "defaultDatabase",
      "Optional. The default database (Google Cloud project ID).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultLocation",
      'Optional. The default BigQuery location to use. Defaults to "US".\nSee the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultSchema",
      "Optional. The default schema (BigQuery dataset ID).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schemaSuffix",
      "Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tablePrefix",
      "Optional. The prefix that should be prepended to all table names.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "vars",
      'Optional. User-defined variables that are made available to project code during compilation.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "assertionSchema",
      "Optional. The default schema (BigQuery dataset ID) for assertions.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseSuffix",
      "Optional. The suffix that should be appended to all database (Google Cloud project ID) names.",
      [],
      false,
      false,
    ),
  ];
}
