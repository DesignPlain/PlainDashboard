import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ReservationSpecificReservationInstanceProperties,
  Compute_ReservationSpecificReservationInstanceProperties_GetTypes,
} from "./Compute_ReservationSpecificReservationInstanceProperties";

export interface Compute_ReservationSpecificReservation {
  // The number of resources that are allocated.
  Count?: number;

  /*
(Output)
How many instances are in use.
*/
  InUseCount?: number;

  /*
The instance properties for the reservation.
Structure is documented below.
*/
  InstanceProperties?: Compute_ReservationSpecificReservationInstanceProperties;
}

export function Compute_ReservationSpecificReservation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "InstanceProperties",
      "The instance properties for the reservation.\nStructure is documented below.",
      Compute_ReservationSpecificReservationInstanceProperties_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of resources that are allocated.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "InUseCount",
      "(Output)\nHow many instances are in use.",
      [],
      false,
      false,
    ),
  ];
}
