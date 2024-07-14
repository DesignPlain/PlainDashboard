import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appengine_ApplicationIap {
  /*
OAuth2 client secret to use for the authentication flow.
The SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field.
*/
  oauth2ClientSecret?: string;

  // Hex-encoded SHA-256 hash of the client secret.
  oauth2ClientSecretSha256?: string;

  /*
(Optional) Whether the serving infrastructure will authenticate and authorize all incoming requests. 
(default is false)
*/
  enabled?: boolean;

  // OAuth2 client ID to use for the authentication flow.
  oauth2ClientId?: string;
}

export function appengine_ApplicationIap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "oauth2ClientSecret",
      "OAuth2 client secret to use for the authentication flow.\nThe SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "oauth2ClientSecretSha256",
      "Hex-encoded SHA-256 hash of the client secret.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "(Optional) Whether the serving infrastructure will authenticate and authorize all incoming requests. \n(default is false)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "oauth2ClientId",
      "OAuth2 client ID to use for the authentication flow.",
      [],
      true,
      false,
    ),
  ];
}
