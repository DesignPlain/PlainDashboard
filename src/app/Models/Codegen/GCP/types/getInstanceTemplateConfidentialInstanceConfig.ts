export interface getInstanceTemplateConfidentialInstanceConfig {
  /*
Specifies which confidential computing technology to use.
								This could be one of the following values: SEV, SEV_SNP.
								If SEV_SNP, min_cpu_platform = "AMD Milan" is currently required.
*/
  ConfidentialInstanceType?: string;

  // Defines whether the instance should have confidential compute enabled. `on_host_maintenance` has to be set to TERMINATE or this will fail to create the VM.
  EnableConfidentialCompute?: boolean;
}
