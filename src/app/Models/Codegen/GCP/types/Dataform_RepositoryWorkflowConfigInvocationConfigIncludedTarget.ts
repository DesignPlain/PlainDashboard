import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget {
  // The action's database (Google Cloud project ID).
  Database?: string;

  // The action's name, within database and schema.
  Name?: string;

  // The action's schema (BigQuery dataset ID), within database.
  Schema?: string;
}

export function Dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Database",
      "The action's database (Google Cloud project ID).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The action's name, within database and schema.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Schema",
      "The action's schema (BigQuery dataset ID), within database.",
      [],
      false,
      false,
    ),
  ];
}
