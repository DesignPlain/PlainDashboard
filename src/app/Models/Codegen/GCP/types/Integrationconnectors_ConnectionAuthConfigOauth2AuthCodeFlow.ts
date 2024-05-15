import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlowClientSecret,
  Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlowClientSecret_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlowClientSecret";

export interface Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow {
  // Auth URL for Authorization Code Flow.
  AuthUri?: string;

  // Secret version of Password for Authentication.
  ClientId?: string;

  /*
Secret version reference containing the client secret.
Structure is documented below.
*/
  ClientSecret?: Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlowClientSecret;

  // Whether to enable PKCE when the user performs the auth code flow.
  EnablePkce?: boolean;

  // Scopes the connection will request when the user performs the auth code flow.
  Scopes?: Array<string>;
}

export function Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AuthUri",
      "Auth URL for Authorization Code Flow.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientId",
      "Secret version of Password for Authentication.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ClientSecret",
      "Secret version reference containing the client secret.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigOauth2AuthCodeFlowClientSecret_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnablePkce",
      "Whether to enable PKCE when the user performs the auth code flow.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Scopes",
      "Scopes the connection will request when the user performs the auth code flow.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
