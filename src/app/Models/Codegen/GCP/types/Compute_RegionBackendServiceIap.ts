import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionBackendServiceIap {
  // OAuth2 Client ID for IAP
  oauth2ClientId?: string;

  /*
OAuth2 Client Secret for IAP
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  oauth2ClientSecret?: string;

  /*
(Output)
OAuth2 Client Secret SHA-256 for IAP
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  oauth2ClientSecretSha256?: string;
}

export function compute_RegionBackendServiceIap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "oauth2ClientSecret",
      "OAuth2 Client Secret for IAP\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "oauth2ClientSecretSha256",
      "(Output)\nOAuth2 Client Secret SHA-256 for IAP\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "oauth2ClientId",
      "OAuth2 Client ID for IAP",
      [],
      true,
      false,
    ),
  ];
}
