export interface WorkstationConfigHostGceInstanceShieldedInstanceConfig {
  // Whether the instance has integrity monitoring enabled.
  EnableIntegrityMonitoring?: boolean;

  // Whether the instance has Secure Boot enabled.
  EnableSecureBoot?: boolean;

  // Whether the instance has the vTPM enabled.
  EnableVtpm?: boolean;
}
