import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  workbench_InstanceGceSetupNetworkInterface,
  workbench_InstanceGceSetupNetworkInterface_GetTypes,
} from "./workbench_InstanceGceSetupNetworkInterface";
import {
  workbench_InstanceGceSetupVmImage,
  workbench_InstanceGceSetupVmImage_GetTypes,
} from "./workbench_InstanceGceSetupVmImage";
import {
  workbench_InstanceGceSetupAcceleratorConfig,
  workbench_InstanceGceSetupAcceleratorConfig_GetTypes,
} from "./workbench_InstanceGceSetupAcceleratorConfig";
import {
  workbench_InstanceGceSetupBootDisk,
  workbench_InstanceGceSetupBootDisk_GetTypes,
} from "./workbench_InstanceGceSetupBootDisk";
import {
  workbench_InstanceGceSetupShieldedInstanceConfig,
  workbench_InstanceGceSetupShieldedInstanceConfig_GetTypes,
} from "./workbench_InstanceGceSetupShieldedInstanceConfig";
import {
  workbench_InstanceGceSetupContainerImage,
  workbench_InstanceGceSetupContainerImage_GetTypes,
} from "./workbench_InstanceGceSetupContainerImage";
import {
  workbench_InstanceGceSetupDataDisks,
  workbench_InstanceGceSetupDataDisks_GetTypes,
} from "./workbench_InstanceGceSetupDataDisks";
import {
  workbench_InstanceGceSetupServiceAccount,
  workbench_InstanceGceSetupServiceAccount_GetTypes,
} from "./workbench_InstanceGceSetupServiceAccount";

export interface workbench_InstanceGceSetup {
  /*
A set of Shielded Instance options. See [Images using supported Shielded
VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm).
Not all combinations are valid.
Structure is documented below.
*/
  shieldedInstanceConfig?: workbench_InstanceGceSetupShieldedInstanceConfig;

  /*
Use a container image to start the workbench instance.
Structure is documented below.
*/
  containerImage?: workbench_InstanceGceSetupContainerImage;

  /*
Data disks attached to the VM instance. Currently supports only one data disk.
Structure is documented below.
*/
  dataDisks?: workbench_InstanceGceSetupDataDisks;

  /*
Optional. Flag to enable ip forwarding or not, default false/off.
https://cloud.google.com/vpc/docs/using-routes#canipforward
*/
  enableIpForwarding?: boolean;

  /*
The service account that serves as an identity for the VM instance. Currently supports only one service account.
Structure is documented below.
*/
  serviceAccounts?: Array<workbench_InstanceGceSetupServiceAccount>;

  // Optional. Custom metadata to apply to this instance.
  metadata?: Map<string, string>;

  /*
The network interfaces for the VM. Supports only one interface.
Structure is documented below.
*/
  networkInterfaces?: Array<workbench_InstanceGceSetupNetworkInterface>;

  /*
Optional. The Compute Engine tags to add to instance (see [Tagging
instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
*/
  tags?: Array<string>;

  /*
Definition of a custom Compute Engine virtual machine image for starting
a workbench instance with the environment installed directly on the VM.
Structure is documented below.
*/
  vmImage?: workbench_InstanceGceSetupVmImage;

  /*
The hardware accelerators used on this instance. If you use accelerators, make sure that your configuration has
[enough vCPUs and memory to support the `machine_type` you have selected](https://cloud.google.com/compute/docs/gpus/#gpus-list).
Currently supports only one accelerator configuration.
Structure is documented below.
*/
  acceleratorConfigs?: Array<workbench_InstanceGceSetupAcceleratorConfig>;

  /*
The definition of a boot disk.
Structure is documented below.
*/
  bootDisk?: workbench_InstanceGceSetupBootDisk;

  // Optional. If true, no external IP will be assigned to this VM instance.
  disablePublicIp?: boolean;

  // Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource
  machineType?: string;
}

export function workbench_InstanceGceSetup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "bootDisk",
      "The definition of a boot disk.\nStructure is documented below.",
      () => workbench_InstanceGceSetupBootDisk_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disablePublicIp",
      "Optional. If true, no external IP will be assigned to this VM instance.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dataDisks",
      "Data disks attached to the VM instance. Currently supports only one data disk.\nStructure is documented below.",
      () => workbench_InstanceGceSetupDataDisks_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "Optional. Custom metadata to apply to this instance.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkInterfaces",
      "The network interfaces for the VM. Supports only one interface.\nStructure is documented below.",
      () => workbench_InstanceGceSetupNetworkInterface_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Optional. The Compute Engine tags to add to instance (see [Tagging\ninstances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vmImage",
      "Definition of a custom Compute Engine virtual machine image for starting\na workbench instance with the environment installed directly on the VM.\nStructure is documented below.",
      () => workbench_InstanceGceSetupVmImage_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorConfigs",
      "The hardware accelerators used on this instance. If you use accelerators, make sure that your configuration has\n[enough vCPUs and memory to support the `machine_type` you have selected](https://cloud.google.com/compute/docs/gpus/#gpus-list).\nCurrently supports only one accelerator configuration.\nStructure is documented below.",
      () => workbench_InstanceGceSetupAcceleratorConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "shieldedInstanceConfig",
      "A set of Shielded Instance options. See [Images using supported Shielded\nVM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm).\nNot all combinations are valid.\nStructure is documented below.",
      () => workbench_InstanceGceSetupShieldedInstanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "containerImage",
      "Use a container image to start the workbench instance.\nStructure is documented below.",
      () => workbench_InstanceGceSetupContainerImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableIpForwarding",
      "Optional. Flag to enable ip forwarding or not, default false/off.\nhttps://cloud.google.com/vpc/docs/using-routes#canipforward",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "serviceAccounts",
      "The service account that serves as an identity for the VM instance. Currently supports only one service account.\nStructure is documented below.",
      () => workbench_InstanceGceSetupServiceAccount_GetTypes(),
      false,
      true,
    ),
  ];
}
