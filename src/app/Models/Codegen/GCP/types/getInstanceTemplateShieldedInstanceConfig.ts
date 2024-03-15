export interface getInstanceTemplateShieldedInstanceConfig {
  // - Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. Defaults to true.
  EnableIntegrityMonitoring?: boolean;

  // - Verify the digital signature of all boot components, and halt the boot process if signature verification fails. Defaults to false.
  EnableSecureBoot?: boolean;

  // - Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. Defaults to true.
  EnableVtpm?: boolean;
}
