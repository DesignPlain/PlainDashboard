import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ConfigMfaProviderConfigTotpProviderConfig,
  Identityplatform_ConfigMfaProviderConfigTotpProviderConfig_GetTypes,
} from "./Identityplatform_ConfigMfaProviderConfigTotpProviderConfig";

export interface Identityplatform_ConfigMfaProviderConfig {
  /*
Whether MultiFactor Authentication has been enabled for this project.
Possible values are: `DISABLED`, `ENABLED`, `MANDATORY`.
*/
  State?: string;

  /*
TOTP MFA provider config for this project.
Structure is documented below.
*/
  TotpProviderConfig?: Identityplatform_ConfigMfaProviderConfigTotpProviderConfig;
}

export function Identityplatform_ConfigMfaProviderConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      "Whether MultiFactor Authentication has been enabled for this project.\nPossible values are: `DISABLED`, `ENABLED`, `MANDATORY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TotpProviderConfig",
      "TOTP MFA provider config for this project.\nStructure is documented below.",
      Identityplatform_ConfigMfaProviderConfigTotpProviderConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
