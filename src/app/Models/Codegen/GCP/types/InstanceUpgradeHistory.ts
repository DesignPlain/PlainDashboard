export interface InstanceUpgradeHistory {
  // Optional. Action. Rolloback or Upgrade.
  Action?: string;

  /*
(Output)
Output only. The state of this instance upgrade history entry.
*/
  State?: string;

  // Optional. Target VM Version, like m63.
  TargetVersion?: string;

  // Optional. The version of the workbench instance before this upgrade.
  Version?: string;

  /*
Use a container image to start the workbench instance.
Structure is documented below.
*/
  ContainerImage?: string;

  /*
An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ.
The milliseconds portion (".SSS") is optional.
*/
  CreateTime?: string;

  // Optional. The framework of this workbench instance.
  Framework?: string;

  // Optional. The snapshot of the boot disk of this workbench instance before upgrade.
  Snapshot?: string;

  /*
Definition of a custom Compute Engine virtual machine image for starting
a workbench instance with the environment installed directly on the VM.
Structure is documented below.
*/
  VmImage?: string;
}
