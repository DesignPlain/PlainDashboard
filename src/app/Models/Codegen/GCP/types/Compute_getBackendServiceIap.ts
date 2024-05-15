import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getBackendServiceIap {
  // OAuth2 Client ID for IAP
  Oauth2ClientId?: string;

  // OAuth2 Client Secret for IAP
  Oauth2ClientSecret?: string;

  // OAuth2 Client Secret SHA-256 for IAP
  Oauth2ClientSecretSha256?: string;
}

export function Compute_getBackendServiceIap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Oauth2ClientSecretSha256",
      "OAuth2 Client Secret SHA-256 for IAP",
      [],
      true,
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
      "OAuth2 Client Secret for IAP",
      [],
      true,
      false,
    ),
  ];
}
