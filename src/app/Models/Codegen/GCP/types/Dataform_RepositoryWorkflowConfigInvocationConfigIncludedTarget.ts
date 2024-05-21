import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget {
  // The action's name, within database and schema.
  name?: string;

  // The action's schema (BigQuery dataset ID), within database.
  schema?: string;

  // The action's database (Google Cloud project ID).
  database?: string;
}

export function dataform_RepositoryWorkflowConfigInvocationConfigIncludedTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "database",
      "The action's database (Google Cloud project ID).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The action's name, within database and schema.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schema",
      "The action's schema (BigQuery dataset ID), within database.",
      [],
      false,
      false,
    ),
  ];
}
