import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  identityplatform_ConfigMfaProviderConfig,
  identityplatform_ConfigMfaProviderConfig_GetTypes,
} from './identityplatform_ConfigMfaProviderConfig';

export interface identityplatform_ConfigMfa {
  /*
A list of usable second factors for this project.
Each value may be one of: `PHONE_SMS`.
*/
  enabledProviders?: Array<string>;

  /*
A list of usable second factors for this project along with their configurations.
This field does not support phone based MFA, for that use the 'enabledProviders' field.
Structure is documented below.
*/
  providerConfigs?: Array<identityplatform_ConfigMfaProviderConfig>;

  /*
Whether MultiFactor Authentication has been enabled for this project.
Possible values are: `DISABLED`, `ENABLED`, `MANDATORY`.
*/
  state?: string;
}

export function identityplatform_ConfigMfa_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'enabledProviders',
      'A list of usable second factors for this project.\nEach value may be one of: `PHONE_SMS`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'providerConfigs',
      "A list of usable second factors for this project along with their configurations.\nThis field does not support phone based MFA, for that use the 'enabledProviders' field.\nStructure is documented below.",
      () => identityplatform_ConfigMfaProviderConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      'Whether MultiFactor Authentication has been enabled for this project.\nPossible values are: `DISABLED`, `ENABLED`, `MANDATORY`.',
      () => [],
      false,
      false,
    ),
  ];
}
