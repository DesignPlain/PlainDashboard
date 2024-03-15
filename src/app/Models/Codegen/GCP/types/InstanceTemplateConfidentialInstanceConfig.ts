export interface InstanceTemplateConfidentialInstanceConfig {
  // Defines the confidential computing technology the instance uses. SEV is an AMD feature. One of the following values: `SEV`, `SEV_SNP`. `on_host_maintenance` has to be set to TERMINATE or this will fail to create the VM. If `SEV_SNP`, currently `min_cpu_platform` has to be set to `"AMD Milan"` or this will fail to create the VM.
  ConfidentialInstanceType?: string;

  // Defines whether the instance should have confidential compute enabled with AMD SEV. `on_host_maintenance` has to be set to TERMINATE or this will fail to create the VM.
  EnableConfidentialCompute?: boolean;
}
