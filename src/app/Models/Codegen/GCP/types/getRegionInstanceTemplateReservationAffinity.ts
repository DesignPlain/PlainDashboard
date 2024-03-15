import { getRegionInstanceTemplateReservationAffinitySpecificReservation } from "./getRegionInstanceTemplateReservationAffinitySpecificReservation";

export interface getRegionInstanceTemplateReservationAffinity {
  // Specifies the label selector for the reservation to use.
  SpecificReservations?: Array<getRegionInstanceTemplateReservationAffinitySpecificReservation>;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;
}
