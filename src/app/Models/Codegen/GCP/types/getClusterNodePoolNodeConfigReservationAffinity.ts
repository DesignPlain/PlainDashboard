export interface getClusterNodePoolNodeConfigReservationAffinity {
  // Corresponds to the type of reservation consumption.
  ConsumeReservationType?: string;

  // The label key of a reservation resource.
  Key?: string;

  // The label values of the reservation resource.
  Values?: Array<string>;
}
