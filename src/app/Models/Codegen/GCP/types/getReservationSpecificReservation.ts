import { getReservationSpecificReservationInstanceProperty } from "./getReservationSpecificReservationInstanceProperty";

export interface getReservationSpecificReservation {
  // The number of resources that are allocated.
  Count?: number;

  // How many instances are in use.
  InUseCount?: number;

  // The instance properties for the reservation.
  InstanceProperties?: Array<getReservationSpecificReservationInstanceProperty>;
}
