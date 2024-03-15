export interface ClusterClusterConfigGceClusterConfigShieldedInstanceConfig {
  /*
Defines whether instances have integrity monitoring enabled.

- - -
*/
  EnableIntegrityMonitoring?: boolean;

  // Defines whether instances have Secure Boot enabled.
  EnableSecureBoot?: boolean;

  // Defines whether instances have the [vTPM](https://cloud.google.com/security/shielded-cloud/shielded-vm#vtpm) enabled.
  EnableVtpm?: boolean;
}
