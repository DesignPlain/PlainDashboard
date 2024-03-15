import { getInstanceTemplateReservationAffinitySpecificReservation } from "./getInstanceTemplateReservationAffinitySpecificReservation";

export interface getInstanceTemplateReservationAffinity {
  // Specifies the label selector for the reservation to use.
  SpecificReservations?: Array<getInstanceTemplateReservationAffinitySpecificReservation>;

  // The accelerator type resource to expose to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;
}
