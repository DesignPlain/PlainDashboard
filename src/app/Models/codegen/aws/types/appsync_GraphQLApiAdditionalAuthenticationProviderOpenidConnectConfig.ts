import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig {
  // Number of milliseconds a token is valid after being authenticated.
  authTtl?: number;

  // Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
  clientId?: string;

  // Number of milliseconds a token is valid after being issued to a user.
  iatTtl?: number;

  // Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
  issuer?: string;
}

export function appsync_GraphQLApiAdditionalAuthenticationProviderOpenidConnectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "authTtl",
      "Number of milliseconds a token is valid after being authenticated.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iatTtl",
      "Number of milliseconds a token is valid after being issued to a user.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuer",
      "Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.",
      () => [],
      true,
      false,
    ),
  ];
}
