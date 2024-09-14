import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef {
  // The name of the secret in Cloud Secret Manager. Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.
  secret?: string;

  // The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.
  version?: string;
}

export function cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secret",
      "The name of the secret in Cloud Secret Manager. Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.",
      () => [],
      false,
      false,
    ),
  ];
}
