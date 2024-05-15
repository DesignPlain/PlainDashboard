import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig,
  Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig_GetTypes,
} from "./Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig";
import {
  Integrationconnectors_ConnectionEventingConfigAdditionalVariable,
  Integrationconnectors_ConnectionEventingConfigAdditionalVariable_GetTypes,
} from "./Integrationconnectors_ConnectionEventingConfigAdditionalVariable";
import {
  Integrationconnectors_ConnectionEventingConfigAuthConfig,
  Integrationconnectors_ConnectionEventingConfigAuthConfig_GetTypes,
} from "./Integrationconnectors_ConnectionEventingConfigAuthConfig";

export interface Integrationconnectors_ConnectionEventingConfig {
  /*
List containing additional auth configs.
Structure is documented below.
*/
  AdditionalVariables?: Array<Integrationconnectors_ConnectionEventingConfigAdditionalVariable>;

  /*
authConfig for Eventing Configuration.
Structure is documented below.
*/
  AuthConfig?: Integrationconnectors_ConnectionEventingConfigAuthConfig;

  // Enrichment Enabled.
  EnrichmentEnabled?: boolean;

  /*
registrationDestinationConfig
Structure is documented below.
*/
  RegistrationDestinationConfig?: Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig;
}

export function Integrationconnectors_ConnectionEventingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AdditionalVariables",
      "List containing additional auth configs.\nStructure is documented below.",
      Integrationconnectors_ConnectionEventingConfigAdditionalVariable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AuthConfig",
      "authConfig for Eventing Configuration.\nStructure is documented below.",
      Integrationconnectors_ConnectionEventingConfigAuthConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnrichmentEnabled",
      "Enrichment Enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RegistrationDestinationConfig",
      "registrationDestinationConfig\nStructure is documented below.",
      Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
