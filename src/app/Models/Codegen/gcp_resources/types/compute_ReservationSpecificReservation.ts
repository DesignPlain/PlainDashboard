import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_ReservationSpecificReservationInstanceProperties,
  compute_ReservationSpecificReservationInstanceProperties_GetTypes,
} from "./compute_ReservationSpecificReservationInstanceProperties";

export interface compute_ReservationSpecificReservation {
  /*
The instance properties for the reservation.
Structure is documented below.
*/
  instanceProperties?: compute_ReservationSpecificReservationInstanceProperties;

  // The number of resources that are allocated.
  count?: number;

  /*
(Output)
How many instances are in use.
*/
  inUseCount?: number;
}

export function compute_ReservationSpecificReservation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "instanceProperties",
      "The instance properties for the reservation.\nStructure is documented below.",
      compute_ReservationSpecificReservationInstanceProperties_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of resources that are allocated.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "inUseCount",
      "(Output)\nHow many instances are in use.",
      [],
      false,
      false,
    ),
  ];
}
