import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apigee_AddonsConfigAddonsConfigMonetizationConfig,
  apigee_AddonsConfigAddonsConfigMonetizationConfig_GetTypes,
} from "./apigee_AddonsConfigAddonsConfigMonetizationConfig";
import {
  apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig,
  apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig_GetTypes,
} from "./apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig";
import {
  apigee_AddonsConfigAddonsConfigApiSecurityConfig,
  apigee_AddonsConfigAddonsConfigApiSecurityConfig_GetTypes,
} from "./apigee_AddonsConfigAddonsConfigApiSecurityConfig";
import {
  apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig,
  apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig_GetTypes,
} from "./apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig";
import {
  apigee_AddonsConfigAddonsConfigIntegrationConfig,
  apigee_AddonsConfigAddonsConfigIntegrationConfig_GetTypes,
} from "./apigee_AddonsConfigAddonsConfigIntegrationConfig";

export interface apigee_AddonsConfigAddonsConfig {
  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  connectorsPlatformConfig?: apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  integrationConfig?: apigee_AddonsConfigAddonsConfigIntegrationConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  monetizationConfig?: apigee_AddonsConfigAddonsConfigMonetizationConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  advancedApiOpsConfig?: apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  apiSecurityConfig?: apigee_AddonsConfigAddonsConfigApiSecurityConfig;
}

export function apigee_AddonsConfigAddonsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "connectorsPlatformConfig",
      "Configuration for the Monetization add-on.\nStructure is documented below.",
      apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "integrationConfig",
      "Configuration for the Monetization add-on.\nStructure is documented below.",
      apigee_AddonsConfigAddonsConfigIntegrationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "monetizationConfig",
      "Configuration for the Monetization add-on.\nStructure is documented below.",
      apigee_AddonsConfigAddonsConfigMonetizationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advancedApiOpsConfig",
      "Configuration for the Monetization add-on.\nStructure is documented below.",
      apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "apiSecurityConfig",
      "Configuration for the Monetization add-on.\nStructure is documented below.",
      apigee_AddonsConfigAddonsConfigApiSecurityConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
