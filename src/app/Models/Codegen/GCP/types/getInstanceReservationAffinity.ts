import { getInstanceReservationAffinitySpecificReservation } from "./getInstanceReservationAffinitySpecificReservation";

export interface getInstanceReservationAffinity {
  // Specifies the label selector for the reservation to use.
  SpecificReservations?: Array<getInstanceReservationAffinitySpecificReservation>;

  // The accelerator type resource exposed to this instance. E.g. `nvidia-tesla-k80`.
  Type?: string;
}
