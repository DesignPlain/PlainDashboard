import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssoadmin_ApplicationPortalOptionsSignInOptions {
  // URL that accepts authentication requests for an application.
  applicationUrl?: string;

  /*
Determines how IAM Identity Center navigates the user to the target application.
Valid values are `APPLICATION` and `IDENTITY_CENTER`.
If `APPLICATION` is set, IAM Identity Center redirects the customer to the configured `application_url`.
If `IDENTITY_CENTER` is set, IAM Identity Center uses SAML identity-provider initiated authentication to sign the customer directly into a SAML-based application.
*/
  origin?: string;
}

export function ssoadmin_ApplicationPortalOptionsSignInOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "applicationUrl",
      "URL that accepts authentication requests for an application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "origin",
      "Determines how IAM Identity Center navigates the user to the target application.\nValid values are `APPLICATION` and `IDENTITY_CENTER`.\nIf `APPLICATION` is set, IAM Identity Center redirects the customer to the configured `application_url`.\nIf `IDENTITY_CENTER` is set, IAM Identity Center uses SAML identity-provider initiated authentication to sign the customer directly into a SAML-based application.",
      [],
      true,
      false,
    ),
  ];
}
