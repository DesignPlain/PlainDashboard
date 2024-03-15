import { ConnectionEventingConfigAdditionalVariable } from "./ConnectionEventingConfigAdditionalVariable";
import { ConnectionEventingConfigAuthConfig } from "./ConnectionEventingConfigAuthConfig";
import { ConnectionEventingConfigRegistrationDestinationConfig } from "./ConnectionEventingConfigRegistrationDestinationConfig";

export interface ConnectionEventingConfig {
  /*
List containing additional auth configs.
Structure is documented below.
*/
  AdditionalVariables?: Array<ConnectionEventingConfigAdditionalVariable>;

  /*
authConfig for Eventing Configuration.
Structure is documented below.
*/
  AuthConfig?: ConnectionEventingConfigAuthConfig;

  // Enrichment Enabled.
  EnrichmentEnabled?: boolean;

  /*
registrationDestinationConfig
Structure is documented below.
*/
  RegistrationDestinationConfig?: ConnectionEventingConfigRegistrationDestinationConfig;
}
