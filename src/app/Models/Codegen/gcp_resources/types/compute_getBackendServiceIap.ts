import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_getBackendServiceIap {
  // OAuth2 Client ID for IAP
  oauth2ClientId?: string;

  // OAuth2 Client Secret for IAP
  oauth2ClientSecret?: string;

  // OAuth2 Client Secret SHA-256 for IAP
  oauth2ClientSecretSha256?: string;
}

export function compute_getBackendServiceIap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "oauth2ClientId",
      "OAuth2 Client ID for IAP",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "oauth2ClientSecret",
      "OAuth2 Client Secret for IAP",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "oauth2ClientSecretSha256",
      "OAuth2 Client Secret SHA-256 for IAP",
      [],
      true,
      false,
    ),
  ];
}
