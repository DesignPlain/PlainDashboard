import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  notebooks_RuntimeVirtualMachineVirtualMachineConfigContainerImage,
  notebooks_RuntimeVirtualMachineVirtualMachineConfigContainerImage_GetTypes,
} from "./notebooks_RuntimeVirtualMachineVirtualMachineConfigContainerImage";
import {
  notebooks_RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig,
  notebooks_RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig_GetTypes,
} from "./notebooks_RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig";
import {
  notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDisk,
  notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDisk_GetTypes,
} from "./notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDisk";
import {
  notebooks_RuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig,
  notebooks_RuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig_GetTypes,
} from "./notebooks_RuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig";
import {
  notebooks_RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig,
  notebooks_RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig_GetTypes,
} from "./notebooks_RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig";

export interface notebooks_RuntimeVirtualMachineVirtualMachineConfig {
  /*
Data disk option configuration settings.
Structure is documented below.
*/
  dataDisk?: notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDisk;

  /*
(Output)
The Compute Engine guest attributes. (see [Project and instance
guest attributes](https://cloud.google.com/compute/docs/
storing-retrieving-metadata#guest_attributes)).
*/
  guestAttributes?: Map<string, string>;

  /*
If true, runtime will only have internal IP addresses. By default,
runtimes are not restricted to internal IP addresses, and will
have ephemeral external IP addresses assigned to each vm. This
`internal_ip_only` restriction can only be enabled for subnetwork
enabled networks, and all dependencies must be configured to be
accessible without external IP addresses.
*/
  internalIpOnly?: boolean;

  /*
The Compute Engine tags to add to runtime (see [Tagging instances]
(https://cloud.google.com/compute/docs/
label-or-tag-resources#tags)).
*/
  tags?: Array<string>;

  /*
(Output)
The zone where the virtual machine is located.
*/
  zone?: string;

  /*
The labels to associate with this runtime. Label --keys-- must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label --values-- may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.
*/
  labels?: Map<string, string>;

  /*
The Compute Engine metadata entries to add to virtual machine.
(see [Project and instance metadata](https://cloud.google.com
/compute/docs/storing-retrieving-metadata#project_and_instance
_metadata)).
*/
  metadata?: Map<string, string>;

  /*
The type of vNIC to be used on this interface. This may be gVNIC
or VirtioNet.
Possible values are: `UNSPECIFIED_NIC_TYPE`, `VIRTIO_NET`, `GVNIC`.
*/
  nicType?: string;

  /*
Shielded VM Instance configuration settings.
Structure is documented below.
*/
  shieldedInstanceConfig?: notebooks_RuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig;

  /*
The Compute Engine accelerator configuration for this runtime.
Structure is documented below.
*/
  acceleratorConfig?: notebooks_RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig;

  /*
Use a list of container images to start the notebook instance.
Structure is documented below.
*/
  containerImages?: Array<notebooks_RuntimeVirtualMachineVirtualMachineConfigContainerImage>;

  /*
Encryption settings for virtual machine data disk.
Structure is documented below.
*/
  encryptionConfig?: notebooks_RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig;

  /*
The Compute Engine subnetwork to be used for machine
communications. Cannot be specified with network. A full URL or
partial URI are valid. Examples:
- `https://www.googleapis.com/compute/v1/projects/[project_id]/
regions/us-east1/subnetworks/sub0`
- `projects/[project_id]/regions/us-east1/subnetworks/sub0`
*/
  subnet?: string;

  // The Compute Engine machine type used for runtimes.
  machineType?: string;

  /*
The Compute Engine network to be used for machine communications.
Cannot be specified with subnetwork. If neither `network` nor
`subnet` is specified, the "default" network of the project is
used, if it exists. A full URL or partial URI. Examples:
- `https://www.googleapis.com/compute/v1/projects/[project_id]/
regions/global/default`
- `projects/[project_id]/regions/global/default`
Runtimes are managed resources inside Google Infrastructure.
Runtimes support the following network configurations:
- Google Managed Network (Network & subnet are empty)
- Consumer Project VPC (network & subnet are required). Requires
configuring Private Service Access.
- Shared VPC (network & subnet are required). Requires
configuring Private Service Access.
*/
  network?: string;

