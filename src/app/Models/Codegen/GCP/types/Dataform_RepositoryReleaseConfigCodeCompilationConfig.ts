import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataform_RepositoryReleaseConfigCodeCompilationConfig {
  // Optional. The prefix that should be prepended to all table names.
  TablePrefix?: string;

  /*
Optional. User-defined variables that are made available to project code during compilation.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
*/
  Vars?: Map<string, string>;

  // Optional. The default schema (BigQuery dataset ID) for assertions.
  AssertionSchema?: string;

  // Optional. The suffix that should be appended to all database (Google Cloud project ID) names.
  DatabaseSuffix?: string;

  // Optional. The default database (Google Cloud project ID).
  DefaultDatabase?: string;

  /*
Optional. The default BigQuery location to use. Defaults to "US".
See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.
*/
  DefaultLocation?: string;

  // Optional. The default schema (BigQuery dataset ID).
  DefaultSchema?: string;

  // Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.
  SchemaSuffix?: string;
}

export function Dataform_RepositoryReleaseConfigCodeCompilationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TablePrefix",
      "Optional. The prefix that should be prepended to all table names.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Vars",
      'Optional. User-defined variables that are made available to project code during compilation.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AssertionSchema",
      "Optional. The default schema (BigQuery dataset ID) for assertions.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DatabaseSuffix",
      "Optional. The suffix that should be appended to all database (Google Cloud project ID) names.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DefaultDatabase",
      "Optional. The default database (Google Cloud project ID).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DefaultLocation",
      'Optional. The default BigQuery location to use. Defaults to "US".\nSee the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DefaultSchema",
      "Optional. The default schema (BigQuery dataset ID).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SchemaSuffix",
      "Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.",
      [],
      false,
      false,
    ),
  ];
}
