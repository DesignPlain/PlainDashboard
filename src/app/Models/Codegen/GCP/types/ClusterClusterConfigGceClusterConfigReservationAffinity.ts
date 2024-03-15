export interface ClusterClusterConfigGceClusterConfigReservationAffinity {
  // Corresponds to the type of reservation consumption.
  ConsumeReservationType?: string;

  // Corresponds to the label key of reservation resource.
  Key?: string;

  // Corresponds to the label values of reservation resource.
  Values?: Array<string>;
}
