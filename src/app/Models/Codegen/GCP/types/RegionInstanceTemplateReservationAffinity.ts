import { RegionInstanceTemplateReservationAffinitySpecificReservation } from "./RegionInstanceTemplateReservationAffinitySpecificReservation";

export interface RegionInstanceTemplateReservationAffinity {
  /*
Specifies the label selector for the reservation to use..
Structure is documented below.
*/
  SpecificReservation?: RegionInstanceTemplateReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  Type?: string;
}
