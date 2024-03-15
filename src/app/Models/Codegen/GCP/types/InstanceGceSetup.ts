import { InstanceGceSetupServiceAccount } from "./InstanceGceSetupServiceAccount";
import { InstanceGceSetupShieldedInstanceConfig } from "./InstanceGceSetupShieldedInstanceConfig";
import { InstanceGceSetupAcceleratorConfig } from "./InstanceGceSetupAcceleratorConfig";
import { InstanceGceSetupDataDisks } from "./InstanceGceSetupDataDisks";
import { InstanceGceSetupVmImage } from "./InstanceGceSetupVmImage";
import { InstanceGceSetupBootDisk } from "./InstanceGceSetupBootDisk";
import { InstanceGceSetupContainerImage } from "./InstanceGceSetupContainerImage";
import { InstanceGceSetupNetworkInterface } from "./InstanceGceSetupNetworkInterface";

export interface InstanceGceSetup {
  /*
The hardware accelerators used on this instance. If you use accelerators, make sure that your configuration has
[enough vCPUs and memory to support the `machine_type` you have selected](https://cloud.google.com/compute/docs/gpus/#gpus-list).
Currently supports only one accelerator configuration.
Structure is documented below.
*/
  AcceleratorConfigs?: Array<InstanceGceSetupAcceleratorConfig>;

  /*
Data disks attached to the VM instance. Currently supports only one data disk.
Structure is documented below.
*/
  DataDisks?: InstanceGceSetupDataDisks;

  /*
Optional. Flag to enable ip forwarding or not, default false/off.
https://cloud.google.com/vpc/docs/using-routes#canipforward
*/
  EnableIpForwarding?: boolean;

  // Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource
  MachineType?: string;

  /*
Definition of a custom Compute Engine virtual machine image for starting
a workbench instance with the environment installed directly on the VM.
Structure is documented below.
*/
  VmImage?: InstanceGceSetupVmImage;

  /*
The definition of a boot disk.
Structure is documented below.
*/
  BootDisk?: InstanceGceSetupBootDisk;

  /*
Use a container image to start the workbench instance.
Structure is documented below.
*/
  ContainerImage?: InstanceGceSetupContainerImage;

  // Optional. If true, no external IP will be assigned to this VM instance.
  DisablePublicIp?: boolean;

  // Optional. Custom metadata to apply to this instance.
  Metadata?: Map<string, string>;

  /*
The network interfaces for the VM. Supports only one interface.
Structure is documented below.
*/
  NetworkInterfaces?: Array<InstanceGceSetupNetworkInterface>;

  /*
The service account that serves as an identity for the VM instance. Currently supports only one service account.
Structure is documented below.
*/
  ServiceAccounts?: Array<InstanceGceSetupServiceAccount>;

  /*
A set of Shielded Instance options. See [Images using supported Shielded
VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm).
Not all combinations are valid.
Structure is documented below.
*/
  ShieldedInstanceConfig?: InstanceGceSetupShieldedInstanceConfig;

  /*
Optional. The Compute Engine tags to add to instance (see [Tagging
instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
*/
  Tags?: Array<string>;
}
