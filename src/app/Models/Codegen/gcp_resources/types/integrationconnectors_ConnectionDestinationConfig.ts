import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  integrationconnectors_ConnectionDestinationConfigDestination,
  integrationconnectors_ConnectionDestinationConfigDestination_GetTypes,
} from "./integrationconnectors_ConnectionDestinationConfigDestination";

export interface integrationconnectors_ConnectionDestinationConfig {
  /*
The destinations for the key.
Structure is documented below.
*/
  destinations?: Array<integrationconnectors_ConnectionDestinationConfigDestination>;

  // The key is the destination identifier that is supported by the Connector.
  key?: string;
}

export function integrationconnectors_ConnectionDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      "The destinations for the key.\nStructure is documented below.",
      integrationconnectors_ConnectionDestinationConfigDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key is the destination identifier that is supported by the Connector.",
      [],
      true,
      false,
    ),
  ];
}
