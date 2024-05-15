import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef {
  // The name of the secret in Cloud Secret Manager. Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.
  Secret?: string;

  // The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.
  Version?: string;
}

export function Cloudrunv2_ServiceTemplateContainerEnvValueSourceSecretKeyRef_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Secret",
      "The name of the secret in Cloud Secret Manager. Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.",
      [],
      false,
      false,
    ),
  ];
}
