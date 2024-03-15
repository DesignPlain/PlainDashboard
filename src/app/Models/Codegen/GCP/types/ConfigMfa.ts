import { ConfigMfaProviderConfig } from "./ConfigMfaProviderConfig";

export interface ConfigMfa {
  /*
Whether MultiFactor Authentication has been enabled for this project.
Possible values are: `DISABLED`, `ENABLED`, `MANDATORY`.
*/
  State?: string;

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
  ProviderConfigs?: Array<ConfigMfaProviderConfig>;
}
