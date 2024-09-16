import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sesv2_ConfigurationSetEventDestinationEventDestination,
  sesv2_ConfigurationSetEventDestinationEventDestination_GetTypes,
} from '../types/sesv2_ConfigurationSetEventDestinationEventDestination';

export interface ConfigurationSetEventDestinationArgs {
  // The name of the configuration set.
  configurationSetName?: string;

  // A name that identifies the event destination within the configuration set.
  eventDestination?: sesv2_ConfigurationSetEventDestinationEventDestination;

  // An object that defines the event destination. See `event_destination` Block for details.
  eventDestinationName?: string;
}
export class ConfigurationSetEventDestination extends DS_Resource {
  // The name of the configuration set.
  public configurationSetName?: string;

  // A name that identifies the event destination within the configuration set.
  public eventDestination?: sesv2_ConfigurationSetEventDestinationEventDestination;

  // An object that defines the event destination. See `event_destination` Block for details.
  public eventDestinationName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'configurationSetName',
        'The name of the configuration set.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'eventDestination',
        'A name that identifies the event destination within the configuration set.',
        () => sesv2_ConfigurationSetEventDestinationEventDestination_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'eventDestinationName',
        'An object that defines the event destination. See `event_destination` Block for details.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
