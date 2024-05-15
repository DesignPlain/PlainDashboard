import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Workbench_InstanceGceSetupBootDisk,
  Workbench_InstanceGceSetupBootDisk_GetTypes,
} from "./Workbench_InstanceGceSetupBootDisk";
import {
  Workbench_InstanceGceSetupContainerImage,
  Workbench_InstanceGceSetupContainerImage_GetTypes,
} from "./Workbench_InstanceGceSetupContainerImage";
import {
  Workbench_InstanceGceSetupVmImage,
  Workbench_InstanceGceSetupVmImage_GetTypes,
} from "./Workbench_InstanceGceSetupVmImage";
import {
  Workbench_InstanceGceSetupAcceleratorConfig,
  Workbench_InstanceGceSetupAcceleratorConfig_GetTypes,
} from "./Workbench_InstanceGceSetupAcceleratorConfig";
import {
  Workbench_InstanceGceSetupNetworkInterface,
  Workbench_InstanceGceSetupNetworkInterface_GetTypes,
} from "./Workbench_InstanceGceSetupNetworkInterface";
import {
  Workbench_InstanceGceSetupServiceAccount,
  Workbench_InstanceGceSetupServiceAccount_GetTypes,
} from "./Workbench_InstanceGceSetupServiceAccount";
import {
  Workbench_InstanceGceSetupShieldedInstanceConfig,
  Workbench_InstanceGceSetupShieldedInstanceConfig_GetTypes,
} from "./Workbench_InstanceGceSetupShieldedInstanceConfig";
import {
  Workbench_InstanceGceSetupDataDisks,
  Workbench_InstanceGceSetupDataDisks_GetTypes,
} from "./Workbench_InstanceGceSetupDataDisks";

export interface Workbench_InstanceGceSetup {
  /*
Optional. Flag to enable ip forwarding or not, default false/off.
https://cloud.google.com/vpc/docs/using-routes#canipforward
*/
  EnableIpForwarding?: boolean;

  // Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource
  MachineType?: string;

  /*
The network interfaces for the VM. Supports only one interface.
Structure is documented below.
*/
  NetworkInterfaces?: Array<Workbench_InstanceGceSetupNetworkInterface>;

  /*
The service account that serves as an identity for the VM instance. Currently supports only one service account.
Structure is documented below.
*/
  ServiceAccounts?: Array<Workbench_InstanceGceSetupServiceAccount>;

  /*
A set of Shielded Instance options. See [Images using supported Shielded
VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm).
Not all combinations are valid.
Structure is documented below.
*/
  ShieldedInstanceConfig?: Workbench_InstanceGceSetupShieldedInstanceConfig;

  /*
Optional. The Compute Engine tags to add to instance (see [Tagging
instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
*/
  Tags?: Array<string>;

  /*
Data disks attached to the VM instance. Currently supports only one data disk.
Structure is documented below.
*/
  DataDisks?: Workbench_InstanceGceSetupDataDisks;

  /*
The definition of a boot disk.
Structure is documented below.
*/
  BootDisk?: Workbench_InstanceGceSetupBootDisk;

  /*
Use a container image to start the workbench instance.
Structure is documented below.
*/
  ContainerImage?: Workbench_InstanceGceSetupContainerImage;

  // Optional. If true, no external IP will be assigned to this VM instance.
  DisablePublicIp?: boolean;

  // Optional. Custom metadata to apply to this instance.
  Metadata?: Map<string, string>;

  /*
Definition of a custom Compute Engine virtual machine image for starting
a workbench instance with the environment installed directly on the VM.
Structure is documented below.
*/
  VmImage?: Workbench_InstanceGceSetupVmImage;

  /*
The hardware accelerators used on this instance. If you use accelerators, make sure that your configuration has
[enough vCPUs and memory to support the `machine_type` you have selected](https://cloud.google.com/compute/docs/gpus/#gpus-list).
Currently supports only one accelerator configuration.
Structure is documented below.
*/
  AcceleratorConfigs?: Array<Workbench_InstanceGceSetupAcceleratorConfig>;
}

export function Workbench_InstanceGceSetup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ShieldedInstanceConfig",
      "A set of Shielded Instance options. See [Images using supported Shielded\nVM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm).\nNot all combinations are valid.\nStructure is documented below.",
      Workbench_InstanceGceSetupShieldedInstanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "Optional. The Compute Engine tags to add to instance (see [Tagging\ninstances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      "Optional. Custom metadata to apply to this instance.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BootDisk",
      "The definition of a boot disk.\nStructure is documented below.",
      Workbench_InstanceGceSetupBootDisk_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ContainerImage",
      "Use a container image to start the workbench instance.\nStructure is documented below.",
      Workbench_InstanceGceSetupContainerImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DisablePublicIp",
      "Optional. If true, no external IP will be assigned to this VM instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "VmImage",
      "Definition of a custom Compute Engine virtual machine image for starting\na workbench instance with the environment installed directly on the VM.\nStructure is documented below.",
      Workbench_InstanceGceSetupVmImage_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableIpForwarding",
      "Optional. Flag to enable ip forwarding or not, default false/off.\nhttps://cloud.google.com/vpc/docs/using-routes#canipforward",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NetworkInterfaces",
      "The network interfaces for the VM. Supports only one interface.\nStructure is documented below.",
      Workbench_InstanceGceSetupNetworkInterface_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ServiceAccounts",
      "The service account that serves as an identity for the VM instance. Currently supports only one service account.\nStructure is documented below.",
      Workbench_InstanceGceSetupServiceAccount_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DataDisks",
      "Data disks attached to the VM instance. Currently supports only one data disk.\nStructure is documented below.",
      Workbench_InstanceGceSetupDataDisks_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AcceleratorConfigs",
      "The hardware accelerators used on this instance. If you use accelerators, make sure that your configuration has\n[enough vCPUs and memory to support the `machine_type` you have selected](https://cloud.google.com/compute/docs/gpus/#gpus-list).\nCurrently supports only one accelerator configuration.\nStructure is documented below.",
      Workbench_InstanceGceSetupAcceleratorConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
