import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination,
  Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination_GetTypes,
} from "./Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination";

export interface Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig {
  /*
destinations for the connection
Structure is documented below.
*/
  Destinations?: Array<Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination>;

  // Key for the connection
  Key?: string;
}

export function Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Destinations",
      "destinations for the connection\nStructure is documented below.",
      Integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Key for the connection",
      [],
      false,
      false,
    ),
  ];
}
