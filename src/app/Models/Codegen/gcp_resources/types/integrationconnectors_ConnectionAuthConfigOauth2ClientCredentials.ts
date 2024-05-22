import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret,
  integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret_GetTypes,
} from "./integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret";

export interface integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials {
  // Secret version of Password for Authentication.
  clientId?: string;

  /*
Secret version reference containing the client secret.
Structure is documented below.
*/
  clientSecret?: integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret;
}

export function integrationconnectors_ConnectionAuthConfigOauth2ClientCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "Secret version of Password for Authentication.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "clientSecret",
      "Secret version reference containing the client secret.\nStructure is documented below.",
      integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret_GetTypes(),
      false,
      false,
    ),
  ];
}
