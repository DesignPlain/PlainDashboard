export interface InstanceFromMachineImageShieldedInstanceConfig {
  // Whether the instance uses vTPM.
  EnableVtpm?: boolean;

  // Whether integrity monitoring is enabled for the instance.
  EnableIntegrityMonitoring?: boolean;

  // Whether secure boot is enabled for the instance.
  EnableSecureBoot?: boolean;
}
