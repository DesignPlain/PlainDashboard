import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface verifiedaccess_TrustProviderOidcOptions {
  //
  clientId?: string;

  //
  clientSecret?: string;

  //
  issuer?: string;

  //
  scope?: string;

  //
  tokenEndpoint?: string;

  //
  userInfoEndpoint?: string;

  //
  authorizationEndpoint?: string;
}

export function verifiedaccess_TrustProviderOidcOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "authorizationEndpoint",
      "",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "clientId", "", [], false, true),
    new DynamicUIProps(InputType.String, "clientSecret", "", [], true, false),
    new DynamicUIProps(InputType.String, "issuer", "", [], false, true),
    new DynamicUIProps(InputType.String, "scope", "", [], false, false),
    new DynamicUIProps(InputType.String, "tokenEndpoint", "", [], false, true),
    new DynamicUIProps(
      InputType.String,
      "userInfoEndpoint",
      "",
      [],
      false,
      true,
    ),
  ];
}
