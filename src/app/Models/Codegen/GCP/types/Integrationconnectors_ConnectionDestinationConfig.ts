import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionDestinationConfigDestination,
  Integrationconnectors_ConnectionDestinationConfigDestination_GetTypes,
} from "./Integrationconnectors_ConnectionDestinationConfigDestination";

export interface Integrationconnectors_ConnectionDestinationConfig {
  /*
The destinations for the key.
Structure is documented below.
*/
  Destinations?: Array<Integrationconnectors_ConnectionDestinationConfigDestination>;

  // The key is the destination identifier that is supported by the Connector.
  Key?: string;
}

export function Integrationconnectors_ConnectionDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Destinations",
      "The destinations for the key.\nStructure is documented below.",
      Integrationconnectors_ConnectionDestinationConfigDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "The key is the destination identifier that is supported by the Connector.",
      [],
      true,
      false,
    ),
  ];
}
