import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly {
  // The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider.
  clientIds?: Array<string>;

  // The claim that determines the principal in OIDC access tokens.
  principalIdClaim?: string;
}

export function verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "clientIds",
      "The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "principalIdClaim",
      "The claim that determines the principal in OIDC access tokens.",
      () => [],
      false,
      false,
    ),
  ];
}
