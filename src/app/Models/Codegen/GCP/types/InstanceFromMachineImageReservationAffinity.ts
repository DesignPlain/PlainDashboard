import { InstanceFromMachineImageReservationAffinitySpecificReservation } from "./InstanceFromMachineImageReservationAffinitySpecificReservation";

export interface InstanceFromMachineImageReservationAffinity {
  // Specifies the label selector for the reservation to use.
  SpecificReservation?: InstanceFromMachineImageReservationAffinitySpecificReservation;

  // The type of reservation from which this instance can consume resources.
  Type?: string;
}
