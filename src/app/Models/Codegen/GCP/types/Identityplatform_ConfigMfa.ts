import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ConfigMfaProviderConfig,
  Identityplatform_ConfigMfaProviderConfig_GetTypes,
} from "./Identityplatform_ConfigMfaProviderConfig";

export interface Identityplatform_ConfigMfa {
  /*
A list of usable second factors for this project.
Each value may be one of: `PHONE_SMS`.
*/
  EnabledProviders?: Array<string>;

  /*
A list of usable second factors for this project along with their configurations.
This field does not support phone based MFA, for that use the 'enabledProviders' field.
Structure is documented below.
*/
  ProviderConfigs?: Array<Identityplatform_ConfigMfaProviderConfig>;

  /*
Whether MultiFactor Authentication has been enabled for this project.
Possible values are: `DISABLED`, `ENABLED`, `MANDATORY`.
*/
  State?: string;
}

export function Identityplatform_ConfigMfa_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "EnabledProviders",
      "A list of usable second factors for this project.\nEach value may be one of: `PHONE_SMS`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ProviderConfigs",
      "A list of usable second factors for this project along with their configurations.\nThis field does not support phone based MFA, for that use the 'enabledProviders' field.\nStructure is documented below.",
      Identityplatform_ConfigMfaProviderConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "Whether MultiFactor Authentication has been enabled for this project.\nPossible values are: `DISABLED`, `ENABLED`, `MANDATORY`.",
      [],
      false,
      false,
    ),
  ];
}
