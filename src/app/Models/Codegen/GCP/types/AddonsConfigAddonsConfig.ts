import { AddonsConfigAddonsConfigApiSecurityConfig } from "./AddonsConfigAddonsConfigApiSecurityConfig";
import { AddonsConfigAddonsConfigConnectorsPlatformConfig } from "./AddonsConfigAddonsConfigConnectorsPlatformConfig";
import { AddonsConfigAddonsConfigIntegrationConfig } from "./AddonsConfigAddonsConfigIntegrationConfig";
import { AddonsConfigAddonsConfigMonetizationConfig } from "./AddonsConfigAddonsConfigMonetizationConfig";
import { AddonsConfigAddonsConfigAdvancedApiOpsConfig } from "./AddonsConfigAddonsConfigAdvancedApiOpsConfig";

export interface AddonsConfigAddonsConfig {
  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  IntegrationConfig?: AddonsConfigAddonsConfigIntegrationConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  MonetizationConfig?: AddonsConfigAddonsConfigMonetizationConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  AdvancedApiOpsConfig?: AddonsConfigAddonsConfigAdvancedApiOpsConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  ApiSecurityConfig?: AddonsConfigAddonsConfigApiSecurityConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  ConnectorsPlatformConfig?: AddonsConfigAddonsConfigConnectorsPlatformConfig;
}
