import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfiguration,
  verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfiguration_GetTypes,
} from "./verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfiguration";
import {
  verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfiguration,
  verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfiguration_GetTypes,
} from "./verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfiguration";

export interface verifiedpermissions_IdentitySourceConfiguration {
  // Specifies the configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. See Open ID Connect Configuration below.
  openIdConnectConfiguration?: verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfiguration;

  // Specifies the configuration details of an Amazon Cognito user pool that Verified Permissions can use as a source of authenticated identities as entities. See Cognito User Pool Configuration below.
  cognitoUserPoolConfiguration?: verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfiguration;
}

export function verifiedpermissions_IdentitySourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "openIdConnectConfiguration",
      "Specifies the configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. See Open ID Connect Configuration below.",
      () =>
        verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cognitoUserPoolConfiguration",
      "Specifies the configuration details of an Amazon Cognito user pool that Verified Permissions can use as a source of authenticated identities as entities. See Cognito User Pool Configuration below.",
      () =>
        verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
