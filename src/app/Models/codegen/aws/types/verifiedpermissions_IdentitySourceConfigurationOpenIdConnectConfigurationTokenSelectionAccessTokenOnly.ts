import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly {
  // The access token aud claim values that you want to accept in your policy store.
  audiences?: Array<string>;

  // The claim that determines the principal in OIDC access tokens.
  principalIdClaim?: string;
}

export function verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'audiences',
      'The access token aud claim values that you want to accept in your policy store.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'principalIdClaim',
      'The claim that determines the principal in OIDC access tokens.',
      () => [],
      false,
      false,
    ),
  ];
}
