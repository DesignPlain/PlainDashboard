import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionBackendServiceIap {
  // OAuth2 Client ID for IAP
  Oauth2ClientId?: string;

  /*
OAuth2 Client Secret for IAP
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Oauth2ClientSecret?: string;

  /*
(Output)
OAuth2 Client Secret SHA-256 for IAP
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Oauth2ClientSecretSha256?: string;
}

export function Compute_RegionBackendServiceIap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Oauth2ClientSecretSha256",
      "(Output)\nOAuth2 Client Secret SHA-256 for IAP\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Oauth2ClientId",
      "OAuth2 Client ID for IAP",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Oauth2ClientSecret",
      "OAuth2 Client Secret for IAP\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
  ];
}
