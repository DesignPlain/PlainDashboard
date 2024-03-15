export interface ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList {
  // Full machine-type names, e.g. `"n1-standard-16"`.
  MachineTypes?: Array<string>;

  /*
Preference of this instance selection. A lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference.

- - -
*/
  Rank?: number;
}
