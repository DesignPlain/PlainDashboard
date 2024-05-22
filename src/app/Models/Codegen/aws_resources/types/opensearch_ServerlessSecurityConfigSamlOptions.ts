import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_ServerlessSecurityConfigSamlOptions {
  // Session timeout, in minutes. Minimum is 5 minutes and maximum is 720 minutes (12 hours). Default is 60 minutes.
  sessionTimeout?: number;

  // User attribute for this SAML integration.
  userAttribute?: string;

  // Group attribute for this SAML integration.
  groupAttribute?: string;

  // The XML IdP metadata file generated from your identity provider.
  metadata?: string;
}

export function opensearch_ServerlessSecurityConfigSamlOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "userAttribute",
      "User attribute for this SAML integration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupAttribute",
      "Group attribute for this SAML integration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metadata",
      "The XML IdP metadata file generated from your identity provider.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sessionTimeout",
      "Session timeout, in minutes. Minimum is 5 minutes and maximum is 720 minutes (12 hours). Default is 60 minutes.",
      [],
      false,
      false,
    ),
  ];
}
