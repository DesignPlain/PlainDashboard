import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret,
  Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret_GetTypes,
} from "./Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret";

export interface Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials {
  // Secret version of Password for Authentication.
  ClientId?: string;

  /*
Secret version reference containing the client secret.
Structure is documented below.
*/
  ClientSecret?: Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret;
}

export function Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClientId",
      "Secret version of Password for Authentication.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ClientSecret",
      "Secret version reference containing the client secret.\nStructure is documented below.",
      Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret_GetTypes(),
      false,
      false,
    ),
  ];
}
