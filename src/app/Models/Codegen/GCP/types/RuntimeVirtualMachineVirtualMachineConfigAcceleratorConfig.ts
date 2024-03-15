export interface RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig {
  // Count of cores of this accelerator.
  CoreCount?: number;

  /*
Accelerator model. For valid values, see
`https://cloud.google.com/vertex-ai/docs/workbench/reference/
rest/v1/projects.locations.runtimes#AcceleratorType`
*/
  Type?: string;
}
