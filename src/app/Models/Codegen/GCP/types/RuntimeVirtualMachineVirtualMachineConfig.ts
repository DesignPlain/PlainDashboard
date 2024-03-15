import { RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig } from "./RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig";
import { RuntimeVirtualMachineVirtualMachineConfigContainerImage } from "./RuntimeVirtualMachineVirtualMachineConfigContainerImage";
import { RuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig } from "./RuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig";
import { RuntimeVirtualMachineVirtualMachineConfigDataDisk } from "./RuntimeVirtualMachineVirtualMachineConfigDataDisk";
import { RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig } from "./RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig";

export interface RuntimeVirtualMachineVirtualMachineConfig {
  /*
The labels to associate with this runtime. Label --keys-- must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label --values-- may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.
*/
  Labels?: Map<string, string>;

  // The Compute Engine machine type used for runtimes.
  MachineType?: string;

  /*
Shielded VM Instance configuration settings.
Structure is documented below.
*/
  ShieldedInstanceConfig?: RuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig;

  /*
(Output)
The Compute Engine guest attributes. (see [Project and instance
guest attributes](https://cloud.google.com/compute/docs/
storing-retrieving-metadata#guest_attributes)).
*/
  GuestAttributes?: Map<string, string>;

  /*
If true, runtime will only have internal IP addresses. By default,
runtimes are not restricted to internal IP addresses, and will
have ephemeral external IP addresses assigned to each vm. This
`internal_ip_only` restriction can only be enabled for subnetwork
enabled networks, and all dependencies must be configured to be
accessible without external IP addresses.
*/
  InternalIpOnly?: boolean;

  /*
Reserved IP Range name is used for VPC Peering. The
subnetwork allocation will use the range -name- if it's assigned.
*/
  ReservedIpRange?: string;

  /*
The Compute Engine subnetwork to be used for machine
communications. Cannot be specified with network. A full URL or
partial URI are valid. Examples:
- `https://www.googleapis.com/compute/v1/projects/[project_id]/
regions/us-east1/subnetworks/sub0`
- `projects/[project_id]/regions/us-east1/subnetworks/sub0`
*/
  Subnet?: string;

  /*
Data disk option configuration settings.
Structure is documented below.
*/
  DataDisk?: RuntimeVirtualMachineVirtualMachineConfigDataDisk;

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
  Network?: string;

  /*
The Compute Engine metadata entries to add to virtual machine.
(see [Project and instance metadata](https://cloud.google.com
/compute/docs/storing-retrieving-metadata#project_and_instance
_metadata)).
*/
  Metadata?: Map<string, string>;

  /*
The type of vNIC to be used on this interface. This may be gVNIC
or VirtioNet.
Possible values are: `UNSPECIFIED_NIC_TYPE`, `VIRTIO_NET`, `GVNIC`.
*/
  NicType?: string;

  /*
Encryption settings for virtual machine data disk.
Structure is documented below.
*/
  EncryptionConfig?: RuntimeVirtualMachineVirtualMachineConfigEncryptionConfig;

  /*
The Compute Engine tags to add to runtime (see [Tagging instances]
(https://cloud.google.com/compute/docs/
label-or-tag-resources#tags)).
*/
  Tags?: Array<string>;

  /*
(Output)
The zone where the virtual machine is located.
*/
  Zone?: string;

  /*
The Compute Engine accelerator configuration for this runtime.
Structure is documented below.
*/
  AcceleratorConfig?: RuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig;

  /*
Use a list of container images to start the notebook instance.
Structure is documented below.
*/
  ContainerImages?: Array<RuntimeVirtualMachineVirtualMachineConfigContainerImage>;
}
