import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Notebooks_InstanceReservationAffinity {
  /*
The type of Compute Reservation.
Possible values are: `NO_RESERVATION`, `ANY_RESERVATION`, `SPECIFIC_RESERVATION`.
*/
  ConsumeReservationType?: string;

  // Corresponds to the label key of reservation resource.
  Key?: string;

  // Corresponds to the label values of reservation resource.
  Values?: Array<string>;
}

export function Notebooks_InstanceReservationAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ConsumeReservationType",
      "The type of Compute Reservation.\nPossible values are: `NO_RESERVATION`, `ANY_RESERVATION`, `SPECIFIC_RESERVATION`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Corresponds to the label key of reservation resource.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "Corresponds to the label values of reservation resource.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
