import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig,
  integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig_GetTypes,
} from "./integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig";
import {
  integrationconnectors_ConnectionEventingConfigAdditionalVariable,
  integrationconnectors_ConnectionEventingConfigAdditionalVariable_GetTypes,
} from "./integrationconnectors_ConnectionEventingConfigAdditionalVariable";
import {
  integrationconnectors_ConnectionEventingConfigAuthConfig,
  integrationconnectors_ConnectionEventingConfigAuthConfig_GetTypes,
} from "./integrationconnectors_ConnectionEventingConfigAuthConfig";

export interface integrationconnectors_ConnectionEventingConfig {
  // Enrichment Enabled.
  enrichmentEnabled?: boolean;

  /*
registrationDestinationConfig
Structure is documented below.
*/
  registrationDestinationConfig?: integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig;

  /*
List containing additional auth configs.
Structure is documented below.
*/
  additionalVariables?: Array<integrationconnectors_ConnectionEventingConfigAdditionalVariable>;

  /*
authConfig for Eventing Configuration.
Structure is documented below.
*/
  authConfig?: integrationconnectors_ConnectionEventingConfigAuthConfig;
}

export function integrationconnectors_ConnectionEventingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "authConfig",
      "authConfig for Eventing Configuration.\nStructure is documented below.",
      integrationconnectors_ConnectionEventingConfigAuthConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enrichmentEnabled",
      "Enrichment Enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "registrationDestinationConfig",
      "registrationDestinationConfig\nStructure is documented below.",
      integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalVariables",
      "List containing additional auth configs.\nStructure is documented below.",
      integrationconnectors_ConnectionEventingConfigAdditionalVariable_GetTypes(),
      false,
      false,
    ),
  ];
}
