import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sesv2_ConfigurationSetEventDestinationEventDestination,
  sesv2_ConfigurationSetEventDestinationEventDestination_GetTypes,
} from "../types/sesv2_ConfigurationSetEventDestinationEventDestination";

export interface ConfigurationSetEventDestinationArgs {
  // A name that identifies the event destination within the configuration set.
  eventDestination?: sesv2_ConfigurationSetEventDestinationEventDestination;

  // An object that defines the event destination. See event_destination below.
  eventDestinationName?: string;

  // The name of the configuration set.
  configurationSetName?: string;
}
export class ConfigurationSetEventDestination extends Resource {
  // The name of the configuration set.
  public configurationSetName?: string;

  // A name that identifies the event destination within the configuration set.
  public eventDestination?: sesv2_ConfigurationSetEventDestinationEventDestination;

  // An object that defines the event destination. See event_destination below.
  public eventDestinationName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "eventDestination",
        "A name that identifies the event destination within the configuration set.",
        sesv2_ConfigurationSetEventDestinationEventDestination_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "eventDestinationName",
        "An object that defines the event destination. See event_destination below.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "configurationSetName",
        "The name of the configuration set.",
        [],
        true,
        true,
      ),
    ];
  }
}
