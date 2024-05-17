import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_AddonsConfigAddonsConfigIntegrationConfig,
  Apigee_AddonsConfigAddonsConfigIntegrationConfig_GetTypes,
} from "./Apigee_AddonsConfigAddonsConfigIntegrationConfig";
import {
  Apigee_AddonsConfigAddonsConfigMonetizationConfig,
  Apigee_AddonsConfigAddonsConfigMonetizationConfig_GetTypes,
} from "./Apigee_AddonsConfigAddonsConfigMonetizationConfig";
import {
  Apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig,
  Apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig_GetTypes,
} from "./Apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig";
import {
  Apigee_AddonsConfigAddonsConfigApiSecurityConfig,
  Apigee_AddonsConfigAddonsConfigApiSecurityConfig_GetTypes,
} from "./Apigee_AddonsConfigAddonsConfigApiSecurityConfig";
import {
  Apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig,
  Apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig_GetTypes,
} from "./Apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig";

export interface Apigee_AddonsConfigAddonsConfig {
  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  IntegrationConfig?: Apigee_AddonsConfigAddonsConfigIntegrationConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  MonetizationConfig?: Apigee_AddonsConfigAddonsConfigMonetizationConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  AdvancedApiOpsConfig?: Apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  ApiSecurityConfig?: Apigee_AddonsConfigAddonsConfigApiSecurityConfig;

  /*
Configuration for the Monetization add-on.
Structure is documented below.
*/
  ConnectorsPlatformConfig?: Apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig;
}

export function Apigee_AddonsConfigAddonsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "MonetizationConfig",
      "Configuration for the Monetization add-on.\nStructure is documented below.",
      Apigee_AddonsConfigAddonsConfigMonetizationConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AdvancedApiOpsConfig",
      "Configuration for the Monetization add-on.\nStructure is documented below.",
      Apigee_AddonsConfigAddonsConfigAdvancedApiOpsConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ApiSecurityConfig",
      "Configuration for the Monetization add-on.\nStructure is documented below.",
      Apigee_AddonsConfigAddonsConfigApiSecurityConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConnectorsPlatformConfig",
      "Configuration for the Monetization add-on.\nStructure is documented below.",
      Apigee_AddonsConfigAddonsConfigConnectorsPlatformConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IntegrationConfig",
      "Configuration for the Monetization add-on.\nStructure is documented below.",
      Apigee_AddonsConfigAddonsConfigIntegrationConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
