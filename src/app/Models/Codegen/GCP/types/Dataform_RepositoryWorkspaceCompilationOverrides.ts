import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataform_RepositoryWorkspaceCompilationOverrides {
  // The suffix that should be appended to all schema (BigQuery dataset ID) names.
  schemaSuffix?: string;

  // The prefix that should be prepended to all table names.
  tablePrefix?: string;

  // The default database (Google Cloud project ID).
  defaultDatabase?: string;
}

export function dataform_RepositoryWorkspaceCompilationOverrides_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "schemaSuffix",
      "The suffix that should be appended to all schema (BigQuery dataset ID) names.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tablePrefix",
      "The prefix that should be prepended to all table names.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultDatabase",
      "The default database (Google Cloud project ID).",
      [],
      false,
      false,
    ),
  ];
}
