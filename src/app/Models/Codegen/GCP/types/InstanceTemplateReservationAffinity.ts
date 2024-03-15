import { InstanceTemplateReservationAffinitySpecificReservation } from "./InstanceTemplateReservationAffinitySpecificReservation";

export interface InstanceTemplateReservationAffinity {
  /*
Specifies the label selector for the reservation to use..
Structure is documented below.
*/
  SpecificReservation?: InstanceTemplateReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  Type?: string;
}