  /*
Reserved IP Range name is used for VPC Peering. The
subnetwork allocation will use the range -name- if it's assigned.
*/
  reservedIpRange?: string;
}

export function notebooks_RuntimeVirtualMachineVirtualMachineConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "internalIpOnly",
      "If true, runtime will only have internal IP addresses. By default,\nruntimes are not restricted to internal IP addresses, and will\nhave ephemeral external IP addresses assigned to each vm. This\n`internal_ip_only` restriction can only be enabled for subnetwork\nenabled networks, and all dependencies must be configured to be\naccessible without external IP addresses.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "zone",
      "(Output)\nThe zone where the virtual machine is located.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "The Compute Engine metadata entries to add to virtual machine.\n(see [Project and instance metadata](https://cloud.google.com\n/compute/docs/storing-retrieving-metadata#project_and_instance\n_metadata)).",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containerImages",
      "Use a list of container images to start the notebook instance.\nStructure is documented below.",
      notebooks_RuntimeVirtualMachineVirtualMachineConfigContainerImage_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      'The Compute Engine network to be used for machine communications.\nCannot be specified with subnetwork. If neither `network` nor\n`subnet` is specified, the "default" network of the project is\nused, if it exists. A full URL or partial URI. Examples:\n* `https://www.googleapis.com/compute/v1/projects/[project_id]/\nregions/global/default`\n* `projects/[project_id]/regions/global/default`\nRuntimes are managed resources inside Google Infrastructure.\nRuntimes support the following network configurations:\n* Google Managed Network (Network & subnet are empty)\n* Consumer Project VPC (network & subnet are required). Requires\nconfiguring Private Service Access.\n* Shared VPC (network & subnet are required). Requires\nconfiguring Private Service Access.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dataDisk",
      "Data disk option configuration settings.\nStructure is documented below.",
      notebooks_RuntimeVirtualMachineVirtualMachineConfigDataDisk_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "shieldedInstanceConfig",
      "Shielded VM Instance configuration settings.\nStructure is documented below.",
      notebooks_RuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "acceleratorConfig",
      "The Compute Engine accelerator configuration for this runtime.\nStructure is documented below.",
      notebooks_RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnet",
      "The Compute Engine subnetwork to be used for machine\ncommunications. Cannot be specified with network. A full URL or\npartial URI are valid. Examples:\n* `https://www.googleapis.com/compute/v1/projects/[project_id]/\nregions/us-east1/subnetworks/sub0`\n* `projects/[project_id]/regions/us-east1/subnetworks/sub0`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "guestAttributes",
      "(Output)\nThe Compute Engine guest attributes. (see [Project and instance\nguest attributes](https://cloud.google.com/compute/docs/\nstoring-retrieving-metadata#guest_attributes)).",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "The labels to associate with this runtime. Label **keys** must\ncontain 1 to 63 characters, and must conform to [RFC 1035]\n(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be\nempty, but, if present, must contain 1 to 63 characters, and must\nconform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No\nmore than 32 labels can be associated with a cluster.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nicType",
      "The type of vNIC to be used on this interface. This may be gVNIC\nor VirtioNet.\nPossible values are: `UNSPECIFIED_NIC_TYPE`, `VIRTIO_NET`, `GVNIC`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryptionConfig",
      "Encryption settings for virtual machine data disk.\nStructure is documented below.",
      notebooks_RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The Compute Engine machine type used for runtimes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reservedIpRange",
      "Reserved IP Range name is used for VPC Peering. The\nsubnetwork allocation will use the range *name* if it's assigned.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "The Compute Engine tags to add to runtime (see [Tagging instances]\n(https://cloud.google.com/compute/docs/\nlabel-or-tag-resources#tags)).",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
