import { InstanceReservationAffinitySpecificReservation } from "./InstanceReservationAffinitySpecificReservation";

export interface InstanceReservationAffinity {
  /*
Specifies the label selector for the reservation to use..
Structure is documented below.
*/
  SpecificReservation?: InstanceReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  Type?: string;
}
