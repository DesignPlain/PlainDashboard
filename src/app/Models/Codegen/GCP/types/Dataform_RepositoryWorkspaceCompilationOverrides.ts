import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataform_RepositoryWorkspaceCompilationOverrides {
  // The default database (Google Cloud project ID).
  DefaultDatabase?: string;

  // The suffix that should be appended to all schema (BigQuery dataset ID) names.
  SchemaSuffix?: string;

  // The prefix that should be prepended to all table names.
  TablePrefix?: string;
}

export function Dataform_RepositoryWorkspaceCompilationOverrides_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DefaultDatabase",
      "The default database (Google Cloud project ID).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SchemaSuffix",
      "The suffix that should be appended to all schema (BigQuery dataset ID) names.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TablePrefix",
      "The prefix that should be prepended to all table names.",
      [],
      false,
      false,
    ),
  ];
}
