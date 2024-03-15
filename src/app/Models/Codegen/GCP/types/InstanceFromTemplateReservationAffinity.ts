import { InstanceFromTemplateReservationAffinitySpecificReservation } from "./InstanceFromTemplateReservationAffinitySpecificReservation";

export interface InstanceFromTemplateReservationAffinity {
  // Specifies the label selector for the reservation to use.
  SpecificReservation?: InstanceFromTemplateReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  Type?: string;
}
