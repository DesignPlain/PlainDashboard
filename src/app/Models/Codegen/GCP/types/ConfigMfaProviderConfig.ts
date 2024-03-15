import { ConfigMfaProviderConfigTotpProviderConfig } from "./ConfigMfaProviderConfigTotpProviderConfig";

export interface ConfigMfaProviderConfig {
  /*
Whether MultiFactor Authentication has been enabled for this project.
Possible values are: `DISABLED`, `ENABLED`, `MANDATORY`.
*/
  State?: string;

  /*
TOTP MFA provider config for this project.
Structure is documented below.
*/
  TotpProviderConfig?: ConfigMfaProviderConfigTotpProviderConfig;
}
