import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodePoolNodeConfigReservationAffinity {
  /*
The type of reservation consumption
Accepted values are:

- `"UNSPECIFIED"`: Default value. This should not be used.
- `"NO_RESERVATION"`: Do not consume from any reserved capacity.
- `"ANY_RESERVATION"`: Consume any reservation available.
- `"SPECIFIC_RESERVATION"`: Must consume from a specific reservation. Must specify key value fields for specifying the reservations.
*/
  ConsumeReservationType?: string;

  // The label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "compute.googleapis.com/reservation-name" as the key and specify the name of your reservation as its value.
  Key?: string;

  // The list of label values of reservation resources. For example: the name of the specific reservation when using a key of "compute.googleapis.com/reservation-name"
  Values?: Array<string>;
}

export function Container_ClusterNodePoolNodeConfigReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ConsumeReservationType",
      'The type of reservation consumption\nAccepted values are:\n\n* `"UNSPECIFIED"`: Default value. This should not be used.\n* `"NO_RESERVATION"`: Do not consume from any reserved capacity.\n* `"ANY_RESERVATION"`: Consume any reservation available.\n* `"SPECIFIC_RESERVATION"`: Must consume from a specific reservation. Must specify key value fields for specifying the reservations.',
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      'The label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "compute.googleapis.com/reservation-name" as the key and specify the name of your reservation as its value.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      'The list of label values of reservation resources. For example: the name of the specific reservation when using a key of "compute.googleapis.com/reservation-name"',
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
