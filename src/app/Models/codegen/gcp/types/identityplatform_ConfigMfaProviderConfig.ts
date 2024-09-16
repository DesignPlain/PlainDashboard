import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  identityplatform_ConfigMfaProviderConfigTotpProviderConfig,
  identityplatform_ConfigMfaProviderConfigTotpProviderConfig_GetTypes,
} from './identityplatform_ConfigMfaProviderConfigTotpProviderConfig';

export interface identityplatform_ConfigMfaProviderConfig {
  /*
Whether MultiFactor Authentication has been enabled for this project.
Possible values are: `DISABLED`, `ENABLED`, `MANDATORY`.
*/
  state?: string;

  /*
TOTP MFA provider config for this project.
Structure is documented below.
*/
  totpProviderConfig?: identityplatform_ConfigMfaProviderConfigTotpProviderConfig;
}

export function identityplatform_ConfigMfaProviderConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'state',
      'Whether MultiFactor Authentication has been enabled for this project.\nPossible values are: `DISABLED`, `ENABLED`, `MANDATORY`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'totpProviderConfig',
      'TOTP MFA provider config for this project.\nStructure is documented below.',
      () =>
        identityplatform_ConfigMfaProviderConfigTotpProviderConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
