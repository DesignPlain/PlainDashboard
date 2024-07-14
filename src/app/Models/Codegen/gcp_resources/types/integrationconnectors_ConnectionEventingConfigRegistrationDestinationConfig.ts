import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination,
  integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination_GetTypes,
} from "./integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination";

export interface integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig {
  /*
destinations for the connection
Structure is documented below.
*/
  destinations?: Array<integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination>;

  // Key for the connection
  key?: string;
}

export function integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      "destinations for the connection\nStructure is documented below.",
      integrationconnectors_ConnectionEventingConfigRegistrationDestinationConfigDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for the connection",
      [],
      false,
      false,
    ),
  ];
}
