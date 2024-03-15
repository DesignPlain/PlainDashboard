export interface WorkflowTemplatePlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig {
  // Defines whether instances have [Integrity Monitoring](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#integrity-monitoring) enabled.
  EnableIntegrityMonitoring?: boolean;

  // Defines whether instances have [Secure Boot](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#secure-boot) enabled.
  EnableSecureBoot?: boolean;

  // Defines whether instances have the [vTPM](https://cloud.google.com/compute/shielded-vm/docs/shielded-vm#vtpm) enabled.
  EnableVtpm?: boolean;
}
