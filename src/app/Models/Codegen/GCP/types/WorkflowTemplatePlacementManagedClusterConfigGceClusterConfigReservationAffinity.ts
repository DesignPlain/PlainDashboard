export interface WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigReservationAffinity {
  // Type of reservation to consume Possible values: TYPE_UNSPECIFIED, NO_RESERVATION, ANY_RESERVATION, SPECIFIC_RESERVATION
  ConsumeReservationType?: string;

  // Corresponds to the label key of reservation resource.
  Key?: string;

  // Corresponds to the label values of reservation resource.
  Values?: Array<string>;
}
