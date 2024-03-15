import { ReservationSpecificReservationInstanceProperties } from "./ReservationSpecificReservationInstanceProperties";

export interface ReservationSpecificReservation {
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
  InstanceProperties?: ReservationSpecificReservationInstanceProperties;
}
