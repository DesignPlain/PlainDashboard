import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlowClientSecret,
  integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlowClientSecret_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlowClientSecret";

export interface integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow {
  // Whether to enable PKCE when the user performs the auth code flow.
  enablePkce?: boolean;

  // Scopes the connection will request when the user performs the auth code flow.
  scopes?: Array<string>;

  // Auth URL for Authorization Code Flow.
  authUri?: string;

  // Secret version of Password for Authentication.
  clientId?: string;

  /*
Secret version reference containing the client secret.
Structure is documented below.
*/
  clientSecret?: integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlowClientSecret;
}

export function integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enablePkce",
      "Whether to enable PKCE when the user performs the auth code flow.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "scopes",
      "Scopes the connection will request when the user performs the auth code flow.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authUri",
      "Auth URL for Authorization Code Flow.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "Secret version of Password for Authentication.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "clientSecret",
      "Secret version reference containing the client secret.\nStructure is documented below.",
      integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlowClientSecret_GetTypes(),
      false,
      false,
    ),
  ];
}
